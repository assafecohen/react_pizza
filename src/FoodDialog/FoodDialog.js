import React, { Fragment } from 'react';
import styled from 'styled-components';
import { FoodLabel } from '../Menu/FoodGrid';
import { pizzaRed } from '../Styles/colors';
import { Title } from '../Styles/title';
import { formatPrice } from '../Data/FoodData';
import { QuantityInput } from './QuantityInput';
import { useQuantity } from '../Hooks/useQuantity';
const Dialog = styled.div`
  width: 500px;
  background-color: #fff;
  position: fixed;
  top: 75px;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
  z-index: 5;
  display: flex;
  flex-direction: column;
`;
const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  background-color: #000;
  opacity: 0.7;
  z-index: 4;
`;

const DialogBanner = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  ${({ img }) => `background-image: url(${img});`}
  background-position: center;
  background-size: cover;
`;

const DialogBannerName = styled(FoodLabel)`
  top: 100px;
  left: 0px;
  font-size: 30px;
  padding: 5px 40px;
`;
export const DialogContent = styled.div`
  overflow: auto;
  min-height: 100px;
  padding: 0px 40px;
`;
export const DialogFotter = styled.div`
  box-shadow: 0px -2px 10px 0px grey;
  height: 60px;
  display: flex;
  justify-content: center;
`;

export const ConfirmButton = styled(Title)`
  margin: 10px;
  color: #fff;
  height: 20px;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  border: 1px solid #000;
  background-color: ${pizzaRed};
`;

export function getPrice(order) {
  return order.quantity * order.price;
}

function FoodDialogContainer({ openFood, setOpenFood, setOrders, orders }) {
  const quantity = useQuantity(openFood && openFood.quantity);
  function close() {
    setOpenFood();
  }

  const order = {
    ...openFood,
    quantity: quantity.value
  };
  function addToOrder() {
    setOrders([...orders, order]);
    close();
  }
  return openFood ? (
    <Fragment>
      <DialogShadow onClick={close} />
      <Dialog>
        <DialogBanner img={openFood.img}>
          <DialogContent>
            <DialogBannerName>{openFood.name}</DialogBannerName>
          </DialogContent>
        </DialogBanner>
        <DialogContent>
          <QuantityInput quantity={quantity} />
        </DialogContent>
        <DialogFotter>
          <ConfirmButton onClick={addToOrder}>
            Add to order: {formatPrice(getPrice(order))}
          </ConfirmButton>
        </DialogFotter>
      </Dialog>
    </Fragment>
  ) : null;
}

export function FoodDialog(props) {
  if (!props.openFood) return null;
  return <FoodDialogContainer {...props} />;
}
