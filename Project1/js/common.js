$(function() {

	$(".tab_item").not(":first").hide();
	$(".tab").click(function() {
		$(".tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");


});

new PerfectScrollbar('#Scrollone');
new PerfectScrollbar('#Scrolltwo');
