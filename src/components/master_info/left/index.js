import React from 'react';

import {
    Container
} from './left_css';

export default function Left (props) {
    const { master } = props;
    return (
        <Container>
            <div><img src={master.avatar_url} alt=""/></div>
        </Container>
    )
}
