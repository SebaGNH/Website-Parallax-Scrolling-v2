'use strict'

const stars = document.getElementById("stars");
const moon = document.getElementById("moon");
const mountains_behind = document.getElementById("mountains_behind");
const mountains_front = document.getElementById("mountains_front");

const btn_explore = document.getElementById("btn-explore");
const text = document.getElementById("text");
const sec = document.getElementById("sec");
const header = document.getElementById("header");



window.addEventListener("scroll", ()=>{
    let value_scroll = window.scrollY;
    console.log(value_scroll);
    //stars.style.left = value_scroll +"px"; //Movimiento estrellas
    stars.style.left = (value_scroll / 5) +"px";
    moon.style.top = value_scroll/1.5 +"px";
    mountains_behind.style.top = value_scroll * 0.2 +"px";
    mountains_front.style.top = value_scroll * -0.1 +"px";

    text.style.marginRight = value_scroll/2+"px" 
    text.style.marginTop = value_scroll /2 + "px" 
    btn_explore.style.marginTop = value_scroll /2 + "px" 

    header.style.top = value_scroll / 1.3  + "px";
});

