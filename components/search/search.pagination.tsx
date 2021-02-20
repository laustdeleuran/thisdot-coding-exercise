/** @jsxImportSource @emotion/react */
import Colors from '../../settings/colors';
import { FunctionComponent } from 'react';
import { css } from '@emotion/react';

const styleLink = css`
	margin: 0 1em;
`;

const styleLinkDisabled = css`
	color: ${Colors.LIGHT_BLUE};
	cursor: not-allowed;
	text-decoration: none;
	opacity: 0.5;
`;

/**
 * @main
 */
const SearchPagination: FunctionComponent<{
	hasNext: boolean;
	hasPrev: boolean;
	onNext: Function;
	onPrev: Function;
}> = ({ hasNext, hasPrev, onNext, onPrev }) => (
	<nav
		css={css`
			display: flex;
			flex-direction: row;
			justify-content: center;
			margin-top: 1em;
		`}
	>
		<a
			css={css`
				${styleLink}
				${!hasPrev ? styleLinkDisabled : ''}
			`}
			href="#prev"
			onClick={(event) => {
				event.preventDefault();
				if (hasPrev) onPrev();
			}}
			tabIndex={hasPrev ? -1 : 0}
		>
			&larr; Previous page
		</a>
		<a
			css={css`
				${styleLink}
				${!hasNext ? styleLinkDisabled : ''}
			`}
			href="#next"
			onClick={(event) => {
				event.preventDefault();
				if (hasNext) onNext();
			}}
			tabIndex={hasPrev ? -1 : 0}
		>
			Next page &rarr;
		</a>
	</nav>
);

export default SearchPagination;
