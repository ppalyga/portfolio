function logoAnimation() {
    document.querySelector('#logoContainer').addEventListener('mouseover', function () {
        document.querySelector('#logoArrowLeft').classList.remove('fadeInLeft');
        document.querySelector('#logoArrowLeft').classList.add('fadeOut');
    });
    document.querySelector('#logoContainer').addEventListener('mouseout', function () {
        document.querySelector('#logoArrowLeft').classList.remove('fadeOut');
        document.querySelector('#logoArrowLeft').classList.add('fadeIn');
    });
}
setTimeout(logoAnimation, 700);

