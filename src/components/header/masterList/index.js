import React,{ PureComponent } from 'react'

import {
    ListElement,
    FullName,
    PersonalDetails,
    Description,
    Details,
    Age
} from './masterList_css'

export default class MasterList extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            isOpen: this.props.defaultOpen
        }
    }
    render(){
        // document.addEventListener('click', ()=>{(this.state.isOpen) && this.setState({isOpen: false})},true);

        const { master,language } = this.props;
        return(
            <ListElement key={master.id}>
                <FullName onClick = {this.handleClick}>{master.master_name} {master.master_surname}</FullName>
                <PersonalDetails open = {this.state.isOpen} classList = {this.state.className}>
                    <Age>{language.age}:{+new Date().getFullYear() - +new Date(master.birth_date).getFullYear()}</Age>
                    <Details>{language.details}</Details>
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
    // handleClick = (ev)=>{
    //    let {isOpen} = this.state;
    //    const el = ev.target;
    //    const next = el.nextElementSibling;
    //     if(!isOpen){
    //         // el.style.background = 'rgba(80,140,117,.5)';
    //         next.style.display = 'flex';
    //         next.nextElementSibling.style.display = 'block';
    //     }else{
    //         // el.style.background = '';
    //         next.style.display = 'none';
    //         next.nextElementSibling.style.display = 'none';
    //     }
        // this.setState({
        //     isOpen: !this.state.isOpen
        // });


    // }
}