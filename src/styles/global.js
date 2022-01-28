import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    --button: #6558f5
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif !important;
}

body {
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
}

button {
    cursor: pointer;
}

`;
