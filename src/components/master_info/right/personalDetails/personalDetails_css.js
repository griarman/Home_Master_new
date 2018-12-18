import styled from 'styled-components';

export const Container = styled.div`
    font-family: Arial;
    max-height: 320px;
    width: 60%;
`;
export const NameTag = styled.h1`
    color: #555;
    @media(max-width: 600px){
        font-size: 1.2em;
    }
`;

export const FirstLine = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    align-items: center;
    margin: 10px 0;
    flex-wrap: wrap;
`;
export const SecondLine = styled.div`
    margin-top: 50px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
`;
export const GPS = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    color: #9B9B9B;
`;
export const Country = styled.div`margin: 0 5px`;
export const City = styled.div`margin: 0 5px`;
const Template = styled.div` 
    padding: 10px 5px;
    border-radius: 5px;
    cursor: pointer;
    margin: 0 5px;
`;
export const Message = styled(Template)`
    display:flex;
    flex-direction: row;
    color: #3C4F5E;
    
    :hover{
        background: silver;
    }
`;
export const Contacts = styled(Template)`
    color: #2F9CF4;
    background: #E3F2FD;
    
`;
export const Report = styled(Template)` 
    :hover{
        text-decoration: underline;
    }
`;
export const Text = styled.span` margin: 0 5px;`;
export const SendMessage = styled.div` margin-left: 10px; `;

export const ThirdLine = styled(SecondLine)`
    width: 100%;    
    border-bottom: 1px solid #555;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    
    div{
        padding: 20px 0;  
        cursor: pointer; 
        position: relative; 
        box-sizing: border-box;
        :hover{
            :after{
                content: '';
                position: absolute;
                border-bottom: 2px solid #2196F3;
                top: 58px;
                left: 0;
                width: 100%;
            }
        }
    }
    
    div:first-of-type{
        color: #888;
        margin-right:10px;    
    }
    
    div:last-of-type{
        color: #111;
        margin-left: 25px;
    }
`;

