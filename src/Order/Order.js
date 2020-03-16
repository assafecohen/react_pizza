import React from 'react';
import styled from 'styled-components';
import {
  ConfirmButton,
  DialogFotter,
  DialogContent
} from '../FoodDialog/FoodDialog';

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

export function Order({ orders }) {
  return (
    <OrderStyled>
      {orders.length === 0 ? (
        <OrderContent> Your order is empty </OrderContent>
      ) : (
        <OrderContent>Found {orders.length} orders</OrderContent>
      )}
      <DialogFotter>
        <ConfirmButton>Chectout</ConfirmButton>
      </DialogFotter>
    </OrderStyled>
  );
}
