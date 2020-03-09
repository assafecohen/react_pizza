import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 body{
  background-color: blue;
 }
`;

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <div>Hello</div>
    </Fragment>
  );
}

export default App;
g;
