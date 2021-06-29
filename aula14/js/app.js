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
 
 
 /*
 MENU ATIVO - INSERINDO A CLASS ACTIVE
 */
 
 let linkNavs = document.querySelectorAll(".link-nav");
 
 // console.log(linkNavs);
 
 linkNavs.forEach(function(valorCorrente, index, array){
 
     valorCorrente.addEventListener("click", function(){
         
         // linkNavs.forEach(function(elemento){
 
         //     elemento.classList.remove("active");
         // });
 
         // linkNavs.forEach((elemento)=>{
         //     elemento.classList.remove("active");
         // });
 
 
         // console.log(linkNavs.length);
 
         for(let i = 0; i < linkNavs.length; i++){
             array[i].classList.remove("active");
         }
 
         valorCorrente.classList.add("active");
     });
 });
 
 
 
 
 