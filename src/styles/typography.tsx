import { css } from 'styled-components';
import { GREY_TEXT } from './colors';

export const ROBOTO = 'Roboto';

export const typography = css`
  * {
    text-align: left;
  }

  body {
    font-family: '${ROBOTO}';
    font-size: 1rem;
    line-height: 1.7rem;
    letter-spacing: 0;
    font-weight: normal;
    text-align: left;
    color: ${GREY_TEXT};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6, p {
    color: ${GREY_TEXT};
    @-moz-document url-prefix() {
      font-weight: lighter;
    }
  }

  h1 {
    font-family: '${ROBOTO}';
    font-size: 1.75rem;
    line-height: 2.25rem;
  }

  h2 {
    font-size: 1.5rem;
    line-height: 1.75rem;
    letter-spacing: -0.01em;
  }


  h3 {
    font-size: 1.25rem;
    line-height: 1.5rem;
    letter-spacing: 0.01em;
  }

  p {
    letter-spacing: 0.02rem;
  }

  h4, span, button {
    font-size: 0.8125rem;
    line-height: 0.7rem;
    letter-spacing: 0.02rem;
  }

  
`;
