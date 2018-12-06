import React, { Component } from 'react'

import { Li, Ul } from './categories_css'
import Category from './category'

export default class Categories extends Component{
    render(){
        const { language } = this.props;
        let { categories } = language.masters_data;
        categories = categories.map((category)=>
            <Li key = {category.id} onClick={this.handleClick} >
                <Category category = {category} />
            </Li>
        );
        return(
            <Ul>{categories}</Ul>
        )
    }
    handleClick = (el) => {
        this.props.master(+el.target.parentNode.getAttribute('id'));
    }

}