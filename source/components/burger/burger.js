module.exports = (function () {
    let burger = $('.burger-wrap');
    let nav = $('.navigation');
    let page = $('#fullpage');

    $(burger).click(function () {
        $(this).toggleClass('active');
        $(nav).toggleClass('open');
        $(page).toggleClass('no-scroll');
    });

    $('a[href^="#"]').click(function () {
      let target = $(this).attr('href');

      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 500);

      $(burger).toggleClass('active');
      $(nav).toggleClass('open');
      $(page).toggleClass('no-scroll');
      return false;
    });

})();

if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
        let el = this;
        if (!document.documentElement.contains(el)) return null;
        do {
            if (el.matches(s)) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);

        return null;
    };
}