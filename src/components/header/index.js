import React,{ PureComponent } from 'react'
import languages from '../../languages'
import { Link } from 'react-router-dom'

import {
    HeaderTag,
    Search,
    Select,
    Button,
    Div,
    Img,
    Inp,
    Input,
    Loop
} from './Header_css'
import MasterList from './masterList'

export default class Header extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            language : 'en',
            allowedLanguages : ['en','ru','arm'],
            search: []
        };
    }
    myClick = (isOpen,el)=>{

        const next = el.nextElementSibling;
        if(isOpen){
            next.style.display = 'flex';
            next.nextElementSibling.style.display = 'block';
        }else {
            next.style.display = 'none';
            next.nextElementSibling.style.display = 'none';
        }
    };
    render(){
        const { language } = this.props;
        document.addEventListener('scroll', function f(ev){
            let headerTag = document.querySelector('#headerTag');
            if(window.pageYOffset > 50) {
                if(f.bg) return;
                headerTag.style.background = '#ccc';
                f.bg ='c';
                headerTag.classList.add('vsb');
            }else{
                headerTag.style.background = '';
                f.bg = null
            }
        });
        return(
                <HeaderTag id = 'headerTag'>
                    <Div>
                        <Link to={'/'} >HM</Link>
                        <Inp>
                            <Loop></Loop>
                            <Input type="text" placeholder={language.search} onInput={this.handleChange}/>
                        </Inp>
                    </Div>
                    <Search id={'search'} >
                        {this.state.search.length > 0 &&
                        this.state.search.map((element) => <MasterList
                                                                        defaultOpen={false}
                                                                        myClick = {this.myClick}
                                                                        key={element.id}
                                                                        master={element}
                                                                        language={language}
                                                            />
                        )}
                    </Search>
                    <Div>
                        <Select>
                            <Img src="images/flags/United-Kingdom-flag-icon.png" alt="en" id={'en'} onClick={ this.handleClick }/>
                            <Img src="images/flags/Flag-Russia.ico" alt="ru" id={'ru'} onClick={ this.handleClick }/>
                            <Img src="images/flags/armenia_flag.png" alt="arm" id={'arm'} onClick={ this.handleClick }/>
                        </Select>
                        <Link to={'/'}><Button>{language.sign_in}</Button></Link>
                    </Div>
                </HeaderTag>
        )
    }


    handleChange = (el) => {
        let searchTag = document.getElementById('search');
        let search = el.target.value.trim().toLowerCase();

        let newList = this.props.masters.filter((master)=>{
            let name,surname;
            [name,surname] = [master.master_name,master.master_surname];
            let arr = master.tags.slice();
            arr.push(name,surname);
            arr = arr.filter((arr)=>{
                return arr.toLowerCase().indexOf(search) !== -1;
            });
            return arr.length > 0;
        });
        searchTag.style.display = (!newList.length || !search)? 'none' : 'block';
        this.setState({
            search: newList
        })
    };
    handleClick = (el) => {
        let newLanguage = el.target.getAttribute('id').trim();
        if(!this.state.allowedLanguages.includes(newLanguage)) return;
        this.setState({
            language: newLanguage
        },() => {
            let selectedLanguage = languages.filter((el) => {
                return el['language'] === this.state.language;
            });
            this.props.languages(selectedLanguage)
        })
    }
}
