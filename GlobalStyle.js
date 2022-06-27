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
`;