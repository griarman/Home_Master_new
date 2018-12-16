import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const MasterTag = styled.div`
    min-width: 300px;
    width: 30%;
    margin: 0 15px 30px;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    min-height: 200px;
    background: rgba(250,250,250,.4);
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    
    :hover{
        box-shadow: 0 0 5px 0 silver;
        cursor: pointer
    }
`;

export const Image = styled.img`
    height: 100%;
    max-height:200px;
    border-radius: 50%
`;
export const PersonalData = styled.div`
    text-align: center
`;
export const Info = styled.div`
    justify-content: space-between;
    flex-direction: row;
`;

export const Description = styled.div`
    padding: 20px;
`;

export const Name = styled.h2` 
    color: #000;
    text-decoration: none;
`;
export const Personal = styled.div``;
export const Address = styled.div``;
export const Age = styled.div``;
export const Country = styled.div``;
export const Phone = styled.div``;
export const Url = styled(Link)`
    text-decoration: none;
    
    :hover{
        text-decoration: underline;
        text-decoration-color:black;
    }
    
`;
