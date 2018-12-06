import React,{ Component } from 'react'

import {
    ListElement,
    FullName,
    PersonalDetails,
    Description,
    Details,
    Age
} from './masterList_css'

export default class MasterList extends Component{
    render(){
        const { master,language } = this.props;
        console.log(language);
        return(
            <ListElement key={master.id}>
                <FullName>{master.master_name} {master.master_surname}</FullName>
                <PersonalDetails>
                    <Age>{language.age}:{+new Date().getFullYear() - +new Date(master.birth_date).getFullYear()}</Age>
                    <Details>{language.details}</Details>
                </PersonalDetails>
                <Description>{master.description}</Description>
            </ListElement>
        )
    }
}