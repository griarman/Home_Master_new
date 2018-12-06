import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import {
    Full,
    Div,
    Button
} from './about_css'

export default class About extends Component{
    componentWillMount(){
        document.addEventListener('wheel',this.scroll,{ once:true });
    }
    componentWillUnmount(){
        document.removeEventListener('wheel',this.scroll);
    }
    scroll = (ev) => {
        setTimeout(() => {document.addEventListener('wheel',this.scroll,{once:true});},800);
        if(ev.target.closest('#search')) return;
        let elem = document.getElementsByClassName('active')[0];
        let disc = document.getElementsByClassName('disc')[0];
        let other = (ev.deltaY < 0) ? elem.previousElementSibling : elem.nextElementSibling;
        let otherDisc = (ev.deltaY < 0) ? disc.previousElementSibling : disc.nextElementSibling;
        if(other && other.classList.contains('full')){
            elem.classList.remove('active');
            other.classList.add('active');
            disc.classList.toggle('disc');
            otherDisc.classList.toggle('disc');
        }
    };
    render(){
        const { language } = this.props;
        return(
            <Full className="full">
                <Div>{language.about}</Div>
                <Link to={'/master_page'} ><Button>{language.go_to_masters}</Button></Link>
            </Full>
        )
    }
}
