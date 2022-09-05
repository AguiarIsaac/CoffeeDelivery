import { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.colors.backgorund};
    font-family: 'Roboto', sans-serif;
  }
`

/* font-family: 'Baloo 2', cursive;
font-family: 'Roboto', sans-serif;*/