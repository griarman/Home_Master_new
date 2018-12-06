import styled from 'styled-components'

export const CircleTag = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: calc(50% - 45px);
    right:0;
`;
export const CircleItem = styled.div`
    height: 20px !important;
    width: 20px;
    background: #C1BA87; 
    border-radius: 50%;
    margin: 5px 20px;
    
    :hover{
        cursor:pointer;
    }
`;