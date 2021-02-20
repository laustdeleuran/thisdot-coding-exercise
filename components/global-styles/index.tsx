import Colors from '../../settings/colors';
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
	<Global
		styles={css`
			@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&display=swap');

			${emotionReset}

			*,
			*::after,
			*::before {
				box-sizing: border-box;
				-moz-osx-font-smoothing: grayscale;
				-webkit-font-smoothing: antialiased;
				font-smoothing: antialiased;
			}

			html,
			body {
				background-color: ${Colors.DARK_BLUE};
				color: ${Colors.OFF_WHITE};
				font-family: Montserrat, sans-serif;
				font-weight: 400;
			}
		`}
	/>
);

export default GlobalStyles;
