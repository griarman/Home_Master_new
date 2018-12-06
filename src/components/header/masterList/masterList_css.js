import styled from 'styled-components'


export const ListElement = styled.div`
    background: rgba(20,20,20,.4);
    margin-bottom: 1px;
    // width: 250px;
    // margin: 0 auto;
    transition: all .4s linear;
`;
export const FullName = styled.div`
    background: silver;
    line-height: 40px;
    color: #000;
    cursor: pointer;
    :hover{
        color: #888;
    }
    padding: 0 20px;
`;
export const PersonalDetails = styled.div`
    display: flex;
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
export const Description = styled(Age)`
    padding: 0 20px;
`;