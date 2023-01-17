const clickMore = document.querySelector('.clickMore');
const infoMore = document.querySelector('.infoMore');
const infoBasic = document.querySelector('.infoBasic');
const slideItem = document.querySelectorAll('.slideitem');
const slickDots = document.querySelector('.slick-dots');
const arrowShowHide = document.querySelectorAll('[name="slide"]');
const arrowLeft = document.querySelector('.left');
// const slidelist = document.querySelector('.slidelist');
// console.log('slideItem.attributes[1].value', slideItem.attributes[1].value);

// window.addEventListener('DOMContentLoaded', function () {
// 	$(infoMore).hide();
// });
window.addEventListener('DOMContentLoaded', function () {
	// const date = new Date();
	// const milliseconds = date.getMilliseconds();
	// console.log(date);
	// console.log(milliseconds);
	// for (let i = 0; i < 11; i++) {
	// 	let opacityS = i / 10;
	// 	console.log(opacityS);
	// }
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
