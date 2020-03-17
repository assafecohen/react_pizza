import React, { Fragment } from 'react';
import { NavBar } from './NavBar/NavBar';
import { Banner } from './Banner/Banner';
import { Menu } from './Menu/Menu';
import { FoodDialog } from './FoodDialog/FoodDialog';
import { Order } from './Order/Order';
import { GlobalStyle } from './Styles/GlobalStyle';
import { useOpenFood } from './Hooks/useOpenFood';
import { useOrders } from './Hooks/useOrders';
import { useTitle } from './Hooks/useTitle';
import { useAuthentication } from './Hooks/useAuthentication';

function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  const auth = useAuthentication();
  useTitle({ ...openFood, ...orders });

  return (
    <Fragment>
      <GlobalStyle />
      <FoodDialog {...orders} {...openFood} />
      <NavBar {...auth} />
      <Order {...orders} {...openFood} {...auth} />
      <Banner />
      <Menu {...openFood} />
    </Fragment>
  );
}

export default App;
