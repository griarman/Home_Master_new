import React, { PureComponent } from 'react'
import { CategoryTag, Name, Img } from './category_css'

export default class Category extends PureComponent{

    render(){
        const { category } = this.props;
        return(
            <CategoryTag id={category.id}>
                <Img src={category.icon_url}/>
                <Name>{category.name.toUpperCase()}</Name>
            </CategoryTag>
        )
    }
}
