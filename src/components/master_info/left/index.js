import React from 'react';

import {
    Container,
    Img
} from './left_css';

export default function Left (props) {
    const { master,language } = props;
    return (
        <Container>
            <Img><img src={master.avatar_url} alt=""/></Img>
        </Container>
    )
}
