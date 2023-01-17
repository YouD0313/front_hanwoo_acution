const clickMore = document.querySelector('.clickMore');
const infoMore = document.querySelector('.infoMore');
const infoBasic = document.querySelector('.infoBasic');
const slideItem = document.querySelectorAll('.slideitem');
const slickDots = document.querySelector('.slick-dots');
const arrowShowHide = document.querySelectorAll('[name="slide"]');
const arrowLeft = document.querySelector('.left');
// const slidelist = document.querySelector('.slidelist');
// console.log('slideItem.attributes[1].value', slideItem.attributes[1].value);

clickMore.addEventListener('click', function () {
	// let createDiv = document.createElement('div');
	// slidelist.appendChild(createDiv);
	infoMore.classList.toggle('block');
	if (infoMore.classList.value == 'infoMore block') {
		clickMore.classList.remove('fa-caret-up');
		clickMore.classList.add('fa-caret-down');
		// createDiv.classList.add('height');
	} else if (infoMore.classList.value == 'infoMore') {
		clickMore.classList.add('fa-caret-up');
		clickMore.classList.remove('fa-caret-down');
		// slidelist.removeChild(document.querySelector('.height'));
	}
});
$('.slidelist').slick({
	dots: true,
	arrows: true,
	prevArrow:
		"<button type='button' class='slick-prev left'><img src='./img/left01.png' class='imgSize'></button>",
	nextArrow:
		"<button type='button' class='slick-next right'><img src='./img/right01.png' class='imgSize'></button>",
	dotsClass: 'slick-dots',
});
