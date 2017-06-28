$(document).ready(function () {

    // MENU
    // variables
    var menuBtn = $('.menu--hidden__btn'),
        menuHidden = $('.menu--hidden'),
        menu = $('.menu--visible'),
        menuCarousel = document.querySelector('.menu--visible__carousel'),
        menuItems = $('.menu--visible__list-item'),
        skillsList = document.querySelector('.skills__list');

    menuHidden.css('display', 'flex');
    // click events
    menuBtn.on('click', function () {
        menu.fadeToggle();
    });

    menuItems.on('click', function () {
        menu.fadeToggle();
    });
    // carousel
    var carousel = $(".menu--visible__carousel").flipster({
        style: 'flat',
        spacing: 0,
        loop: true,
        click: true,
        keyboard: true,
        scrollwheel: true,
        touch: true,
        fadeIn: 100
    });

    // skills cards
    // mark the first and the last card
    var cards = document.querySelectorAll('.skills__card'),
        cardsArray = [];
    Array.prototype.forEach.call(cards, function (card) {
        cardsArray.push(card);
    });

    cardsArray[0].classList.add('skills__card--first');
    cardsArray[cardsArray.length - 1].classList.add('skills__card--last');

    var skillsFirstCard = $('.skills__card--first'),
        skillsLastCard = $('.skills__card--last');

    // add touch support for the cards
    var skillsSlide = new Hammer(skillsList);

    skillsSlide.on('swipeleft', function () {
        var skillsActiveCard = $('.skills__card--active');

        if (skillsActiveCard.hasClass('skills__card--last')) {
            skillsActiveCard.toggleClass('skills__card--active');
            skillsFirstCard.toggleClass('skills__card--active');
        } else {
            skillsActiveCard.toggleClass('skills__card--active');
            skillsActiveCard.next().toggleClass('skills__card--active');
        }
    });

    skillsSlide.on('swiperight', function () {
        var skillsActiveCard = $('.skills__card--active');

        if (skillsActiveCard.hasClass('skills__card--first')) {
            skillsActiveCard.toggleClass('skills__card--active');
            skillsLastCard.toggleClass('skills__card--active');
        } else {
            skillsActiveCard.toggleClass('skills__card--active');
            skillsActiveCard.prev().toggleClass('skills__card--active');
        }
    });

    // add touch support for the menu
    var menuSlide = new Hammer(menuCarousel);

    menuSlide.on('swipeleft', function () {
        carousel.flipster('prev');
    });
    menuSlide.on('swiperight', function () {
        carousel.flipster('next');
    });
});

