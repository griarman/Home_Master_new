import styled,{createGlobalStyle} from 'styled-components'
// import createGlobalStyle from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{ 
        margin:0; 
    }
    body{
        background: url('images/morocco.png');
    }
`;

export const EmptyDiv = styled.div` height:60px;`;
export const Container= styled.div`
    display:flex;
    width:100%;
    max-width: 1200px;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 0 auto;
    border-radius: 5px;
    background: #fff;
    
`;
