import React from 'react';

import {
    Container,
    Img
} from './left_css';

export default function Left (props) {
    const { master,language } = props;
    const { masters_data } = language;
    const { categories } = masters_data;

    console.log(props);
    getProfessions(categories);
    return (
        <Container>
            <Img><img src={master.avatar_url} alt=""/></Img>
        </Container>
    )
}
function getProfessions() {

}