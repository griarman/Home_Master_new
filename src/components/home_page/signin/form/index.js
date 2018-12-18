import React from 'react'

import {
    FormTag,
    Input,
    Button,
    Error
} from './form_css'

export default function Form(props){

        const { language } = props;
        return(
            <FormTag id={'form'}>
                <Input type={'text'} placeholder={language.email} id={'login'}/>
                <Input type={'password'} placeholder={language.password} id={'password'}/>
                <Error id={'error_window'}>{language.sign_in_error}</Error>
                <Button onClick={handlerClick}>{language.sign_in}</Button>
            </FormTag>
        )
    }
function handlerClick () {
    let login = document.getElementById('login').innerText.trim();
    let password = document.getElementById('password').innerText;
    let error_window = document.getElementById('error_window');

    if(!login || !password){
        error_window.style.display = 'block';
    }
}

