import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components'
import { Switch,  Route } from 'react-router-dom'

import Home_page from './components/home_page'
import Master_page from './components/master_page'
import Master_info from './components/master_info'
import Header from './components/header/'
import masters from "./masters_data";
import languages from "./languages";

class App extends Component {
    componentWillMount(){
        if(!this.state){
            const firstLanguage = languages.filter((el) => {
                return el['language'] === 'en';
            });
            this.setState({
                language: firstLanguage
            });
        }
    }
    render() {
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
          .vsb{
          height: 1000px
        `;
        return (
            <div>
                <Header languages={this.handleClick} language={this.state.language[0].header_data} masters={masters}/>
                <Switch>
                    <Route exact path={'/'} render={(props) => <Home_page {...props} language={this.state.language[0]}/>}/>
                    <Route exact path={'/master_page'} render={(props) => <Master_page {...props} language={this.state.language[0]} masters={masters} />} />
                    <Route  path={'/master'} render={(props) => <Master_info {...props} language={ this.state.language[0] } masters={masters}/>}/>
                    <GlobalStyle/>
                </Switch>
            </div>

        )
    }
    handleClick = (newLanguage) => {
        this.setState({
            language: newLanguage
        })
    }
}

export default App;
