module.exports = (function(){
  let owlProfits = $('#slider-profits');
  let optionsProfits = {
    loop: true,
    margin: 10,
    responsive: {
      0: {
        items: 1
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
  $(window).width() < 768? owlProfits.owlCarousel(optionsProfits) : destroySlider(768, owlProfits, optionsProfits);

  $(window).resize(function () {
    destroySlider(768, owlProfits, optionsProfits);
  });
})();