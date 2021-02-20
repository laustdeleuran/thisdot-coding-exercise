import { NextApiHandler } from 'next';

const GITHUB_PERSONAL_ACCESS_TOKEN = '180dc080215f5e003170a9eb5de91968ac4624e7';

/**
 * Fetch options
 */
const options = {
	method: 'POST',
	headers: {
		Authorization: `bearer ${GITHUB_PERSONAL_ACCESS_TOKEN}`,
		'Content-Type': 'application/json',
	},
};

/**
 * Query
 * @src https://docs.github.com/en/graphql/overview/explorer
 */
const query = (q: string, after?: string, count: number = 10): string => `{
  search(after: ${
		after ? `"${after}"` : `null`
	}, first: ${count}, query: "${q}", type: USER) {
    users: edges {
      node {
        ... on User {
          avatarUrl
          bio
          company
          followers { totalCount }
          gists { totalCount }
          id
          name
          repositories { totalCount }
          starredRepositories { totalCount }
          url
        }
      }
      cursor
    }
    userCount
  }
}`;

const search: NextApiHandler = async (req, res) => {
	try {
		const {
			query: { q, after },
		} = req;

		const results = await fetch('https://api.github.com/graphql', {
			...options,
			body: JSON.stringify({
				query: query(q as string, after as string),
			}),
		}).then((res) => res.json());

		res.status(200).json({
			users: results.data.search.users,
		});
	} catch (error) {
		return res.status(503).json({ error });
	}
};

export default search;
