import styled from 'styled-components'


export const CategoryTag = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:center;
    overflow: hidden;
    background: #fff; 
    height: 50px;
    line-height: 50px;
    margin: 1px 0;
    cursor:pointer;
    :hover{
        border-left: 3px solid #3198DA;
        border-right:3px solid #3198DA;
    }
    :checked{
        background: #f3f3f3;
    }
`;
export const Name = styled.div`
    width:250px;
    line-height: 50px;
    color: #555;
    text-align:center;
    font-family: 'Merriweather', serif;
    :hover{
        color:#3198DA!important;
    }
`;
export const Img = styled.img`
    height:90px;
    margin-top: 10px;
`;