$(function() {

	// Easy TABS
	$(".tab_item").not(":first").hide();
	$(".tab").click(function() {
		$(".tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active"); // Easy TABS


	// change Active on click
	$(".menu_item").click(function() {
		$(".menu_item").removeClass("active");
		$(this).addClass("active");
	}); // change Active on click

});

new PerfectScrollbar('#Scrollone');
new PerfectScrollbar('#Scrolltwo');
