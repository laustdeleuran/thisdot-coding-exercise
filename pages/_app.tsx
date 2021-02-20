import type { AppProps /*, AppContext */ } from 'next/app';
import GlobalStyles from '../components/global-styles/global-styles';

const App = ({ Component, pageProps }: AppProps) => (
	<>
		<GlobalStyles />
		<Component {...pageProps} />
	</>
);

export default App;
