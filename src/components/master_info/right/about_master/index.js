import React from 'react';

import {
    Container,
    Header,
    Row
} from './about_master_css'

export default function AboutMaster(props){
    const { contact, master_description_data, master, basic, date_of_birth, language} = props;
    const phone = master.phone.map(number => {
        number = parseInt(number.replace(/\D/g, '')).toString();
        return (number.length === 8) ? '+(374-' + number.replace(/(\d{2})(\d{2})(\d{2})(\d{2})/, '$1) $2-$3-$4') :
            '+(' + number.replace(/(\d{3})(\d{2})(\d{2})(\d{2})(\d{2})/,' $1-$2) $3-$4-$5');
    });
    return(
        <Container>
            <Header>{contact}</Header>
            <Row>
                <div>{master_description_data.phone}: </div>
                <div>{phone.join(' / ')} </div>
            </Row>
            <Row>
                <div>{master_description_data.email}: </div>
                <div> <a href={`mailto:${master.email}`}>{master.email}</a> </div>
            </Row>
            <Header>{basic}</Header>
            <Row>
                <div>{date_of_birth}: </div>
                <div>{master.birth_date.toLocaleString(language,{year: 'numeric', month: 'long', day: '2-digit'})} </div>
            </Row>
        </Container>
    )
}
