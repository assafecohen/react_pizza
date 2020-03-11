import React from 'react';
import styled from 'styled-components';
import { foodItems } from '../Data/FoodData';
import { Food, FoodGrid, FoodLable } from './FoodGrid';

const MenuStyled = styled.div`
  height: 1000px;
  margin: 0px 400px 50px 20px;
`;
export function Menu() {
  return (
    <MenuStyled>
      <h1>Menu</h1>
      <FoodGrid>
        {foodItems.map(food => (
          <Food img={food.img}>
            <FoodLable>{food.name}</FoodLable>
          </Food>
        ))}
      </FoodGrid>
    </MenuStyled>
  );
}
