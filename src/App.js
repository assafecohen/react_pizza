import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 body{
  font-family: 'Open Sans', sans-serif;
 }
 h1,h2,h3{
  font-family: 'Righteous', cursive;
 }
`;

function App() {
  return (
    <Fragment>
      <h1>Hello</h1>
      <GlobalStyle />
      <div>Hello</div>
    </Fragment>
  );
}

export default App;
