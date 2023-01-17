const clickMore = document.querySelector('.clickMore');
const infoMore = document.querySelector('.infoMore');
const infoBasic = document.querySelector('.infoBasic');
const slideItem = document.querySelectorAll('.slideitem');
const slickDots = document.querySelector('.slick-dots');
const arrowShowHide = document.querySelectorAll('[name="slide"]');
const arrowLeft = document.querySelector('.left');
const soundIcon = document.querySelector('#sound-icon');
// const slidelist = document.querySelector('.slidelist');
// console.log('slideItem.attributes[1].value', slideItem.attributes[1].value);

soundIcon.addEventListener('click', function () {
	soundIcon.classList.toggle('soundToggle');
});

clickMore.addEventListener('click', function () {
	infoMore.classList.toggle('block');
	if (infoMore.classList.value == 'infoMore block') {
		clickMore.classList.remove('fa-caret-up');
		clickMore.classList.add('fa-caret-down');
	} else if (infoMore.classList.value == 'infoMore') {
		clickMore.classList.add('fa-caret-up');
		clickMore.classList.remove('fa-caret-down');
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
