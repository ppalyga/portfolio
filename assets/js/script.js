$(document).ready(function () {

    let menuBtn = $('.menu--hidden__btn'),
        menu = $('.menu--visible');

    menuBtn.on('click', function () {
        menu.fadeToggle();
    });

    $(".menu--visible__carousel").flipster({
        style: 'flat',
        spacing: 0,
        loop: true,
        click: true,
        keyboard: true,
        scrollwheel: true,
        touch: true,
        fadeIn: 100
    });

});

