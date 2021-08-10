const heart = document.querySelectorAll('.heart-svg');
$(document).ready(function () {
  $('.slider').slick({
    arrows: true,
    dots: true,
    speed:1500
  });
  $('.slider2').slick({
    arrows:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight:true,
    adaptiveWidth:true,
    speed:1500,
    variableWidth:true
  });
  $('.slider3').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    adaptiveHeight:true,
    adaptiveWidth:true,
    speed:1500,
    variableWidth:true
  });
});
heart.forEach(function(item){
 item.addEventListener('click', function(){
   const path = item.querySelector('path');
   
    path.classList.toggle('heart-path')
    
});
 });


/// menu-burger

const menu = document.querySelector('.menu'),
      burger = document.querySelector('.menu__burger'),
      closeMenu = document.querySelector('.menu__close')


burger.addEventListener('click', ()=>{
  menu.classList.add('menu__show')
  document.body.style.overflow = 'hidden';
})

closeMenu.addEventListener('click', ()=>{
  menu.classList.remove('menu__show');
  document.body.style.overflow = '';
});


//модальное окно


const exit = document.querySelector('.sign'),
      modal = document.querySelector('.modal'),
      closeModal = document.querySelector('[data-close]');

exit.addEventListener('click', () => {
  document.body.style.overflow = 'hidden';
  modal.classList.add('modal__show');
  modal.classList.add('fade');
  modal.classList.remove('modal');
  modal.classList.remove('fade__exit');
});

function modalClose() {
  document.body.style.overflow = '';
  modal.classList.add('modal');
  modal.classList.remove('modal__show');
}

closeModal.addEventListener('click', () => {
  const modalTimerId = setTimeout(modalClose, 900);
  modal.classList.add('fade__exit');
});