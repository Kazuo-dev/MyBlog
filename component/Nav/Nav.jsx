import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export default function Nav({ children }) {
  return (
    <NavWrapper>
      <NavBar>
        <ul>
            <Link href="/about"> Sobre mi </Link>
            <Link href="/"> Home </Link>
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
  justify-content: flex-end;
  width: 100vw;
  height: 10vh;
  position: fixed;
`;

const NavBar = styled.div`
  width: 40vw;
  height: 10vh;
  display: flex;
  font-size: 1.1rem;

  ul {
    list-style: none;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 1.2rem;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.text};
      transition: all 0.1s linear;
      font-weight: 200;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
