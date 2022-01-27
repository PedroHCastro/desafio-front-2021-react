import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Neonderthaw&display=swap');
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
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
    
    font-family: "Neonderthaw"   
}

button {
    cursor: pointer;
}

`;
