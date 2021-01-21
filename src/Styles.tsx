import { createGlobalStyle } from 'styled-components'

export const Body = createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Open Sans Condensed', sans-serif;
    padding: 20px 60px;
  }
  
  a {
    text-decoration: none;
    color: black;
  }

`
