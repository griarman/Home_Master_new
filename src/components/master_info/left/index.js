import React from 'react';

import {
    Container,
    Header,
    ServiceBlock,
    Service,
    Description,
    Img
} from './left_css';

export default function Left (props) {
    const { master,language } = props;
    const { masters_data,leftLanguage } = language;
    const { categories } = masters_data;
    const myLanguage = getLanguage(language.language,leftLanguage);
    const services = getProfessions(master.master_professions_id, categories);

    return (
        <Container>
            <Img><img src={master.avatar_url} alt=""/></Img>
            <Header>{myLanguage.services}</Header>
            <ServiceBlock>
                {services.map(service=> {
                    return <Service key={service.id}> {service.name} </Service>
                })}
            </ServiceBlock>
            <Header>{myLanguage.description}</Header>
            <Description>{master.description}</Description>
        </Container>
    )
}
function getProfessions(prof_ids, categories) {
    return categories.filter(el => prof_ids.includes(el.id));
}
function getLanguage(language,arr){
    return arr.filter(el => el.language === language)[0];
}