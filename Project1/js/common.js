$(function() {

	// Easy TABS
	$('.tab_item').not(':first').hide();
	$('.tab').click(function() {
		$('.tab').removeClass('active').eq($(this).index()).addClass('active');
		$('.tab_item').hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass('active'); // Easy TABS


	// change Active on click
	$('.menu__item').click(function() {
		$('.menu__item').removeClass('active');
		$(this).addClass('active');
	}); // change Active on click


	// Мобильноке меню
	$('.button-slide').click(function() {
		$('.left_bar').toggleClass('hidemenu');
		$('.cblock').toggleClass('openmenu');
		$('.button-slide').toggleClass('button-slide_open');
	});

	// Сброс меню при ресайзе
	$(window).resize(function() {
	  if ($(window).width() > 767.9 ) {
	    $(".left_bar").removeClass("hidemenu");
	    $(".cblock").removeClass("openmenu");
	    $(".button-slide").removeClass("button-slide_open");
	  }
	});


});

new PerfectScrollbar('#Scrollone');
new PerfectScrollbar('#Scrolltwo');
