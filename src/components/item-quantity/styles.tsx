import styled from 'styled-components';
import { GREY_TEXT } from '../../styles/colors';

export const SelectorLabel = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${GREY_TEXT};
  display: block;
`;

export const SelectorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0.5rem 0;
`;
export const Selector = styled.select`
  font-size: 0.8rem;
  border: none;
  border-radius: 0;
  background-color: '#FFF';
`;
