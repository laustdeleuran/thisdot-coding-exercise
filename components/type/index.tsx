import { css, jsx } from '@emotion/react';
import { FunctionComponent } from 'react';
import Colors from '../../settings/colors';
import Sizes from '../../settings/sizes';

export enum Types {
	HEADER = 'h1',
	P = 'p',
	SUBHEADER = 'h1',
}

const styles = {
	[Types.HEADER]: css`
		color: ${Colors.OFF_WHITE};
		font-size: ${Sizes.HEADER};
		letter-spacing: -0.02em;
		line-height: 1.2em;
		font-weight: 700;
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
		color: ${Colors.OFF_WHITE};
		font-size: ${Sizes.SUBHEADER};
		letter-spacing: -0.02em;
		line-height: 1.2em;
		font-weight: 700;
		margin-bottom: 0.6em;
	`,
};

const Type: FunctionComponent<{ component?: string; type?: Types }> = ({
	children,
	component,
	type = Types.P,
}) =>
	jsx(component || type, {
		css: styles[type],
		children,
	});

export default Type;
