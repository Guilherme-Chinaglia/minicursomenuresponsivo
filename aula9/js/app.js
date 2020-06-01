/**
 * MENU SECUNDÁRIO
 */
var menuDoc = document.getElementsByClassName('link-nav-arrow')[0];
var listSecond = document.querySelector('.list-nav-second');

var teste = listSecond.classList;

// console.log(teste);

menuDoc.addEventListener('click', function(){

    listSecond.classList.toggle('hide');
    menuDoc.classList.toggle('arrow');
    
});

/**
 * MENU HAMBURGUER
 * ACIONAMENTO DO MENU
 */

 var iconMenu = document.querySelector(".icon-menu");
//  var menu = document.querySelector(".menu");
 var content = document.querySelector(".content");
 
 let body = document.querySelector("body");

 iconMenu.addEventListener("click", function(){

    body.classList.toggle("__move");
    // menu.classList.toggle('menu__move');
    // content.classList.toggle('content__move');
    
 });


/*
 RECOLHIMENTO DO MENU
 CLICANDO NO CONTENT
*/

content.addEventListener("click",function(){
    body.classList.remove("__move");
})


