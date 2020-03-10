import React from 'react';
import styled from 'styled-components';
import { pizzaRed } from '../Styles/colors';
import { Title } from '../Styles/title';

const NavBarStyled = styled.div`
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
export function NavBar() {
  return (
    <NavBarStyled>
      <Logo>SliceLine 🍕</Logo>
    </NavBarStyled>
  );
}
