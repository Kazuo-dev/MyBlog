import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export default function Nav({ children }) {
  return (
    <NavWrapper>
      <NavBar>
        <Link href="/">
          <Logo> DoDoDev! </Logo>
        </Link>
        <ul>
            <Link href="/blog"> Blog </Link>
            { children }
        </ul>
      </NavBar>
    </NavWrapper>
    )
}

const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 40%;
  height: 10vh;
  z-index: 10;

  @media (max-width: 1400px) {
      width: 60%;
   }

  @media (max-width: 870px) {
    width: 80%;
  }
`;

const Logo = styled.label`
  font-size: 2rem;
  font-weight: 400;

  @media (min-width: 2000px) {
        font-size: 1.4vw;
      }
`;

const NavBar = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;

  ul {
    list-style: none;
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 1.2rem;

    @media (min-width: 2000px) {
        font-size: 1vw;
      }

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.text};
      transition: all 0.1s linear;
      font-weight: 200;

      &:hover {
        color: lightgray;
      }
    }
  }
`;
