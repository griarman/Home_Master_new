import React from 'react';

import { Container } from './right_css';
import PersonalDetails from './personalDetails'
import AboutMaster from './about_master'


export default function Right (props) {
    const { master,language } = props;
    const { master_page_data,master_description_data, rightLanguage} = language;
    let city = findCity(master.city,master_page_data);
    let thisLanguage = getLanguage(language.language, rightLanguage);
    let { contacts, message, report, timeLine, about, contact, basic, date_of_birth,date } = thisLanguage;

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
            <AboutMaster master={master}
                         master_page_data={master_page_data}
                         master_description_data={master_description_data}
                         contact={contact}
                         basic={basic}
                         date_of_birth={date_of_birth}
                         date ={date}
                         language={language.language}
            />
        </Container>
    );
}
function findCity(id,data){
    return data.cities_list.find(city=> city.id === id);
}
function getLanguage(language,arr){
    return arr.filter(el => el.language === language)[0];
}