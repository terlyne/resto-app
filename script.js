const offerBlock = document.querySelector('.header__offer-block');
const offerBtn = document.querySelector('.header__close-button');

offerBtn.addEventListener('click', () => {
	if (offerBlock instanceof HTMLDivElement) {
		offerBlock.style.minHeight = '0px';
		offerBlock.style.height = '0px';
	}
});

