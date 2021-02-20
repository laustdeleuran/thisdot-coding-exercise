import NextHead from 'next/head';
import { FunctionComponent } from 'react';
import { SITE_TITLE } from '../../settings/meta';

const Head: FunctionComponent<{ title?: string }> = ({ children, title }) => (
	<NextHead>
		<title>
			{title ? `${title} – ` : ''}
			{SITE_TITLE}
		</title>
		<link rel="icon" href="/favicon.png" />
		{children}
	</NextHead>
);

export default Head;
