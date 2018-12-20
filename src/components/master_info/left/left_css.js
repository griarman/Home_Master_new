import styled from 'styled-components';

export const Container = styled.div`
    width: 30%;
    font-family: Arial;
    min-width: 200px;
    max-width: 500px;
    img{
        min-width: 50px;
        max-width: 250px;
        width: 250px;
        height: auto;
    }
`;
export const Img = styled.div`
    text-align: center;
    min-height: 255px;
    max-height: 320px;
`;
export const Header = styled.h3`
    color: silver;
    margin: 15px 0 25px;
    font-style:italic;
    padding-left: 20px;
`;
export const ServiceBlock = styled.ul`
    // background: #3399ff;
    list-style:none;
    &>li:nth-of-type(n) { border-left: 5px solid #F5876E; }
    &>li:nth-of-type(2n){ border-left: 5px solid #61A8DC; }
    &>li:nth-of-type(3n){ border-left: 5px solid #8EBD40; }
    &>li:nth-of-type(4n){ border-left: 5px solid #988CC3; }
    &>li:nth-of-type(5n){ border-left: 5px solid #D8C86E; }
`;
export const Service = styled.li`
    margin: 5px 0;
    padding-left: 10px;
    background: #F7F5F2;
    :hover { background-color: #EFEFEF; }
    max-width: 210px;
    cursor: pointer;
    padding: 5px;
`;
export const Description = styled.div`
    padding-left: 40px;
`;