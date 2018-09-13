$(window).scroll(function() {
		if (($(document).scrollLeft() > 400) && ($(document).scrollLeft() <= 1200)) {
			$('.category').removeClass('outlineOn');
			$('a.active').removeClass('active');
			$('#thumb2').addClass('active');
			$("#about").addClass("outlineOn");
		} else {
			$('#thumb2').removeClass('active');
			$('#about').removeClass('outlineOn');			
		}
	});
	$(window).scroll(function() {
		if (($(document).scrollLeft() > 1200) && ($(document).scrollLeft() <= 2000)) {
			$('.category').removeClass('outlineOn');
			$('a.active').removeClass('active');
			$('#thumb3').addClass('active');
			$("#gallery").addClass("outlineOn");
		} else {
			$('#thumb3').removeClass('active');
			$('#gallery').removeClass('outlineOn');			
		}
	});
	$(window).scroll(function() {
		if (($(document).scrollLeft() > 2000) && ($(document).scrollLeft() <= 2800)) {
			$('.category').removeClass('outlineOn');
			$('a.active').removeClass('active');
			$('#thumb4').addClass('active');
			$("#samples").addClass("outlineOn");
		} else {
			$('#thumb4').removeClass('active');
			$('#samples').removeClass('outlineOn');			
		}
	});
	$(window).scroll(function() {
		if (($(document).scrollLeft() > 2800) && ($(document).scrollLeft() <= 3600)) {
			$('.category').removeClass('outlineOn');
			$('a.active').removeClass('active');
			$('#thumb5').addClass('active');
			$("#modules").addClass("outlineOn");
		} else {
			$('#thumb5').removeClass('active');
			$('#modules').removeClass('outlineOn');			
		}
	});
	//