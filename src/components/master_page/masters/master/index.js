import React,{ PureComponent } from 'react'
// import {Link} from 'react-router-dom'

import {
    MasterTag,
    Image,
    PersonalData,
    Info,
    Description,
    Personal,
    Address,
    Name,
    Age,
    Country,
    Phone,
    Url
} from './master_css'

export default class Master extends PureComponent{
    render(){
        const { master,language } = this.props;
        let description = master.description || "Description part is empty";
        return(
            <MasterTag id={master.id}>
                <div> <Image src={master.avatar_url}/></div>
                <PersonalData>
                    <Info>
                        <Personal>
                            <Url to={`master#${master.id}` }><Name>{master.master_name} {master.master_surname}</Name></Url>
                            <Age>{language.age}: {+new Date().getFullYear() - +new Date(master.birth_date).getFullYear()}</Age>
                        </Personal>
                        <Address>
                            <Country>{master.country}</Country>
                            <Phone>{language.phone}: {master.phone.join(' / ')}</Phone>
                        </Address>
                    </Info>
                    <Description>{ description }</Description>
                </PersonalData>
            </MasterTag>
        )
    }
}