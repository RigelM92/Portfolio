import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --color-primary: #623CEA;
        --color-primary-50: #9AA6E2;
        --color-secondary: #50CF9A;
        --color-secondary-50: #E5F8F0;
        --color-tertiary: #FF2253;
        --color-tertiary-50: #FFE9EE;
        --color-quarternary: #4ACA94;
        --color-quarternary-50: #E4F7EF;
        --grey-scale-1: #F8F9FA;
        --grey-scale-2: #E9ECEF;
        --grey-scale-3: #868E96;
        --grey-scale-4: #212529;
    }

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html, body {
        display: flex;
        flex-direction: column;
        min-width: 100%;
        min-height: 100vh;
    }


`