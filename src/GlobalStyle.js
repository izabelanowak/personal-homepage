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
        background-color: ${({ theme }) => theme.colors.lightMode.lightGray};
        letter-spacing: 0.05em;
    }
`;