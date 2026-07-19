$("#slideshow > div:gt(0)").hide();

// non-first slides ship as data-src so they don't compete with the LCP hero;
// hydrate them once the page has loaded
$(window).on('load', function () {
	$('#slideshow img[data-src]').each(function () {
		this.src = this.getAttribute('data-src');
		this.removeAttribute('data-src');
	});
});

setInterval(function() {
		$('#slideshow > div:first')
			.fadeOut(1000)
			.next()
			.fadeIn(1000)
			.end()
			.appendTo('#slideshow');
}, 8000);
