import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    ::-webkit-scrollbar {
        width: .5rem;
        background-color: #1988C1;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #FFFFFF;
        border-radius: .5rem;
    }

    ::selection {
        background-color: #1988C1;
        color: #FFFFFF;
    }
`;

export default GlobalStyle;