$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		items:1,
	    loop:true,
	    margin:10,
	    autoplay:true,
	    autoplayTimeout:2000,
	    autoplayHoverPause:true
	});

	// init Isotope
	var $grid = $('.work-items').isotope({
	  // options
	});
	// filter items on button click
	$('.work-menu').on( 'click', 'li', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});

});