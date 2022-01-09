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

export const P = styled.p`
  font-size: 1.4rem;
`;

export const H2 = styled.h2`
  font-size: 2.5rem;
`;

// TO DO: ADD STYLES FOR POSTS AND BLOG :D

export const DarkMode = styled.button`
  margin-right: 5%;
  border: none;
  height: 40px;
  width: 40px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  background: transparent;
`;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainWrapper = styled.section`
  width: 40vw;
  height: fit-content;
  min-height: 90vh;
  margin: 0 auto;
`;


export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Open Sans', sans-serif;
    transition: all 0.30s linear;
  }
`