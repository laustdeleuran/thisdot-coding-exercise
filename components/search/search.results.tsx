/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Colors from '../../settings/colors';
import Type, { Types } from '../type/type';
import { SearchResults as SearchRes } from './types';

const SPECIAL_SOMEONE = 'laustdeleuran';

const statStyles = css`
	display: inline;
	line-height: 1.2em;

	&::before {
		content: ' – ';
	}
	&:first-child::before {
		content: '';
	}
`;

const SearchResults = ({ data }: { data: SearchRes }) => (
	<div>
		<div
			css={css`
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				justify-content: center;
			`}
		>
			{data.users.map(({ node: user }) => {
				const isSpecialSomeone = user.login === SPECIAL_SOMEONE;
				return (
					<a
						href={user.url}
						key={user.id}
						rel="noreferrer nofollow"
						target="_blank"
						css={css`
							text-decoration: none;
							color: inherit;
							margin: 12px;
						`}
					>
						<article
							css={css`
								background-color: ${isSpecialSomeone
									? Colors.LIGHT_RED
									: Colors.OFF_WHITE};
								overflow: hidden;
								padding: 50px 12px;
								width: 15em;

								@media screen and (max-width: 400px) {
									width: calc(100vw - 48px);
								}
							`}
						>
							<img
								alt="User avatar"
								css={css`
									width: 8em;
									border: 5px solid ${Colors.LIGHT_GREY};
									margin-bottom: 1em;
								`}
								src={user.avatarUrl}
							/>
							<Type.Subheader
								css={css`
									color: ${isSpecialSomeone
										? Colors.OFF_WHITE
										: Colors.LIGHT_RED};
									font-size: 1.6rem;
									margin-bottom: 0.5rem;
									overflow: hidden;
									text-overflow: ellipsis;
									white-space: nowrap;
								`}
								title={user.name || user.login}
							>
								{user.name || user.login}
							</Type.Subheader>
							<ul
								css={css`
									color: ${isSpecialSomeone
										? Colors.OFF_WHITE
										: Colors.DARK_BLUE};
									font-size: 1em;
									list-style: none;
									height: 1.2em;
									margin: 0;
									padding: 0;
								`}
							>
								{user.starredRepositories?.totalCount ? (
									<li css={statStyles}>
										{user.starredRepositories?.totalCount} stars
									</li>
								) : null}
								{user.followers?.totalCount ? (
									<li css={statStyles}>
										{user.followers?.totalCount} followers
									</li>
								) : null}
							</ul>
						</article>
					</a>
				);
			})}
		</div>
	</div>
);

export default SearchResults;
