document.addEventListener('DOMContentLoaded', () => {
  let burger = document.querySelector('.header__topline-burger');
  let burgerMenu = document.querySelector('.header__burger-menu');
  burger.addEventListener('click', function(){
    burger.classList.toggle('active');
    burgerMenu.classList.toggle('active');
  });
  let burgerMenuItems = document.querySelectorAll('.header__burger-menu-item');
  burgerMenuItems.forEach(function(burgerMenuItem) {
    burgerMenuItem.addEventListener('click', function(){
      burgerMenu.classList.remove('active');
      burger.classList.remove('active');
    });
  });
});