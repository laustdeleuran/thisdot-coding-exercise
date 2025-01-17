import Colors from '../../settings/colors';
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';

/**
 * @main
 * Global base styles and CSS reset.
 */
const GlobalStyles = () => (
	<Global
		styles={css`
			@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;1,400;1,600&display=swap');

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
				min-width: 300px;
			}

			a {
				text-decoration: underline;
				color: ${Colors.LIGHT_RED};

				&:hover {
					text-decoration: none;
				}

				&:focus,
				&:active {
					outline: 2px dotted ${Colors.LIGHT_BLUE};
				}
			}

			input,
			button,
			textarea {
				font-family: Montserrat, sans-serif;
			}
		`}
	/>
);

export default GlobalStyles;
