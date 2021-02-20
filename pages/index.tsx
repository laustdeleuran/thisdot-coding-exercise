/** @jsxImportSource @emotion/react */
import Head from '../components/head/head';
import Page from '../components/page/page';
import Search from '../components/search/search';
import Type, { Types } from '../components/type/type';
import { css } from '@emotion/react';

const Home = () => (
	<>
		<Head />
		<Page>
			<header
				css={css`
					max-width: 50rem;
					text-align: center;
					margin: 0 auto;
				`}
			>
				<Type.Header>Hi John &amp; This Dot Labs</Type.Header>
				<Type>
					You should be able to complete all the user stories outlined in{' '}
					<a href="https://github.com/laustdeleuran/thisdot-coding-exercise/blob/main/SOW.md">
						the documentation you provided
					</a>
					. Thank you for providing this opportunity. It was a fun little
					assignment.
				</Type>
				<Search></Search>
			</header>
		</Page>
	</>
);

export default Home;
