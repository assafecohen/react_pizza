import React, { Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { NavBar } from './NavBar/NavBar';
import { Banner } from './Banner/Banner';

const GlobalStyle = createGlobalStyle`
 body{
  font-family: 'Open Sans', sans-serif;
  margin: 0;
 }
 h1,h2,h3{
  font-family: 'Righteous', cursive;
 }
`;

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <NavBar />
      <Banner />
    </Fragment>
  );
}

export default App;