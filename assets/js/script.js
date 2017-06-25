(function () {

    let menuBtn = document.querySelector('.menu--hidden__btn'),
        menu = document.querySelector('.menu--visible');

    menuBtn.addEventListener('click', function () {
        if (menu.style.display === 'none') {
            menu.style.display = 'block';
            menu.style.opacity = '1';
        } else {
            menu.style.display = 'none';
            menu.style.opacity = '0';
        }
    }, false);

})();