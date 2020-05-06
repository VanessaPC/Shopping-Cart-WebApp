import styled from 'styled-components';
import { YELLOW_200, GREEN_100 } from './colors';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  background: ${YELLOW_200};
  padding: 1rem;
  margin: 1rem;
`;

export const ShopContainer = styled.div`
  padding: 2rem;
`;

export const PageTitle = styled.h2`
  padding-left: 2rem;
`;

export const CheckoutContainer = styled.div`
  background: ${GREEN_100};
  margin-left: 1rem;
  padding: 0.3rem 1rem;
`;

export const ImportantInformation = styled.span`
  display: inline;
  font-weight: 600;
`;
