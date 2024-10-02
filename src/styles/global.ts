import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${({ theme }) => theme.colors.bg};
    }

    body, input, button {
        font: ${({ theme }) => theme.typegraphy.roboto["font-md"]};
    }
`;


