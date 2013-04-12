
function responsiveSlider () {

//	VARIABLES
var $ = window.$;
$('.slider-wrap ul').addClass('slider');

var sliderWrap = $('.slider-wrap'); // visible slider area
var totalSlides = sliderWrap.find('li').size(); // total number of slides
var sliderWidth; // width of slides lined up
var index = 0; // current slides
var wrapWidth; // = $('.slider-wrap').width();
var wrapHeight;
var ratio = 16/9; // radio of image
var slider = $('.slider');
var newLeft;

$('.slider li:first').addClass('show');
	pagination();

$('.pagination a:first').addClass('cur');

// INIT SLIDER
	render();
	arrows();
	pageClick();

// DRAW SLIDER

	function render () {

		wrapWidth = $('.slider-wrap').width();
		sliderWidth = sliderWrap.width() * totalSlides;
		wrapHeight = wrapWidth / ratio;
		sliderWrap.height(wrapHeight);
		slider.width(sliderWidth);
		$('.slider li').width(wrapWidth);
		moveSlider();
	} 


// DRAW PAGINATION (optional)
	function pagination () {
		for (var i = 0; i < totalSlides; i ++) {
			$('.pagination').append('<li><a href=""></a></li>');
		}
	}

// CLICK BUTTONS

	function arrows () {
		index = $('.show').index(); // current slides
		
		$('.arrows').on('click', function(e){
			e.preventDefault();
			//left

			if ($(this).hasClass('left')) {
				if (index === 0) {
					index = totalSlides-1;
				} else {
					index = index -1;
				}
			//right
			} else {
				if (index === totalSlides -1) {
					index = 0;
				} else {
					index = index +1;
				}
			}
			moveSlider();
		});
	}

	function pageClick () {
		$('.pagination a').click(function(e){
			e.preventDefault();
			index = $('.pagination a').index(this);
			moveSlider();
		});
	}

	function moveSlider() {

		var curSlide = $('.slider li')[index];
		var curPage = $('.pagination a')[index];
		newLeft = index * wrapWidth * -1;
		slider.css('left', newLeft);

		$('.slider li').removeClass('show');
		$(curSlide).addClass('show');
		$('.pagination a').removeClass('cur');
		$(curPage).addClass('cur');
	} 


// ON RESIZE
	$(window).resize(function() {
		//redraws slider on resize
		render ();
	});

} responsiveSlider ('.slider-wrap');


