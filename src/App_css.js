import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin:0; 
        padding:0;
        text-decoration: none;
        font-family: 'Roboto', sans-serif;
        transition: .8s height linear;
    }
    body,.active{
        height: 100vh !important;
        overflow:hidden;
    }
    .full{
        height:0;
        overflow: hidden
    }
    .disc{
        background: #fff;
    }
    .vsb{
        height: 1000px
    }
`;