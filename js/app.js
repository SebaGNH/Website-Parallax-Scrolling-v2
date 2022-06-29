'use strict'

const stars = document.getElementById("stars");
const moon = document.getElementById("moon");
const mountains_behind = document.getElementById("mountains_behind");
const mountains_front = document.getElementById("mountains_front");
const btn_explore = document.getElementById("btn-explore");
const text = document.getElementById("text");
const sec = document.getElementById("sec");

window.addEventListener("scroll", ()=>{
    let value_scroll = window.scrollY;
    console.log(value_scroll);
    //stars.style.left = value_scroll +"px"; //Movimiento estrellas
    stars.style.left = (value_scroll / 5) +"px";
});

