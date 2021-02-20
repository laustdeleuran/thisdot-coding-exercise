import { css, jsx, SerializedStyles } from '@emotion/react';
import styled, { StyledComponent } from '@emotion/styled';
import { CreateStyled } from '@emotion/styled/types/base';
import { FunctionComponent } from 'react';
import Colors from '../../settings/colors';
import Sizes from '../../settings/sizes';

/**
 * Typography 'types'
 */
export enum Types {
	HEADER = 'h1',
	P = 'p',
	SUBHEADER = 'h2',
}

/**
 * Typography styles based on `Types`
 */
const styles = {
	[Types.HEADER]: css`
		color: ${Colors.OFF_WHITE};
		font-size: ${Sizes.HEADER};
		letter-spacing: -0.02em;
		line-height: 1.2em;
		font-weight: 600;
		margin-bottom: 0.6em;

		@media screen and (max-width: 500px) {
			font-size: ${Sizes.SUBHEADER};
		}
	`,
	[Types.P]: css`
		color: ${Colors.LIGHT_BLUE};
		font-size: ${Sizes.BODY};
		line-height: 1.54em;
		margin-bottom: 1em;

		@media screen and (max-width: 500px) {
			font-size: ${Sizes.BASE};
		}
	`,
	[Types.SUBHEADER]: css`
		color: ${Colors.OFF_WHITE};
		font-size: ${Sizes.SUBHEADER};
		letter-spacing: -0.02em;
		line-height: 1.2em;
		font-weight: 600;
		margin-bottom: 0.6em;

		@media screen and (max-width: 500px) {
			font-size: ${Sizes.BODY};
		}
	`,
};

/**
 * @main
 * Set up each individual type and use dot notation to make them all available
 * on default element.
 */
const P = styled.p`
	${styles[Types.P]}
`;
const Header = styled.h1`
	${styles[Types.HEADER]}
`;
const Subheader = styled.h2`
	${styles[Types.SUBHEADER]}
`;

type TypeCollection = StyledComponent<any, any, any> & {
	Header?: StyledComponent<any, any, any>;
	P?: StyledComponent<any, any, any>;
	Subheader?: StyledComponent<any, any, any>;
};

const Type: TypeCollection = P; // Default element
Type.Header = Header;
Type.P = P;
Type.Subheader = Subheader;

export default Type;
