import { createGlobalStyle } from 'styled-components';

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
    background-color: ${(p) => p.theme.body};
    }
    input,
    button {
        font-family: inherit;
        font-size: inherit;
        border: none;
        outline: none;
    }
    .container {
      width: 90%;
      max-width: 35rem;
      margin: 0 auto;
      position: relative;
      bottom: 13rem;
    }
    .wrapper {
      box-shadow: ${(p) =>
        p.theme.state === 'light' &&
        'rgba(194, 195, 214, 0.5) 0px 35px 50px -15px'};
      border-radius: 0.5rem;
      background-color: ${(p) => p.theme.todoSurface};
    }
`;
