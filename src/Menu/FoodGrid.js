import React from 'react';
import styled from 'styled-components';
import { Title } from '../Styles/title';

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const FoodLabel = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 5px;
`;
export const Food = styled(Title)`
  height: 100px;
  padding: 10px;
  font-size: 20px;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: cover;
  border-radius: 7px;
  filter: contrast(75%);
  box-shadow: 1px 1px 15px #525151;
  filter: brightness(85%);
  &:hover {
    cursor: pointer;
    filter: brightness(100%);
  }
`;
