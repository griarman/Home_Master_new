import React, { Component } from 'react'

import {
    SignUpTag,
    RegistrationWindow,
    Title,
    Input,
    EmptyDiv,
    Button,
    Error
} from './SignUp_css'

export default class SignUp extends Component{
    render(){
        const { language } = this.props;
        return(
           <SignUpTag className = 'full'>
               <EmptyDiv/>
               <RegistrationWindow>
                   <Title>{language.sign_up_text}</Title>
                   <Input placeholder={language.email} id='mailS'/>
                   <Input type='password' placeholder={language.password} id='passS'/>
                   <Input type='password' placeholder={language.confirm_password} id='rePassS'/>
                   <Error id={'error_signup'}>{language.sign_in_error}</Error>
                   <Button  onClick={this.handleClick} >{language.sign_up}</Button>

               </RegistrationWindow>

           </SignUpTag>
        )
    }
    handleClick = ()=>{
        const { language } = this.props;
        let mail = document.querySelector('#mailS').value.trim();
        let password = document.querySelector('#passS').value.trim();
        let rePassword = document.querySelector('#rePassS').value.trim();
        let output = document.querySelector('#error_signup');
        let error;
        switch (true){
            case !mail.match(/^\w[\w\.\-]{4,30}@[a-z]{3,10}\.[a-z]{2,5}$/): error = language.email_invalid; break;
            case !password.match(/\w{8,}/): error = language.password_invalid; break;
            case !(rePassword === password): error = language.password_dont_match;
        }
        if(error){
            output.innerText = error;
            output.style.display = 'block'
        }else{
            output.style.display='none'
        }
    }
}