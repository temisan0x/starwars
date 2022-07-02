import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family:'Poppins, sans-serif';
    }

    @media (max-width:1080px){
        html {
            font-size: 93.75%;
        }
    }

    @media(max-width: 720px) {
        html {
            font-size: 87%;
            }
    }

    body {
        font-size: 16px;
        color: #F2F5F5;
        background: #1B1A17;
        -webkit-font-smoothing: antialiased !important;
    }

    body, input, select, textarea {
        font: 400 1rem "Poppins", sans-serif;
    }

    button{
        cursor: pointer;
    }

    ::-webkit-scrollbar {
    width: .5rem;
    }
    ::-webkit-scrollbar-track {
    background: #7D7D7D;
    border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb {
    background: #F0A500;
    border-radius: 4px;
    }
`;
