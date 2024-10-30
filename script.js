const offerBlock = document.querySelector('.header__offer-block');
const closeButton = document.querySelector('.header__close-button');

closeButton.addEventListener('click', function() {
    offerBlock.style.display = 'none';
});