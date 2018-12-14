import React,{ PureComponent } from 'react'
// import {Link} from 'react-router-dom'

import {
    ListElement,
    FullName,
    PersonalDetails,
    Description,
    Details,
    Age,
    Url
} from './masterList_css'

export default class MasterList extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            isOpen: this.props.defaultOpen
        }
    }
    render(){
        const { master,language } = this.props;
        return(
            <ListElement key={master.id}>
                <FullName onClick = {this.handleClick}>{master.master_name} {master.master_surname}</FullName>
                <PersonalDetails open = {this.state.isOpen} classList = {this.state.className}>
                    <Age>{language.age}:{+new Date().getFullYear() - +new Date(master.birth_date).getFullYear()}</Age>
                    <Details><Url to={`master#${master.id}`} >{language.details}</Url></Details>
                </PersonalDetails>
                <Description open = {this.state.isOpen}>{master.description}</Description>
            </ListElement>
        )
    }
    handleClick = (ev)=>{
        let el = ev.target;
        this.setState({
                isOpen: !this.state.isOpen
            },() => {
            this.props.myClick(this.state.isOpen,el);
        });
    }



    // }
}