$(document).ready(function(){
$('.my-slider').slick({
   arrows: true,
   dots: true,
   adaptiveHeight: true,
   slidesToShow: 1,
   slidesToScroll: 1,
   speed: 1000, 
   easing: 'ease',
   infinite: true,
   autoplay: false,
   autoplaySpeed: 5000,
   pauseOnFocus: true,
   pauseOnHover: true,
   pauseOnDotsHover: true,
   draggeble: true,
   swipe: true,
   waitForAnimate: true,
   centerMode: false,
   variableWidth: false,
   rows: 1,
   slidesPerRow: 1,
   vertical: false,
   responsive: [
      {
         breakpoint: 600,
         settings: {
            arrows: false
         }
      }, {
         breakpoint: 768,
         settings: {

         }
      }
   ],
   mobileFirst: false,
   // appendArrows: $('.наш класс'),
   // appendDots: $('.наш класс'),
});
});