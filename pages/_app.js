import GlobalStyle from '../styles/globalStyles';
import '../styles/normalize.css';
import '../styles/globals.scss';


function MyApp({ Component, pageProps }) {
  return (
    <> 
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
