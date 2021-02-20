/** @jsxImportSource @emotion/react */
import Colors from '../../settings/colors';
import SearchResults from './search.results';
import useSWR from 'swr';
import { SearchDirection } from '../../settings/search';
import { SearchResults as SearchRes } from './types';
import { css } from '@emotion/react';
import { fetcher } from '../../utils/fetcher';
import { useRef, useState } from 'react';
import SearchPagination from './search.pagination';
import Type from '../type/type';

const Search = () => {
	const resultsRef = useRef(null);
	const [inputValue, setInputValue] = useState<string>('');
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [cursor, setCursor] = useState<string>('');
	const [direction, setDirection] = useState<SearchDirection>(
		SearchDirection.NEXT,
	);

	const { data, error, mutate } = useSWR<SearchRes>(
		searchTerm
			? `/api/search?q=${searchTerm}&d=${direction}&c=${cursor}`
			: null,
		fetcher,
	);
	const isLoading = searchTerm && !data && !error;

	return (
		<>
			<form
				css={css`
					background: ${Colors.OFF_WHITE};
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					margin: 100px auto 50px;
					max-width: 712px;
					padding: 3.8vw 6.25vw;
				`}
				onSubmit={(event) => {
					event.preventDefault();
					setSearchTerm(inputValue);
					mutate();
					resultsRef.current?.scrollIntoView();
				}}
			>
				<input
					css={css`
						background: ${Colors.WHITE};
						border: 1px solid ${Colors.LIGHT_GREY};
						font-size: 1em;
						padding: 16px 20px 15px;
						width: 67%;
					`}
					onChange={(event) => setInputValue(event.target.value)}
					placeholder="Search for Github users..."
					type="search"
					value={inputValue}
				/>
				<button
					css={css`
						background-color: ${Colors.LIGHT_RED};
						border-radius: 300px;
						border: none;
						color: ${Colors.WHITE};
						cursor: pointer;
						font-size: 1em;
						font-weight: 600;
						padding: 14px 48px;
						transition: color 0.25s ease, background-color 0.25s ease;

						&:hover {
							background-color: ${Colors.MEDIUM_RED};
						}

						&[disabled] {
							opacity: 0.7;
							cursor: not-allowed;
						}
					`}
					disabled={!inputValue}
					type="submit"
				>
					Search
				</button>
			</form>
			<div ref={resultsRef} />
			{isLoading ? 'Loading...' : null}
			{error ? (
				<div
					css={css`
						background: ${Colors.LIGHT_YELLOW};
						margin: 0 auto;
						max-width: 512px;
						padding: 3.8vw 6.25vw;
					`}
				>
					<Type
						css={css`
							color: ${Colors.DARK_BLUE};
							margin-bottom: 0;
						`}
					>
						{error.toString()}
					</Type>
				</div>
			) : null}
			{data ? (
				<>
					<Type>{data.count} results found!</Type>
					<SearchResults data={data} />
					<SearchPagination
						hasNext={data.pageInfo.hasNextPage}
						hasPrev={data.pageInfo.hasPreviousPage}
						onNext={() => {
							setCursor(data.pageInfo.endCursor);
							setDirection(SearchDirection.NEXT);
							resultsRef.current?.scrollIntoView();
						}}
						onPrev={() => {
							setCursor(data.pageInfo.startCursor);
							setDirection(SearchDirection.PREV);
							resultsRef.current?.scrollIntoView();
						}}
					/>
				</>
			) : null}
		</>
	);
};

export default Search;
