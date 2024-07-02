
document.addEventListener('DOMContentLoaded', function () {
    

    
    const menuOpenIcon = document.querySelector('.menu-open');
    const menuCloseIcon = document.querySelector('.menu-close');
    const navMenu = document.querySelector('.nav-list');

    function toggleMenu() {
        menuOpenIcon.classList.toggle('visible');
        menuCloseIcon.classList.toggle('visible');
    }
    
    menuOpenIcon.addEventListener('click', function () {
        toggleMenu();
        navMenu.classList.add('active');
    });
    
    menuCloseIcon.addEventListener('click', function () {
        toggleMenu();
        navMenu.classList.remove('active');
    });








});
