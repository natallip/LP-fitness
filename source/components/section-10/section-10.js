module.exports = (function(){
  $('#slider-photos').owlCarousel({
    loop:true,
    nav:false,
    responsive:{
      0:{
        stagePadding: 30,
        center: true,
        items:1
      },
      768:{
        stagePadding: 180,
        center: true,
        items:1
      },
      1200:{
        items:3,
        stagePadding: 0,
        center: false
      }
    }
  })

})();
