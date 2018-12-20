import React, { Component } from 'react';
import Left from './left';
import Right from './right';
import leftLanguage from './leftLanguage';
import rightLanguage from './rightLanguage'


import {
    GlobalStyle,
    EmptyDiv,
    Container
} from './master_info_css'

export default class Master_info extends Component{
    componentWillMount(){
        document.title = this.props.language.master_page_data.title;
    }
    componentDidUpdate(){
        document.title = this.props.language.master_page_data.title;
    }
    render(){
        const { location, language } = this.props;
        let master = this.findMaster(location.hash.slice(1));
        return(
            <div>
                <GlobalStyle/>
                <EmptyDiv/>
                <Container>
                    <Left master={ master } language={{...language,leftLanguage}}/>
                    <Right master={ master } language={{...language,rightLanguage}}/>
                </Container>
                {/*{master}*/}
                {/*<div><img src={master.avatar_url} alt=""/></div>*/}
                {/*<div>{master.master_name}</div>*/}
                {/*<div>{master.master_surname}</div>*/}
                {/*/!*<div>{master.birth_date}</div>*!/*/}
                {/*<div>{master.city}</div>*/}
                {/*<div>{master.email}</div>*/}
                {/*<div>{master.phone[0]}</div>*/}
                {/*<div></div>*/}
                {/*avatar_url: "images/master_photo_template.gif"
                birth_date: Tue May 24 1988 05:00:00 GMT+0500 (Armenia Summer Time)
                city: 0
                description: "I am the best master ever"
                email: "karen1962@gmail.com"
                id: "0"
                master_name: "Karen"
                master_professions_id: (5) [1, 2, 4, 6, 7]
                master_surname: "Shahinyan"
                notifications: []
                phone: ["055-62-88-81"]
                public: true
                tags: (5) ["ator", "divan", "kahuyq", "mebel", "xol"]*/
                }

            </div>
        )
    }
    findMaster = (id) => {
        return this.props.masters.find(master => master.id == id) || this.props.masters[0];
    }
}