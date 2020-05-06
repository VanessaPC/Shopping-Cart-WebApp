import { createGlobalStyle } from 'styled-components';
import { typography } from './typography';
import { ORANGE_600, ORANGE_400 } from './colors';

export const GlobalStyle = createGlobalStyle`
  ${typography};

  * {
    font-style: normal;
    font-family: 'Roboto', sans-serif;
  }
  body {
    margin: 0;
    font-size: 1rem;
    line-height: 1.25rem;
    font-weight: 200;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 4rem minmax(20rem,auto);
    grid-template-areas:
      "header"
      "main"
      "footer";
  }
  strong, button {
    font-family: 'Roboto', sans-serif;
  }
  a {
    color: ${ORANGE_400};
    text-decoration: none;
    transition: all .3s ease-out;
  }
  a:hover {
    color: ${ORANGE_600};
  }
  button {
    border: 0;
    border-radius: 6.25rem;
    cursor: pointer;
  }
  .header{
    grid-area: header;
    display: flex;
    align-items: center;
    margin: 20px 40px;
  }
  .header figure{
    flex: 1;
  }

  main{
    grid-area: main;
    display: grid;
  }
  main section {
    display: flex;
    justify-content: center;
  }

`;

export const FlexCol = `
  display: flex;
  flex-direction: column;
  align-items: center;
`;
