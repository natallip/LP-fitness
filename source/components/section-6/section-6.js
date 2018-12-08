module.exports = (function(){
  let owlPartners = $('#slider-partners');
  let optionsPartners = {
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
  $(window).width() < 768? owlPartners.owlCarousel(optionsPartners) : destroySlider(768, owlPartners, optionsPartners);

  $(window).resize(function () {
    destroySlider(768, owlPartners, optionsPartners);
  });
})();