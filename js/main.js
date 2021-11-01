document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$('.menu').click(function(){
    $('.menu span').toggleClass('change');
    $('header ul').toggleClass('change');
});


$('a.carousel').click(function (e) {
  e.preventDefault();
});


$('.carousel').carousel();

var owl= $('.owl-carousel');

var carouselOption={
    items:1,
    loop:true,
    margin:10,
    autoplay:false,
    autoplayTimeout:400000,
    navigation:true,
    nav:true,
    autoplayHoverPause:true,
    navText: ['<span class="fas fa-chevron-left fa-2x"></span>','<span class="fas fa-chevron-right fa-2x"></span>'],
    responsive:{
        0:{
      
            
        },
        768:{
          items:3,
        },
        1440:{
           items:3,
        },
        576:{
            items:1,
        
           
        }
       
    }

}
owl.owlCarousel(carouselOption);
