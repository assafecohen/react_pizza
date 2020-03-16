import React, { Fragment, useState } from 'react';
import { NavBar } from './NavBar/NavBar';
import { Banner } from './Banner/Banner';
import { Menu } from './Menu/Menu';
import { FoodDialog } from './FoodDialog/FoodDialog';
import { Order } from './Order/Order';
import { GlobalStyle } from './Styles/GlobalStyle';

function App() {
  const [openFood, setOpenFood] = useState();

  return (
    <Fragment>
      <GlobalStyle />
      <FoodDialog openFood={openFood} setOpenFood={setOpenFood} />
      <NavBar />
      <Order />
      <Banner />
      <Menu setOpenFood={setOpenFood} />
    </Fragment>
  );
}

export default App;
