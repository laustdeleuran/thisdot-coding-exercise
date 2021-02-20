import { css, jsx, SerializedStyles } from '@emotion/react';
import styled, { StyledComponent } from '@emotion/styled';
import { CreateStyled } from '@emotion/styled/types/base';
import { FunctionComponent } from 'react';
import Colors from '../../settings/colors';
import Sizes from '../../settings/sizes';

export enum Types {
	HEADER = 'h1',
	P = 'p',
	SUBHEADER = 'h2',
}

const styles = {
	[Types.HEADER]: css`
		color: ${Colors.OFF_WHITE};
		font-size: ${Sizes.HEADER};
		letter-spacing: -0.02em;
		line-height: 1.2em;
		font-weight: 600;
		margin-bottom: 0.6em;
	`,
	[Types.P]: css`
		color: ${Colors.LIGHT_BLUE};
		font-size: ${Sizes.BODY};
		line-height: 1.54em;
		margin-bottom: 1em;
	`,
	[Types.SUBHEADER]: css`
		color: ${Colors.OFF_WHITE};
		font-size: ${Sizes.SUBHEADER};
		letter-spacing: -0.02em;
		line-height: 1.2em;
		font-weight: 600;
		margin-bottom: 0.6em;
	`,
};

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

const Type: TypeCollection = P;
Type.Header = Header;
Type.P = P;
Type.Subheader = Subheader;

export default Type;
