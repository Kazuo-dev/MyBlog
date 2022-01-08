import '../styles/normalize.css';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles, DarkMode, AppWrapper, MainWrapper } from '../styles/ThemeConfig';
import Nav from '../component/Nav/Nav';
import { CgSun } from 'react-icons/cg';
import { HiMoon } from 'react-icons/hi';
import Footer from '../component/Footer/Footer';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }
  const icon = theme == 'light' ? <HiMoon /> : <CgSun />

  return (
    <>
      <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <AppWrapper>
          <Nav>
            <DarkMode onClick={toggleTheme}>
              { icon }
            </DarkMode>
          </Nav>
          <MainWrapper>
            <Component {...pageProps} />
          </MainWrapper>
          <Footer />
        </AppWrapper>
      </ThemeProvider>
    </>
  )
}

export default MyApp