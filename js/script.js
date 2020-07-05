$(document).ready(function () {
    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $('nav').addClass('nav--blue');
        } else {
            $('nav').removeClass('nav--blue');
        }
    }).trigger('scroll');
});