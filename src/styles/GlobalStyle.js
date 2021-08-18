import { createGlobalStyle } from "styled-components"
import { lightTheme, darkTheme } from "../theme/theme";

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }
    body {
    font-family: 'Josefin Sans', BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    font-size: 18px;
    font-weight: 400;
    transition: background-color 200ms ease;
    background-color: ${props => props.theme === 'light' ? lightTheme.body : darkTheme.body};
    }
    input,
    button {
        font-family: inherit;
        font-size: inherit;
        border: none;
        outline: none;
    }
`