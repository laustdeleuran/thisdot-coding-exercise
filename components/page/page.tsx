/** @jsxImportSource @emotion/react */
import Colors from '../../settings/colors';
import Sizes from '../../settings/sizes';
import { FunctionComponent } from 'react';
import { css } from '@emotion/react';

const containerStyles = css`
	margin-left: auto;
	margin-right: auto;
	max-width: 1128px;
	padding-left: 24px;
	padding-right: 24px;
`;

/**
 * @main
 * Basic page layout container
 */
const Page: FunctionComponent = ({ children }) => (
	<>
		<header
			css={css`
				${containerStyles}
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				padding-bottom: 33px;
				padding-top: 33px;
			`}
		>
			<a href="https://labs.thisdot.co/">
				<img
					css={css`
						height: 34px;
						display: block;
					`}
					src="/logo-thisdot.svg"
					alt="This Dot Logo"
				/>
			</a>
			<a
				css={css`
					color: ${Colors.OFF_WHITE};
					font-size: ${Sizes.SMALL};
					font-weight: 600;
					line-height: 34px;
					text-decoration: none;
				`}
				href="https://ljd.dk"
			>
				ljd.dk
			</a>
		</header>
		<main
			css={css`
				${containerStyles}
				margin-top: 120px;
				margin-bottom: 120px;

				@media screen and (max-width: 500px) {
					margin-top: 60px;
					margin-bottom: 60px;
				}
			`}
		>
			{children}
		</main>
	</>
);

export default Page;
