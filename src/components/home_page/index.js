import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components'


import Circle from './circle/'
import SignIn from './signin/'
import SignUp from './signup/'
import About from './about'


class Header_page extends Component {
    render() {
        const { language } = this.props;
        const GlobalStyle = createGlobalStyle`
          * {
            margin:0; 
            padding:0;
            text-decoration: none;
            font-family: 'Roboto', sans-serif;
            transition: .8s height linear;
          }
          body,.active{
            height: 100vh !important;
            overflow:hidden;
          }
          .full{
            height:0;
            overflow: hidden
          }
          .disc{
            background: #fff;
          }
        `;
        return (
            <div>
                <Circle />
                <SignIn home_page_data={language.home_page_data}> </SignIn>
                <About language={language.home_page_data}> </About>
                <SignUp language={language.home_page_data}> </SignUp>
                <GlobalStyle/>
            </div>
        );
    }
}

export default Header_page;
