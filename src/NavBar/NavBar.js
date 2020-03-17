import React from 'react';
import styled from 'styled-components';
import { pizzaRed } from '../Styles/colors';
import { Title } from '../Styles/title';

const NavBarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${pizzaRed};
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 999;
`;
const Logo = styled(Title)`
  font-size: 20px;
  color: white;
  text-shadow: 1px 1px 3px #672b2b;
`;

const UserStatus = styled.div`
  color: #fff;
  font-size: 18px;
  margin-right: 30px;
`;
const LoginButton = styled.span`
  cursor: pointer;
`;
export function NavBar({ login, loggedIn, logout }) {
  return (
    <NavBarStyled>
      <Logo>
        Sliceline{' '}
        <span role='img' aria-label='pizza slice'>
          🍕
        </span>
      </Logo>
      <UserStatus>
        {loggedIn !== 'loading' ? (
          <>
            👤 {loggedIn ? 'Logged in.' : ''}
            {loggedIn ? (
              <LoginButton onClick={logout}> Log out </LoginButton>
            ) : (
              <LoginButton onClick={login}> Log in / Sign up </LoginButton>
            )}
          </>
        ) : (
          'loading...'
        )}
      </UserStatus>
    </NavBarStyled>
  );
}
