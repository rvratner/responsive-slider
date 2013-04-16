
(function () {

//	VARIABLES
var $ = window.$;
$('.slider-wrap ul').addClass('slider');

var sliderWrap = $('.slider-wrap'); // visible slider area
var totalSlides = sliderWrap.find('li').length; 
var sliderWidth; 
var curIndex = 0;
var wrapWidth; 
var wrapHeight;
var ratio = 16/9; 
var slider = $('.slider');
var slides = slider.children('li');
var newLeft;


$(slides.get(0)).addClass('show');
pagination();
var pages = $('.pagination a');


$('.pagination a:first').addClass('cur');

	// init slider
	render();
	arrows();
	pageClick();

	// draw slider

	function render () {

		wrapWidth = sliderWrap.width();
		sliderWidth = sliderWrap.width() * totalSlides;
		wrapHeight = wrapWidth / ratio;
		sliderWrap.height(wrapHeight);
		slider.width(sliderWidth);
		slider.height(wrapHeight);
		slides.width(wrapWidth);
		moveSlider();
	} 


	// draw pagination (optional)
	function pagination () {
		for (var i = 0; i < totalSlides; i ++) {
			$('.pagination').append('<li><a href=""></a></li>');
		}
	}

	// click buttons

	function arrows () {
		curIndex = $('.show').index(); // current slides
		
		$('.arrows').on('click', function(e){
			e.preventDefault();
			//left

			if ($(this).hasClass('left')) {
				if (curIndex === 0) {
					curIndex = totalSlides-1;
				} else {
					curIndex --;
				}
			//right
			} else {
				if (curIndex === totalSlides -1) {
					curIndex = 0;
				} else {
					curIndex = curIndex +1;
				}
			}
			moveSlider();
		});
	}

	function pageClick () {
		console.log(pages);
		pages.click(function(e){
			e.preventDefault();
			curIndex = $(this).parent().index();
			console.log(curIndex);
			moveSlider();
		});
	}

	function moveSlider() {

		var curSlide  =slides[curIndex];
		var curPage = pages[curIndex];
		newLeft = curIndex * wrapWidth * -1;
		var newLeftTranslate = 'translateX('+ newLeft+'px)';
		$(slider).css({
			'-webkit-transform':newLeftTranslate,
			'-moz-transform':newLeftTranslate,
			'-o-transform':newLeftTranslate,
			'-ms-transform':newLeftTranslate,
			'-transform':newLeftTranslate
		});
		slides.removeClass('show');
		$(curSlide).addClass('show');
		pages.removeClass('cur');
		$(curPage).addClass('cur');
	} 

	// on resize
	$(window).resize(function() {
		//redraws slider on resize
		slider.css({
			'-webkit-transition': 'all 0s',
			'-moz-transition':'all 0s',
			'-o-transition':'all 0s',
			'-ms-transition':'all 0s',
			'-transition':'all 0s'
		});
		render ();
		slider.css({
			'-webkit-transition': 'all 1s',
			'-moz-transition':'all 1s',
			'-o-transition':'all 1s',
			'-ms-transition':'all 1s',
			'-transition':'all 1s'
		});

	});

} ());


