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
   
    path.classList.toggle('heart-path');
    
});
 });

 