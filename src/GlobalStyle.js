import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
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
        background-color: ${({ theme }) => theme.colors.lightMode.lightGray};
    }
`;