import React,{ PureComponent} from 'react'

import {
    Full,
    Title,
    Greeting,
    EmptyDiv
} from './SignIn_css'
import Form from './form'

export default class SignIn extends PureComponent{
    componentWillMount(){
        document.title = this.props.home_page_data.title;
    }
    componentDidUpdate(){
        document.title = this.props.home_page_data.title;
    }
    render(){
        const { home_page_data } = this.props;
        return(
            <Full className = 'active full'>
                <EmptyDiv/>
                <Greeting>
                    <Title>{home_page_data.greeting}</Title>
                    <Form language={home_page_data} />
                </Greeting>
            </Full>
        )
    }
}
