import styled from 'styled-components'

export const SignUpTag = styled.div`
    background: url(../images/background-signup.jpg) no-repeat center center fixed;
    background-size: cover;
    min-width: 600px;
    cursor: default;
    text-align:center;
    font-size: 3em;
`;

export const EmptyDiv = styled.div`
    height: 60px;
`;

export const RegistrationWindow = styled.div`
    margin: 0 auto;
    width: 50%;
    text-align: center;
    color: rgb(80,140,117);
    display:flex;
    flex-direction: column;
    align-items:center;
`;
export const Title = styled.h1`
    font-size: 1em;
    min-height: 180px;
    color: rgb(80,140,117);
    text-align: center;
    line-height:1.2;
`;
export const Input = styled.input`
    width: 60%;
    height: 50px;
    margin: 10px 0;
    padding-left: 5px;
    border-radius: 3px;
    border: 1px solid #bbbbbb;
    font-size: 25px;
    
    ::placeholder{
        color: silver;
    }
`;
export const Button = styled.button`
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
    -webkit-box-shadow: 0 0 0 1px rgba(0,0,0,0.35);
    -moz-box-shadow: 0 0 0 1px rgba(0,0,0,0.35);
    box-shadow: 0 0 0 1px rgba(0,0,0,0.35);
    background-color: rgb(80, 140, 117) !important;
    border-radius: 2px !important;
    z-index: 100;
    color: white;
    outline: none;
    
    :hover{
        opacity: .8;
    }
    
    :active {
        opacity: .6;
    }
`;
export const Error = styled.div`
    width: 60%;
    padding: 10px;
    background-color: rgba(0,0,0,.13);
    color: white;
    margin: 0 auto;
    font-size: 15px;
    text-align: center;
    display:none;
    margin: 5px 0;
`;