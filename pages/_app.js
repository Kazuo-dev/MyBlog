// import GlobalStyle from '../styles/globalStyles';
import '../styles/normalize.css';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
// import '../styles/globals.scss';
import { lightTheme, darkTheme, GlobalStyles, DarkMode, AppWrapper, MainWrapper } from '../styles/ThemeConfig';
import Nav from '../component/Nav/Nav';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <>
      <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <AppWrapper>
          <Nav>
            <DarkMode onClick={toggleTheme} />
          </Nav>
          <MainWrapper>
            <Component {...pageProps} />
          </MainWrapper>
        </AppWrapper>
      </ThemeProvider>
    </>
  )
}

export default MyApp