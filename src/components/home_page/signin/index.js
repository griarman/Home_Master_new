import React from 'react'

import {
    Full,
    Title,
    Greeting,
    EmptyDiv
} from './SignIn_css'
import Form from './form'

export default function SignIn(props) {
    document.title = props.home_page_data.title;
    const { home_page_data } = props;
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

