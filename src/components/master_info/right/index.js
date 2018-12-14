import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import {
    Container,
    NameTag,
    FirstLine,
    Country,
    City,
    GPS
} from './right_css';

library.add(faMapMarkerAlt);

export default function Right (props) {
    const { master,language } = props;
    const { master_page_data,master_description_data } = language;
    let city = findCity(master.city,master_page_data);
    // console.log(language);
    return (
        <Container>
            <FirstLine>
                <NameTag>{master.master_name} {master.master_surname}</NameTag>
                <GPS>
                    <FontAwesomeIcon icon="map-marker-alt" />
                    <Country>{master_description_data.armenia},</Country>
                    <City id={city.id}>{city.name}</City>
                </GPS>

            </FirstLine>
        </Container>
    );
}
function findCity(id,data){
    return data.cities_list.find(city=> city.id === id);
}
