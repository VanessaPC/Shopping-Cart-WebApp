import styled from 'styled-components';
import { GREEN_600, GREEN_700, GREEN_100 } from '../../styles/colors';

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${GREEN_700};
  color: ${GREEN_600};
  padding: 1.5rem 4rem;
  vertical-align: middle;
  justify-content: flex-end;
`;

export const NavigationLinks = styled.a`
  padding: 0.5rem;
  color: ${GREEN_100};
  &:hover {
    color: '#fff';
  }
`;
