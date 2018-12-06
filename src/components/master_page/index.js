import React, { Component } from 'react'
import Categories from './categories'
import Masters from './masters'

import { GlobalStyle, EmptyDiv, Container} from "./master_page_css";

export default class Master_page extends Component{
    constructor(props){
        super(props);
        this.state = {
            masters : this.props.masters
        }
    }
    componentWillMount(){
        document.title = this.props.language.masters_data.title;
    }
    componentDidUpdate(){
        document.title = this.props.language.masters_data.title;
    }
    render(){
        return(
            <div>
                <GlobalStyle/>
                <EmptyDiv/>
                <Container>
                    <Categories language={this.props.language} master={this.handlerClick}/>
                    <Masters masters={this.state.masters} language={this.props.language}/>
                </Container>
            </div>
        )
    }
    handlerClick = (id) => {
        if(id !== 0){
            let filterMaster = this.props.masters.filter((master)=>{
                return master.master_professions_id.includes(id);
            });
            this.setState({masters:filterMaster});
        }else{
            this.setState({masters:this.props.masters});
        }
    }
}
