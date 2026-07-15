$(document).ready(function(){
	$(".bookbutton a").click(function(){
		$(".bookoverlay").fadeToggle(200);
		$(".top-navigation").css("z-index", 0);
		$(this).toggleClass('bookbtn-open').toggleClass('bookbtn-close');
	});
});
$('.bookoverlay').on('click', function(){
		$(".bookbutton a").toggleClass('bookbtn-close').toggleClass('bookbtn-close');
	open = false;
});

$(".bookbutton a").click(function(){
	$("#navigation-wrapper").css("z-index", 9999);
	$("#booking-wrapper").css("z-index", 8888);
});

