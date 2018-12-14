import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListElement = styled.div`
    background: background: rgba(80,140,117,.5);
    margin-bottom: 1px;
    transition: all .4s linear;
`;
export const FullName = styled.div`
    background: #fff;
    line-height: 40px;
    color: #508C75;
    cursor: pointer;
    :hover{
        background: #508C75;
        color: #fff;
    }
    padding: 0 20px;
`;
export const PersonalDetails = styled.div`
    display: ${props => props.open ? 'flex' : 'none'};
    margin: 5px 0;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 20px;
`;
export const Age = styled.div`
    color:#fff;
`;
export const Details = styled.div`
    padding: 5px 10px;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 10px;
    cursor:pointer;
    
    :hover{
        opacity: .7;
    }
    :active{
        opacity: .4;
    }
`;
export const Url = styled(Link)`
    color: #000;
`;

export const Description = styled(Age)`
    padding: 0 20px;
    display: ${props => props.open ? 'block' : 'none'};
    min-height: 20px;
`;