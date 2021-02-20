import Head from '../components/head';
import Page from '../components/page';
import Type, { Types } from '../components/type';

const Home = () => (
	<>
		<Head />
		<Page>
			<Type type={Types.P}>Hello world</Type>
		</Page>
	</>
);

export default Home;
