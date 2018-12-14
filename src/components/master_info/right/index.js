import React from 'react';

import {
    Container,
    NameTag,
} from './right_css';

export default function Right (props) {
    const { master } = props;
    return (
        <Container>
            <NameTag>{master.master_name} {master.master_surname}</NameTag>
        </Container>
    )
}
