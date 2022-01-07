import { createGlobalStyle } from "styled-components"
import styled from 'styled-components';

export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',
}

export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
  color: 'white',
}

export const DarkMode = styled.button`
  margin-right: 5%;
  border: none;
  background-color: blue;
  height: 40px;
  width: 40px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
`;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainWrapper = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 10vh;
`;

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Karla', sans-serif;
    transition: all 0.10s linear;
  }
`