import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
		overflow-y: scroll;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Inter', sans-serif;
    max-width: 1216px;
    margin: 0 auto;
    font-size: 18px;
    letter-spacing: 0.05em;
    background-color: ${({ theme }) => theme.colors.background};
    padding: 16px;
		overflow-wrap: anywhere;
    transition: background 0.3s;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;