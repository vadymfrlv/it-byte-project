$('.slider-top-js').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // fade: true,
    asNavFor: '.slider-bottom-js '
  });
  $('.slider-bottom-js').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    infinity: true,
    // autoplay: true,
    // autoplaySpeed: true,
    asNavFor: '.slider-top-js',
    dots: false,
    centerMode: true,
    centerPadding:"0px",
   
    focusOnSelect: true,
    nextArrow: $(".button-arrowr"),
    prevArrow:$(".button-arrowl"),
    responsive: [ {
  
        breakpoint: 767,
        settings: {
            
            slidesToShow: 3,
            slidesToScroll: 1,
        }
  
      }, 
      
    //   {
  
    //     breakpoint: 300,
    //     settings: {
    //         slidesToShow: 3,
    // slidesToScroll: 1,
    //     }
  
    //   }
    ]
  });