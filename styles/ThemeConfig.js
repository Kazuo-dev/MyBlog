import { createGlobalStyle } from "styled-components"
import styled from 'styled-components';

export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
}

export const darkTheme = {
  body: 'rgba(0,0,0,0.8)',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  color: 'white',
}


export const DarkMode = styled.button`
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
  color: ${({ theme }) => theme.text};
  font-family: 'Poppins', sans-serif;
  transition: all 0.30s linear;
  width: 100%;

  @media (max-width: 1400px) {
      width: 80vw;
      margin: 0 auto;
   }

   @media (max-width: 400px) {
      width: 100%;
    }


  `;

  

export const MainWrapper = styled.section`
  width: 40%;
  height: fit-content;
  min-height: 90vh;
  margin: 0 auto;

  @media (max-width: 1400px) {
      width: 60%;
   }

   @media (max-width: 870px) {
      width: 80%;
   }

  `;


export const GlobalStyles = createGlobalStyle`
 /* { } */
 body {
  background: ${({ theme }) => theme.body};
 }
`

// TO DO: ADD STYLES FOR POSTS AND BLOG :D


export const P = styled.p`
font-size: 1.4rem;

@media (min-width: 2000px) {
        font-size: 1.1vw;
      }
`;

export const H2 = styled.h2`
font-size: 2.5rem;
color: lightgreen;

@media (min-width: 2000px) {
        font-size: 3vw;
      }
`;
