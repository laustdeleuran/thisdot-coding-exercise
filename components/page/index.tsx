/** @jsxImportSource @emotion/react */ // https://github.com/emotion-js/emotion/issues/2041

import { css } from '@emotion/react';
import { FunctionComponent } from 'react';

const Page: FunctionComponent = ({ children }) => (
	<main
		css={css`
			margin: 120px auto;
			max-width: 876px;
			padding: 0 24px;
		`}
	>
		{children}
	</main>
);

export default Page;
