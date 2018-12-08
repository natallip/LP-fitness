module.exports = (function(){
  let owlVariants = $('#slider-variants');
  let optionsVariants = {
    loop:true,
    nav:false,
    responsive:{
      0:{
        center: true,
        items:1
      },
      768:{
        center: true,
        items:2
      }
    }
  };

  let destroySlider = function (width, slider, options) {
    if ($(window).width() < width) {
      if (slider.hasClass('off')) {
        let owlActive = slider.owlCarousel(options);
        slider.removeClass('off');
      }
    } else {
      if (!slider.hasClass('off')) {
        slider.addClass('off').trigger('destroy.owl.carousel');
        slider.find('.owl-stage-outer').children(':eq(0)').unwrap();
      }
    }
  };
  $(window).width() < 1200? owlVariants.owlCarousel(optionsVariants) : destroySlider(1200, owlVariants, optionsVariants);

  $(window).resize(function () {
    destroySlider(1200, owlVariants, optionsVariants);
  });

})();