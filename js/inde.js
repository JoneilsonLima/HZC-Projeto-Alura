let buttonMenu = document.querySelector('.cabecalho__menu'); 
let openMenu = document.querySelector('.menu-lateral'); 

function openMenuMobile() {
    openMenu.classList.toggle('menu-lateral--ativo')
}

buttonMenu.addEventListener('click', openMenuMobile);