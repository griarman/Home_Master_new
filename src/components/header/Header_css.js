import styled from 'styled-components'

export const HeaderTag = styled.header`
    width: calc(100% - 20px);
    display:flex;
    justify-content: space-between;
    flex-wrap: wrap;
    position : fixed;
    top: 0;
    z-index: 999999;
    padding: 10px;
    transition: .5s background linear;
`;
export const Div = styled.div`
    display:flex;
    align-items: center;
    a{
        color: #fff!important;
    }
`;
export const Select = styled.div``;
export const Search = styled.div`
    display:none;
    position: absolute;
    top: 60px;
    left: 40px;
    width: 300px;
    max-height: 200px;
    overflow:hidden;
    overflow-y:auto;
    border: 1px solid #ccc;
    box-sizing: border-box;
    background-color: rgba(0,0,0,.13);
   ::-webkit-scrollbar {
        width: 1em;
    }
    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    }
    ::-webkit-scrollbar-thumb {
        background-color: darkgrey;
        outline: 1px solid slategrey;
    }
`;
export const Button = styled.button`
    -webkit-box-shadow: 0 0 0 1px rgba(0,0,0,0.35);
    -moz-box-shadow: 0 0 0 1px rgba(0,0,0,0.35);
    box-shadow: 0 0 0 1px rgba(0,0,0,0.35);
    background-color: rgb(80, 140, 117) !important;
    border-radius: 2px !important;
    z-index: 100;
    color: white;
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
    outline: none;
    
    :active{
        opacity: .6;
    }
`;
export const Img = styled.img`
    width: 20px;
    height: 16px;
    margin: 0 5px;
    cursor: pointer;
`;
export const Inp = styled.div`
    z-index: 100;
    border-radius: 3px;
    border: 0;
    margin-left: 5px;
    position: relative;
`;
export const Input = styled.input`
    background-color: rgba(0,0,0,.13);
    padding-left: 3px;
    width: 300px;
    border-radius: 3px;
    outline:none;
    border: 0;
    height: 34px;
    font-size: 15px;
    text-align: center;
    color: #fff;
    text-decoration: none;
    
    ::placeholder{
        color:#fff;
    }
`;
export const Loop = styled.img``;


