import React, { Fragment, useState } from 'react';
import { NavBar } from './NavBar/NavBar';
import { Banner } from './Banner/Banner';
import { Menu } from './Menu/Menu';
import { FoodDialog } from './FoodDialog/FoodDialog';
import { Order } from './Order/Order';
import { GlobalStyle } from './Styles/GlobalStyle';
import { useOpenFood } from './Hooks/useOpenFood';
import { useOrders } from './Hooks/useOrders';
import { useTitle } from './Hooks/useTitle';
function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  useTitle({ ...openFood, ...orders });

  return (
    <Fragment>
      <GlobalStyle />
      <FoodDialog {...orders} {...openFood} />
      <NavBar />
      <Order {...orders} {...openFood} />
      <Banner />
      <Menu {...openFood} />
    </Fragment>
  );
}

export default App;
