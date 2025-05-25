const btnOpenMenu = document.querySelector('#menu_open');
const menu = document.querySelector('.menu');
const btnCloseMenu = document.querySelector('#menu_close');

function openMenu(){
    menu.style.display = 'flex';
}
btnOpenMenu.addEventListener('click', openMenu);

function closeMenu(){
    menu.style.display ='none';
}
btnCloseMenu.addEventListener('click', closeMenu);