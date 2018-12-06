import React, { Component } from 'react'

import {
    FormTag,
    Input,
    Button,
    Error
} from './form_css'

export default class Form extends Component{
    render(){
        const { language } = this.props;
        return(
            <FormTag id={'form'}>
                <Input type={'text'} placeholder={language.email} id={'login'}/>
                <Input type={'password'} placeholder={language.password} id={'password'}/>
                <Error id={'error_window'}>{language.sign_in_error}</Error>
                <Button onClick={this.handlerClick}>{language.sign_in}</Button>
            </FormTag>
        )
    }
    handlerClick = ()=> {
        let login = document.getElementById('login').innerText.trim();
        let password = document.getElementById('password').innerText;
        let error_window = document.getElementById('error_window');

        if(!login || !password){
            error_window.style.display = 'block';
        }
    }
}
