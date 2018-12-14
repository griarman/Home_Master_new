import React,{ PureComponent } from 'react'


import Master from './master'
import {
    Container
} from './master_css'

export default class Masters extends PureComponent{
    render(){
        let { masters, language } = this.props;
        masters = masters.map((master)=> <Master key={master.id} master={ master } language={language.master_description_data}/>);
        return(
            <Container>{masters}</Container>
        )
    }
}