import { createGlobalStyle } from "styled-components";
import { colours } from '../Shared/SharedStyles';

const GlobalStyle = createGlobalStyle`
    html {
        scroll-behavior: smooth;
        background: #000;
        color: #fff;
    }

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        background: #333;
    }

    ::-webkit-scrollbar-thumb {
        background: ${colours.orange};
        border-radius: 20px;
    }
`;

export default GlobalStyle;