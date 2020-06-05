import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        scroll-behavior: smooth;
    }

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        background: #333;
    }

    ::-webkit-scrollbar-thumb {
        background: #E78200;
        border-radius: 20px;
    }
`;

export default GlobalStyle;