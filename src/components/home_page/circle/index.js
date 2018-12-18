import React, { Component } from 'react'

import {
   CircleTag,
   CircleItem
} from './circle_css'

export default function Circle(props) {

    // console.log(this);
    return (
        <CircleTag>
            <CircleItem className='disc circle' onClick={handleClick}/>
            <CircleItem className='circle' onClick={handleClick}/>
            <CircleItem className='circle' onClick={handleClick}/>
        </CircleTag>
    )
}
function handleClick (ev) {
    let el = ev.target;
    if(el.classList.contains('disc')) return;
    let discs = document.querySelectorAll('.circle');
    let parents = document.querySelectorAll('.full');
    discs.forEach((v,i)=>{
        if(v.classList.contains('disc')){
            v.classList.remove('disc');
            parents[i].classList.remove('active');
        }else if(v === el){
            v.classList.add('disc');
            parents[i].classList.add('active');
        }
    })
}