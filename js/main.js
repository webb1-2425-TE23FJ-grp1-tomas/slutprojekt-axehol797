const btnOpenMenu = document.querySelector('#menu_open');
const menu = document.querySelector('.menu');
const btnCloseMenu = document.querySelector('#menu_close');

function openMenu(){
    menu.style.display = 'flex';
    btnOpenMenu.style.display = 'none';
}
btnOpenMenu.addEventListener('click', openMenu)

function closeMenu(){
    menu.style.display ='none';
    btnOpenMenu.style.display = 'block';
}
btnCloseMenu.addEventListener('click', closeMenu)