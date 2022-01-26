import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    --button: #6558f5
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    -webkit-font-smoothing: antialiased;
}

button {
    cursor: pointer;
}

`;
