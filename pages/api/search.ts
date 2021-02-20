import { NextApiHandler } from 'next';
import { SearchDirection } from '../../settings/search';

/**
 * Fetch options
 * @src https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */
const options = {
	method: 'POST',
	headers: {
		Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
		'Content-Type': 'application/json',
	},
};

/**
 * Query
 * @src https://docs.github.com/en/graphql/overview/explorer
 * @src https://graphql.org/learn/pagination/
 * @src https://stackoverflow.com/a/52608910
 */
const query = (q: string, d: SearchDirection, c?: string): string => `{
	search(query: "${q}", ${d}: 6, ${
	c ? `${d === SearchDirection.NEXT ? 'after' : 'before'}: "${c}", ` : ''
}type: USER) {
		users: edges {
			node {
				... on User {
					avatarUrl
					followers { totalCount }
					id
					login
					name
					starredRepositories { totalCount }
					url
				}
			}
		}
		pageInfo {
			endCursor
			hasNextPage
			hasPreviousPage
			startCursor
		}
		userCount
	}
}`;

/**
 * @main
 * API handler
 */
const search: NextApiHandler = async (req, res) => {
	try {
		const {
			query: { q, c, d },
		} = req;

		const results = await fetch('https://api.github.com/graphql', {
			...options,
			body: JSON.stringify({
				query: query(
					q as string,
					(d as SearchDirection) || SearchDirection.NEXT,
					c as string,
				),
			}),
		}).then((res) => res.json());

		res.status(200).json({
			users: results.data.search.users,
			pageInfo: results.data.search.pageInfo,
			count: results.data.search.userCount,
		});
	} catch (error) {
		return res.status(503).json({ error: error?.message || 'API Error (1)' });
	}
};

export default search;
