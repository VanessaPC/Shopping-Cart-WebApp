import styled from 'styled-components';
import { ROBOTO } from '../../styles/typography';
import { GREEN_600, GREEN_700, GREY_TEXT, ORANGE_200 } from '../../styles/colors';

export const Wrapper = styled.div`
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  font-family: ${ROBOTO};
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
  border: none;
  padding: 0.1rem 1.2rem;
  border-radius: 1rem;
  background-color: ${GREEN_600};
  color: #fff;
  &:hover {
    background-color: ${GREEN_700};
  }

  ${({ secondary }) =>
    secondary &&
    `
  background-color: #fff;
  color: ${GREY_TEXT};
  &:hover {
    background-color: ${ORANGE_200};
  }
  `}
`;
