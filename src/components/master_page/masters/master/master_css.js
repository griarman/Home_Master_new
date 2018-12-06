import styled from 'styled-components'

export const MasterTag = styled.div`
    // max-width: 1200px;
    min-width: 300px;
    width: 30%;
    margin: 15px ;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    min-height: 200px;
    // max-height: 400px;
    // background: url(master_background.png);
    // background-size: cover;
    // box-shadow: 0 0 5px 0 silver;
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
    // display:flex;
    // width: 700px;
    // flex-direction:column;
    // justify-content: space-around;
    text-align: center
`;
export const Info = styled.div`
    justify-content: space-between;
    flex-direction: row;
`;

export const Description = styled.div`
    // border:3px solid rgba(0,0,0,.7);
    // border-radius: 15px;
    // color:#fff;
    // font-size: 16px;
    // align-self:flex-end;
    // width:80%;
    // margin: 10px auto; 
    // line-height: 18px;
    // text-align: justify;
    // padding: 20px;
    // box-sizing:border-box;
    // background: linear-gradient(0deg,silver,grey);
    padding: 20px;
`;

export const Name = styled.h2``;
export const Personal = styled.div``;
export const Address = styled.div``;
export const Age = styled.div``;
export const Country = styled.div``;
export const Phone = styled.div``;
