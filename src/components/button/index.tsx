import React from 'react';
import { Button, Wrapper } from './styles';

export const Types = {
  primary: 'primary',
  secondary: 'secondary',
};

const ButtonComponent = ({ children, onClick, secondary }: any) => (
  <Wrapper>
    <Button onClick={onClick} secondary={secondary}>
      {children}
    </Button>
  </Wrapper>
);

export default ButtonComponent;
