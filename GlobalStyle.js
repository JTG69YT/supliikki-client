import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1366px;
        --white: #fff;
        --red: #eb0000;
        --lightGrey: #eee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
        --black: #000;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        background: var(---white);
    }
    body {
        h1 {
            font-size: 1.2rem;
            font-weight: 600;
        }
        h3 {
            font-size: 1.1rem;
            font-weight: 600;
        }
        p {
            font-size: 1rem;
        }
    }
`;