//select dom items
const menuBtn=document.querySelector(".menu-btn");
const menu=document.querySelector(".menu");
const menuBranding=document.querySelector(".menu-branding");
const menuNav=document.querySelector(".menu-nav");
const navItems=document.querySelectorAll(".nav-items");

//Set initial state of menu

let showMenu=false;
 menuBtn.addEventListener('click',toggleMenu);

 function toggleMenu(){
     if(!showMenu){
         menuBtn.classList.add('close');
         menu.classList.add('show');
         menuNav.classList.add('show');
         menuBranding.classList.add('show');
         navItems.forEach(itme => itme.classList.add('show'));

         //set menu state
         showMenu=true;

     }else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(itme => itme.classList.remove('show'));

 //set menu state
 showMenu=false;

     }
 }