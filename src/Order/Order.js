import React from 'react';
import styled from 'styled-components';
import {
  ConfirmButton,
  DialogFotter,
  DialogContent
} from '../FoodDialog/FoodDialog';
import { formatPrice } from '../Data/FoodData';
import { getPrice } from '../FoodDialog/FoodDialog';

const OrderStyled = styled.div`
  position: fixed;
  right: 0;
  top: 48px;
  width: 340px;
  height: calc(100% - 48px);
  box-shadow: 4px 0px 5px 5px grey;
  background-color: #fff;
  z-index: 10;
  display: flex;
  flex-direction: column;
`;

const OrderContent = styled(DialogContent)`
  padding: 20px;
  height: 100%;
`;
const OrderContainer = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid grey;
  ${({ editable }) =>
    editable
      ? `
    &:hover {
      cursor: pointer;
      background-color: #e7e7e7;
    }
  `
      : `
    pointer-events: none; 
  `}
`;
const OrderItem = styled.div`
  display: grid;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
  padding: 10px 0px;
`;

const DetailItem = styled.div`
  color: gray;
  font-size: 10px;
`;
export function Order({ orders, setOrders, setOpenFood, loggedIn, login }) {
  const subtotal = orders.reduce((total, order) => {
    return total + getPrice(order);
  }, 0);

  const tax = subtotal * 0.07;
  const total = tax + subtotal;

  const deleteItem = index => {
    const newORders = [...orders];
    newORders.splice(index, 1);
    setOrders(newORders);
  };
  return (
    <OrderStyled>
      {orders.length === 0 ? (
        <OrderContent> Your order is empty </OrderContent>
      ) : (
        <OrderContent>
          <OrderContainer>Your Order</OrderContainer>
          {orders.map((order, index) => (
            <OrderContainer editable>
              <OrderItem
                onClick={() => {
                  setOpenFood({ ...order, index });
                }}
              >
                <div>{order.quantity}</div>
                <div>{order.name}</div>
                <div
                  style={{ cursor: 'pointer' }}
                  onClick={e => {
                    e.stopPropagation();
                    deleteItem(index);
                  }}
                >
                  <span role='img' aria-label='pizza slice'>
                    🗑️
                  </span>
                </div>
                <div>{formatPrice(getPrice(order))}</div>
              </OrderItem>
              <DetailItem>
                {order.toppings
                  .filter(t => t.checked)
                  .map(topping => topping.name)
                  .join(', ')}
              </DetailItem>
              {order.choice && <DetailItem>{order.choice}</DetailItem>}
            </OrderContainer>
          ))}
          <OrderContainer>
            <OrderItem>
              <div></div>
              <div>Sub-Total</div>
              <div>{formatPrice(subtotal)}</div>
            </OrderItem>
            <OrderItem>
              <div></div>
              <div>Tax</div>
              <div>{formatPrice(tax)}</div>
            </OrderItem>
            <OrderItem>
              <div></div>
              <div>Total</div>
              <div>{formatPrice(total)}</div>
            </OrderItem>
          </OrderContainer>
        </OrderContent>
      )}
      <DialogFotter>
        <ConfirmButton
          onClick={() => {
            if (loggedIn) {
              console.log('logged in');
            } else {
              login();
            }
          }}
        >
          Checkout
        </ConfirmButton>
      </DialogFotter>
    </OrderStyled>
  );
}
