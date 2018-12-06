import styled,{ createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{ margin:0; }
    body{ 
        background: url(images/dust_scratches.png);
        
        ::-webkit-scrollbar {
            width: 1em;
        }
        ::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        }
        ::-webkit-scrollbar-thumb {
            background-color: darkgrey;
            outline: 1px solid slategrey;
        }
    }
    
`;
export const Container = styled.div` 
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    
`;
export const EmptyDiv = styled.div` height:60px;`;
