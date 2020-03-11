import React, { Fragment } from 'react';
import { NavBar } from './NavBar/NavBar';
import { Banner } from './Banner/Banner';
import { Menu } from './Menu/Menu';

import { GlobalStyle } from './Styles/GlobalStyle';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <NavBar />
      <Banner />
      <Menu />
    </Fragment>
  );
}

export default App;
