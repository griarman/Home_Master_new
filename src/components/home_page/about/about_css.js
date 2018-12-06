import styled from 'styled-components'

export const Full = styled.div`
    background: url(../images/background-about.jpg) no-repeat center center fixed;
    background-size: cover;
    min-width: 600px;
    // height: 100vh;
    cursor: default;   
    text-align:center
`;

export const Div = styled.div`
    width: 50%;
    text-align: center;
    margin: 0 auto;
    color: rgb(80,140,117);
    font-size: 1.8em;
    padding: 60px 0;
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
    
    :active {
        opacity: .6;
    }
`;