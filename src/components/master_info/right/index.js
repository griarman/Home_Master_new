import React from 'react';

import {
    Container,
} from './right_css';
import PersonalDetails from'./personalDetails'

export default function Right (props) {
    const { master,language } = props;
    const { master_page_data,master_description_data } = language;
    let city = findCity(master.city,master_page_data);
    let contacts = (language.language === 'en')? 'Contacts' : (language.language === 'ru')? 'Контакты' : 'Կոնտակտներ';
    let message = (language.language === 'en')? 'Send Message' : (language.language === 'ru')? 'Отправить сообщение' : 'ՈՒղղարկել նամակ';
    let report = (language.language === 'en')? 'Report user' : (language.language === 'ru')? 'Пожаловаться на пользователя' : 'Բողոքարկել';
    let timeLine  = (language.language === 'en')? 'Timeline' : (language.language === 'ru')? 'График' : 'Ժամանակացույցը';
    let about = (language.language === 'en')? 'About' : (language.language === 'ru')? 'Информация' : 'Տեղեկատվություն';
    return (
        <Container>
            <PersonalDetails master={master}
                             city={city}
                             contacts={contacts}
                             message={message}
                             report={report}
                             timeLine={timeLine}
                             about={about}
                             master_description_data={master_description_data}


            />
        </Container>
    );
}
function findCity(id,data){
    return data.cities_list.find(city=> city.id === id);
}
