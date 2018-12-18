import styled from 'styled-components'

export const Container = styled.div`
`;
export const Header = styled.h3`
    color: silver;
    margin: 15px 0 25px;
    font-style:italic;
    padding-left: 20px;
`;
export const Row = styled.section`
    display: flex;
    flex-direction: row;
    margin: 15px 0;
    div:first-of-type{
        font-weight: bold;
            max-width: 120px;
            min-width: 150px;
    }
    div:last-of-type{
        color:#2196F3; 
    }
`;