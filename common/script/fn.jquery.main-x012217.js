// JavaScript Document
// Begin: jQuery Library functions
//$.holdReady(false);
//$.holdReady(true);
$(document).ready(function(){
	"use strict";

//
	
	// Store all byline data into 'body' for on-demand access within DOM elemengts
	$("body").data("bylines", {
		home:"Build Modern Web for Wide Screens in SingleURL with PHP, MySQL, JSON & AJAX", 
		about:"Code the Web with Passion for High-Quality & Scalable Deliverables", 
		gallery:"Compose with Photography, Imaging, HTML, CSS, jQuery, JS, AJAX & More", 
		samples:"Enterprise Website & Application Development & Support Portfolios", 
		modules:"Exp. In HTML5, CSS3, JQ, JS, AJAX, API, Bootstrap, Mustache, AngularJS & More", 
		videos:"On-Demand AJAX Call for YouTube/Vimeo Videos"});
	//
	$("#home-byline").text($("body").data("bylines").home);
	$("#about-byline").text($("body").data("bylines").about);
	$("#gallery-byline").text($("body").data("bylines").gallery);
	$("#samples-byline").text($("body").data("bylines").samples);
	$("#modules-byline").text($("body").data("bylines").modules);
	$("#videos-byline").text($("body").data("bylines").videos);

	// About Tabs
	$.getJSON("/mysql/json/json-abouttabs.php", function(obj){
		// Abouttabs - Title
		$('#tabtitle1').text((obj.abouttabs[0].tabTitle));
		$('#tabtitle2').text((obj.abouttabs[1].tabTitle));
		$('#tabtitle3').text((obj.abouttabs[2].tabTitle));
		$('#tabtitle4').text((obj.abouttabs[3].tabTitle));

		// Abouttabs - Content Span
		$('#tabspan1').text((obj.abouttabs[0].tabSpan));
		$('#tabspan2').text((obj.abouttabs[1].tabSpan));
		$('#tabspan3').text((obj.abouttabs[2].tabSpan));
		$('#tabspan4').text((obj.abouttabs[3].tabSpan));
	});
    
//

    // Shared Core Functions
    var fnAjax = function(content, where) {
        $.ajax({
        url: content,
        success: function (result) {
        $(where).html(result).fadeIn(1000);
        $('#ajax-display').css("display", "block");
        }
        })
    };

    $('.sectitle, .byline, #collapse').fadeIn(2000);
	
    // Greetings
	/*$("#greetings").hover(function(){
        fnAjax("/common/greetings.html", "#greetings-content");
        $('#greetings-content').fadeIn(250);}, function(){
		$("#greetings-content").text('').css('display','none');
	});*/

//

	// Toggle Theme Control 1 (use sprite)
	$("#bkgd-black").bind("click tap", function(){
		//$("body, #littleGadget").css('background', '#000 url(/images/v-green.png) no-repeat center 0 fixed');
		$("body, #littleGadget").css('background', '#000');
	});

	$("#bkgd-burg").bind("click tap", function(){
		//$("body, #littleGadget").css('background', '#810202 url(/images/v-blue.png) no-repeat center 0 fixed');
		$("body, #littleGadget").css('background', '#810202');
	});

	$("#bkgd-turcoise").bind("click tap", function(){
		//$("body, #littleGadget").css('background', '#0c3b48 url(/images/v-green.png) no-repeat center 0 fixed');
		$("body, #littleGadget").css('background', '#0c3b48');
	});

	$("#bkgd-black, #bkgd-burg, #bkgd-turcoise, #checkDom, #homeAjax").hover(function(){
		$(this).css("border-color", "#fff");

	}, function(){
		$(this).css("border-color", "#b0b0b0");
	});

//

	/*$("#enter").fadeIn(3000).css("display", "block");.animate({top:50},1250).animate({top:500},1000).animate({top:150},1250).animate({top:405},1000);
	$("#enter").bind("click tap", function(){
	$("#enter").animate({top:50},1250).animate({top:500},1000).animate({top:150},1250).animate({top:405},1000);
	});*/

	// Change #maskpicL & #maskpicR opacity from '0' to '1.00'. 
	/*	$("#enter").hover(function(){
	$("#maskpicL, #maskpicR").css("-khtml-opacity", "1.00").css("-moz-opacity", "1.00").css("opacity", "1.00").css("filter", "alpha(opacity=100)");},function(){
	$("#maskpicL, #maskpicR").css("-khtml-opacity", "0").css("-moz-opacity", "0").css("opacity", "0").css("filter", "alpha(opacity=0)");
	});	*/

	// Change #maskpicL & #maskpicR opacity from '0' to '1'. 
	/*	$("#maskpicL, #maskpicR").hover(function(){
	$(this).css("-khtml-opacity", "1.00").css("-moz-opacity", "1.00").css("opacity", "1.00").css("filter", "alpha(opacity=100)");},function(){
	$(this).css("border", "none").css("-khtml-opacity", "0").css("-moz-opacity", "0").css("opacity", "0").css("filter", "alpha(opacity=0)");	
	});	*/

	// Animate to left/right global #sitemaskL/#sitemaskR width from '50%' to '0' and change #leftbar/#rightbar display from 'none' to 'block'. 
	$("#sitemaskL, #sitemaskR").bind("click tap", function(){
		$("#sitemaskL, #sitemaskR").animate({
			width: 0
		}, "slow");
		/*$("#entryrowL, #entryrowR").css("display", "none");*/
		$("#leftbar,#rightbar").css("display", "block");
		/*$("#enter").fadeOut("slow");*/
		$("body").animate({
			backgroundPosition: "center -145px"
		}, 3000);
	});

//

	// Animate to left/right gloal #sitemaskL/#sitemaskR width from '0' back to '50%' and change #leftbar/#rightbar display from 'block' to 'none'.
	$("#leftbar, #rightbar").bind("click tap", function(){
		$("#sitemaskL, #sitemaskR").animate({
			width: "50%"
		}, 1000);
		/*$("#entryrowL, #entryrowR").css("display", "block");*/
		$("#leftbar, #rightbar").css("display", "none");
		/*$("#enter").fadeIn("slow").css("display", "block");*/
		$("body").animate({
			backgroundPosition: "center -145px"
		}, 1000);
	});

//

	// Initializes scrollable and returns the programming API
	/*	var api = $("#scroll").scrollable({
	items: '#categories', size: 1, clickable: false
	// use the navigator plugin
	}).navigator({api: true}); */

	// Animate contentrow to left or right
	/*
	$(".farLeft").bind("click tap", function(){
	//$("#categories").animate({left:"-=800px"});
	$("#categories").animate({left:"12rem"});
	});
	$(".farRight").bind("click tap", function(){
	//$("#categories").animate({left:"+=800px"});
	$("#categories").animate({left:"-388rem"});
	});
	*/

	// Animate category sections
	$('#home, #thumb1').hover(function(){
		$('#home, #thumb1').addClass("outlineOn");
	}, function(){
		$('#home, #thumb1').removeClass("outlineOn");
	});
    
	$('#about, #thumb2').hover(function(){
		$('#about, #thumb2').addClass("outlineOn");
	}, function(){
		$('#about, #thumb2').removeClass("outlineOn");
	});
    
	$('#gallery, #thumb3').hover(function(){
		$('#gallery, #thumb3').addClass("outlineOn");
	}, function(){
		$('#gallery, #thumb3').removeClass("outlineOn");
	});
    
	$('#samples, #thumb4').hover(function(){
		$('#samples, #thumb4').addClass("outlineOn");
	}, function(){
		$('#samples, #thumb4').removeClass("outlineOn");
	});
    
	$('#modules, #thumb5').hover(function(){
		$('#modules, #thumb5').addClass("outlineOn");
	}, function(){
		$('#modules, #thumb5').removeClass("outlineOn");
	});
    
	$('#videos, #thumb6').hover(function(){
		$('#videos, #thumb6').addClass("outlineOn");
	}, function(){
		$('#videos, #thumb6').removeClass("outlineOn");
	});

//

	// Replace scrollable code with own 
	$('#thumb1').bind("click tap", function(){
		$('#categories').animate({left:"0"}, 250, "linear");
		$('a.active, i.active').removeClass('active');
		$(this).addClass('active');
		$('#thumb1').addClass('active');
		$('#farLeftTop, #scrollL').css('visibility', 'hidden');
		$('#farRightTop, #scrollR').css('visibility', 'visible');
	});
    
	$('#thumb2').bind("click tap", function(){
		$('#categories').animate({left: "-80rem"}, 250, "linear");
		$('a.active, i.active').removeClass('active');
		$(this).addClass('active');
		$('#farLeftTop, #scrollL').css('visibility', 'visible');
		$('#farRightTop, #scrollR').css('visibility', 'visible');

	});
    
	$('#thumb3').bind("click tap", function(){
		$('#categories').animate({left: "-160rem"}, 250, "linear");
		$('a.active, i.active').removeClass('active');
		$(this).addClass('active');
		$('#farLeftTop, #scrollL').css('visibility', 'visible');
		$('#farRightTop, #scrollR').css('visibility', 'visible');
	});
    
	$('#thumb4').bind("click tap", function(){
		$('#categories').animate({left: "-240rem"}, 250, "linear");
		$('a.active, i.active').removeClass('active');
		$(this).addClass('active');
		$('#farLeftTop, #scrollL').css('visibility', 'visible');
		$('#farRightTop, #scrollR').css('visibility', 'visible');
	});
    
	$('#thumb5').bind("click tap", function(){
		$('#categories').animate({left: "-320rem"}, 250, "linear");
		$('a.active, i.active').removeClass('active');
		$(this).addClass('active');
		$('#farLeftTop, #scrollL').css('visibility', 'visible');
		$('#farRightTop, #scrollR').css('visibility', 'visible');
	});
    
	$('#thumb6').bind("click tap", function(){
		$('#categories').animate({left: "-400rem"}, 250, "linear");
		$('a.active, i.active').removeClass('active');
		$(this).addClass('active');
		$('#farRightTop, #scrollR').css('visibility', 'hidden');
		$('#farLeftTop, #scrollL').css('visibility', 'visible');
	});

	$('#contactform, #loginTop').bind("click tap", function(){
		$(this).addClass('active2');
	});

	$('#farLeftTop, #scrollL').bind("click tap", function(){
		$('#categories').animate({left:"0"}, 250, "linear");
		$('a.active, i.active').removeClass('active');
		$('#thumb1').addClass('active');
		$('#farLeftTop, #scrollL').css('visibility', 'hidden');
		$('#farRightTop, #scrollR').css('visibility', 'visible');
	});

	$('#farRightTop, #scrollR').bind("click tap", function(){
		$('#categories').animate({left: "-400rem"}, 250, "linear");
		$('a.active, i.active').removeClass('active');
		$('#thumb6').addClass('active');
		$('#farRightTop, #scrollR').css('visibility', 'hidden');
		$('#farLeftTop, #scrollL').css('visibility', 'visible');
	});

//

	// Activates the About subtabs
	$(function(){
		// setup ul.tabs to work as tabs for each div directly under div.panes
		$("ul.tabs").tabs("div.panes > div");
	});

//

	// Toggle Theme Control 1 (use sprite)
	$("#themeControl-1").hover(function(){
		$(this).css("background-position", "0 0");
	}, function(){
		$(this).css("background-position", "0 -24px");
	}).toggle(function(){
		$(".category").css("background", "url('/images/bkgd-across-800x450.jpg') repeat-x");
		alert('Theme One on.');
		$("#themeControl-2, #themeControl-3").css("visibility", "hidden");
	}, function(){
		$("#categories, .category").css("background", "");
		$("#themeControl-2, #themeControl-3").css("visibility", "visible");
		alert('Theme One off.');
	});

	// Toggle Theme Control 2 (use sprite)
	$("#themeControl-2").hover(function(){
		$(this).css("background-position", "0 0");
	}, function(){
		$(this).css("background-position", "0 -48px");
	}).toggle(function(){
		$(".category").css("background", "url('/images/bkgd-across-800x450-sepia.jpg') repeat-x");
		alert('Theme Two on.');
		$("#themeControl-1, #themeControl-3").css("visibility", "hidden");
	}, function(){
		$(".category").css("background", "");
		$("#themeControl-1, #themeControl-3").css("visibility", "visible");
		alert('Theme Two off.');
	});

	// Toggle Theme Control 3 (use sprite)
	$("#themeControl-3").hover(function(){
		$(this).css("background-position", "0 0");
	}, function(){
		$(this).css("background-position", "0 -72px");
	}).toggle(function(){
		$(".category").css("background", "url('/images/trees-800x450.jpg') repeat-x");
		alert('Theme Three on.');
		$("#themeControl-1, #themeControl-2").css("visibility", "hidden");
	}, function(){
		$(".category").css("background", "");
		$("#themeControl-1, #themeControl-2").css("visibility", "visible");
		alert('Theme Three off.');
	});

//

	// Toggle Home DimmerSwitch (use sprite)
	$("#dimmerSwitch").hover(function(){
		$(this).css("background-position", "0 0");
	}, function(){
		$(this).css("background-position", "0 -96px");
	}).toggle(function(){
		$("#themeDimmer").css("display", "block");
		alert('Theme dimmer on.');
	}, function(){
		$("#themeDimmer").css("display", "none");
		alert('Theme dimmer off.');
	});

//

	// For Home Headline 
	$.timer(12000, function (timer){
		timer.stop();
		$("#homeHeadline").fadeOut(1000);
	});

//

	// For Home Slides Cycle
	$('.animSlideL, .animSlideR').fadeIn(1500);
	$('.animSlideL').animate({left:130},500).animate({top:150},750);
    $('.animSlideL').animate({left:130},500).animate({top:100},500);
	$('.animSlideR').animate({right:130},500).animate({top:50},750);
    $('.animSlideR').animate({right:130},500).animate({top:100},500);

	$('.animSlideL img:gt(0)').css("display", "none");
	setInterval(function(){
		$('.animSlideL img:first-child').fadeOut(1500).next('img').fadeIn(3000).end().appendTo('.animSlideL');
	}, 3000);

	$('.animSlideR img:gt(0)').css("display", "none");
	setInterval(function(){
		$('.animSlideR img:first-child').fadeOut(1500).next('img').fadeIn(3000).end().appendTo('.animSlideR');
	}, 3000);

//

	// Toggle Ajax-Display Samples Row
	$("#collapse").bind("click tap", function(){
        fnAjax("/samples/aj-samples-row.php", "#ajax-collapse")
        $(this).fadeOut(500);
	});

    // $('#ajax-collapse, #xMark').bind('click', function(){
	$('#ajax-collapse').bind('click', function(){
        $(this).fadeOut(1000);
        $("#collapse").fadeIn(500);     
        $("html, body").animate({ scrollTop:0}, "fast");
    });
    
//

	// Toggle Slider - MyInfo and ModulesNav
	$("#me-click").bind("click tap", function(){
		$("#contactinfo").slideToggle("fast");
	});
	//
	$("#modulesnav-click").bind("click tap", function(){
		$("#modulesnav").slideToggle("fast");
	});

//

	// Change CSS proerties - bigHall Gallery for SlideWindow
	$('#thumb3').bind("click tap", function(){
		$("#bigHallGalleryTab").fadeIn(500);
		$('#bigHallGalleryTab').animate({top:100}, 500);
	});
	//
	$('#bigHallTop, #bigHallGalleryEnter').bind("click tap", function(){
		$("#categories, .footer, .header, #littleGadget").slideUp(500);
		$("body").css("width", "100%");
		$("#slidewin").css("display", "block");
		$("#bigHallGalleryTab").css("display", "block").animate({top:100}, 100);
        fnAjax("/gallery/aj-slidewin-exhibit1.php", "#centerStage");
		$("#bigHallCollectionTab").fadeIn(250);
		$('#scrollL, #scrollR').css('visibility', 'hidden');
	});
    
	$('#bigHallGalleryExit, #thumb1, #thumb2, #thumb4, #thumb5, #thumb6, #exhibit1-click, #exhibit1, #exhibit2-click, #exhibit2, #exhibit3-click, #exhibit3, #exhibit4-click, #exhibit4, #exhibit5-click, #exhibit5, #exhibit6-click, #exhibit6, #exhibit7-click, #exhibit7, #exhibit8-click, #exhibit8').bind("click tap", function(){
		$("#categories, .footer, .header, #littleGadget").slideDown(500);
		$("#slidewin").css("display", "none");
		$("#bigHallGalleryTab").css("display", "none").css("top", "10px");
		$("#bigHallCollectionTab, #slidewin, #collectionWin").css("display", "none");
		$("body").css("width", "480rem");
	});

	$("#bigHallGalleryExit").bind("click tap", function(){
		$('#scrollL, #scrollR').css('visibility', 'visible');
	});

	$('#bigHallCollectionShow').bind("click tap", function(){
		$('#slidewin').css("display", "none");
		$('#collectionWin').fadeIn(250);
		fnAjax("/gallery/aj-exhibits-union.php", "#fullCollection");
	});

	$('#bigHallCollectionExit').bind("click tap", function(){
		$('#collectionWin').css("display", "none");
		$('#slidewin').fadeIn(250);
		$("html, body").animate({ scrollTop:0}, "fast");
	});

//

	$("#swthumb-exhibit1").bind("click tap", function(){
        fnAjax("/gallery/aj-slidewin-exhibit1.php", "#centerStage");
	});
	$("#swthumb-exhibit2").bind("click tap", function(){
        fnAjax("/gallery/aj-slidewin-exhibit2.php", "#centerStage");
	});
	$("#swthumb-exhibit3").bind("click tap", function(){
        fnAjax("/gallery/aj-slidewin-exhibit3.php", "#centerStage");
	});
	$("#swthumb-exhibit4").bind("click tap", function(){
        fnAjax("/gallery/aj-slidewin-exhibit4.php", "#centerStage");
	});
	$("#swthumb-exhibit5").bind("click tap", function(){
        fnAjax("/gallery/aj-slidewin-exhibit5.php", "#centerStage");
	});
	$("#swthumb-exhibit6").bind("click tap", function(){
        fnAjax("/gallery/aj-slidewin-exhibit6.php", "#centerStage");
	});
	$("#swthumb-exhibit7").bind("click tap", function(){
        fnAjax("/gallery/aj-slidewin-exhibit7.php", "#centerStage");
	});
	$("#swthumb-exhibit8").bind("click tap", function(){
        fnAjax("/gallery/aj-slidewin-exhibit8.php", "#centerStage");
	});

//

	// Change CSS properties - Gallery
	$("#exhibit1-click, #exhibit1").hover(function(){
		$("#exhibit1").css("outline", "4px groove #00ff00").css("z-index", "99");
	}, function(){
		$("#exhibit1").css("outline", "0").css("z-index", "0");
	});
	//
	$("#exhibit2-click, #exhibit2").hover(function(){
		$("#exhibit2").css("outline", "4px groove #00ff00").css("z-index", "99");
	}, function(){
		$("#exhibit2").css("outline", "0").css("z-index", "1");
	});
	//
	$("#exhibit3-click, #exhibit3").hover(function(){
		$("#exhibit3").css("outline", "4px groove #00ff00").css("z-index", "99");
	}, function(){
		$("#exhibit3").css("outline", "0").css("z-index", "2");
	});
	//
	$("#exhibit4-click, #exhibit4").hover(function(){
		$("#exhibit4").css("outline", "4px groove #00ff00").css("z-index", "99");
	}, function(){
		$("#exhibit4").css("outline", "0").css("z-index", "3");
	});
	//
	$("#exhibit5-click, #exhibit5").hover(function(){
		$("#exhibit5").css("outline", "4px groove #00ff00").css("z-index", "99");
	}, function(){
		$("#exhibit5").css("outline", "0").css("z-index", "3");
	});
	//
	$("#exhibit6-click, #exhibit6").hover(function(){
		$("#exhibit6").css("outline", "4px groove #00ff00").css("z-index", "99");
	}, function(){
		$("#exhibit6").css("outline", "0").css("z-index", "2");
	});
	//
	$("#exhibit7-click, #exhibit7").hover(function(){
		$("#exhibit7").css("outline", "4px groove #00ff00").css("z-index", "99");
	}, function(){
		$("#exhibit7").css("outline", "0").css("z-index", "1");
	});
	//
	$("#exhibit8-click, #exhibit8").hover(function(){
		$("#exhibit8").css("outline", "4px groove #00ff00").css("z-index", "99");
	}, function(){
		$("#exhibit8").css("outline", "0").css("z-index", "0");
	});
	//
//

	// Ajax Load function -- For the clickable nav links in About 
	$("#resume-click").bind("click tap", function(){
        fnAjax("/about/aj-resume.php", "#ajax-about");
	});

	$("#references-click").bind("click tap", function(){      
        fnAjax("/about/aj-references.php", "#ajax-about");
	});

	// For smooth scrolling effect in the top-right links of all sections:
	/*$('a[href^="#"]').click(function(event) {
	var id = $(this).attr("href");
	var offset = 30;
	var target = $(id).offset().top - offset;
	$('html, body').animate({scrollTop:target}, 500); //millisec, the higher the slower
	event.preventDefault(); 
	});	*/

//

	// For smooth scrolling to the anchor id position:
	$('#collapse, #homeAjax, #resume-click, #references-click, #exhibit1-click, #exhibit1, #exhibit2-click, #exhibit2, #exhibit3-click, #exhibit3, #exhibit4-click, #exhibit4, #exhibit5-click, #exhibit5, #exhibit6-click, #exhibit6, #exhibit7-click, #exhibit7, #exhibit8-click, #exhibit8, #moreproductions-click, #flickr-click, #mustache-click, #canvas-click, #phpsuper-click').bind("click tap", function (event) {
		var id = $('#categories');
		var offset = 393; // px offset up or down
		var target = $(id).offset().top + offset;
		$('html, body').animate({
			scrollTop: target
		}, 500); //millisec, the higher the slower
	});

//

	// Ajax .ajax function -- For the clickable nav links and images in Gallery 
	$("#exhibit1-click, #exhibit1").bind("click tap", function(){        
        fnAjax("/gallery/aj-exhibit1.php", "#ajax-gallery");
	});
    
	$("#exhibit2-click, #exhibit2").bind("click tap", function(){
        fnAjax("/gallery/aj-exhibit2.php", "#ajax-gallery")
	});
    
	$("#exhibit3-click, #exhibit3").bind("click tap", function(){
        fnAjax("/gallery/aj-exhibit3.php", "#ajax-gallery");
	});
    
	$("#exhibit4-click, #exhibit4").bind("click tap", function(){
        fnAjax("/gallery/aj-exhibit4.php", "#ajax-gallery");
	});
    
	$("#exhibit5-click, #exhibit5").bind("click tap", function(){
        fnAjax("/gallery/aj-exhibit5.php", "#ajax-gallery");
	});
    
	$("#exhibit6-click, #exhibit6").bind("click tap", function(){
        fnAjax("/gallery/aj-exhibit6.php", "#ajax-gallery");
	});

	$("#exhibit7-click, #exhibit7").bind("click tap", function(){
        fnAjax("/gallery/aj-exhibit7.php", "#ajax-gallery");
	});

	$("#exhibit8-click, #exhibit8").bind("click tap", function(){
        fnAjax("/gallery/aj-exhibit8.php", "#ajax-gallery");
	});

	// For the clickable nav links in Modules 
	$("#moreproductions-click").bind("click tap", function(){
        fnAjax("/samples/aj-samples.php", "#ajax-samples");
	});
	$("#flickr-click").bind("click tap", function(){
        fnAjax("/modules/aj-apiflickr.php", "#ajax-modules");
	});
    
	$("#mustache-click").bind("click tap", function(){
        fnAjax("/protox/mustache/aj-mustache.php", "#ajax-modules");
	});
	$("#canvas-click").bind("click tap", function(){
        fnAjax("/protox/html5/canvas/aj-canvas.php", "#ajax-modules");
	});

//

	// For the clickable nav links in Videos 
	$("#load-videos").bind("click tap", function(){
        fnAjax("/videos/aj-videos.php", "#ajax-videos");
	});

//

	// Change CSS properties - Samples
	$("#nsb, #netgear, #javacom, #otn, #verisign, #ht-why, #guestbook").hover(function(){
		$(this).css("outline", "3px solid #00bcd4");
	}, function(){
		$(this).css("outline", "#fff solid 1px");
	});

//

	// launch dimmer with individual overlay
	$("#nsb, #otn, #javacom, #verisign, #ht-why, #guestbook").bind("click tap", function(){
		$("#overlay-row").fadeIn(1500);
		$("#dimmer, #overlay-row").css("display", "block").css("-khtml-opacity", "0.4").css("-moz-opacity", "0.4").css("-moz-opacity", "0.4").css("filter", "alpha(opacity=40)");
	});
    
	$("#nsb").bind("click tap", function(){
        fnAjax("/samples/overlay-nsb.html", "#overlay-block");
	});
    
	$("#otn").bind("click tap", function(){
        fnAjax("/samples/overlay-otn.html", "#overlay-block");
	});
    
	$("#javacom").bind("click tap", function(){
        fnAjax("/samples/overlay-javacom.html", "#overlay-block");
	});
    
	$("#verisign").bind("click tap", function(){
        fnAjax("/samples/overlay-verisign.html", "#overlay-block");
	});
    
	$("#ht-why").bind("click tap", function(){
        fnAjax("/samples/overlay-hightail.html", "#overlay-block");
	});
	
	$("#guestbook").bind("click tap", function(){
        fnAjax("/samples/overlay-guestbook.html", "#overlay-block");
	});
    
	$("#contactform").bind("click tap", function(){
		//$("#overlay-block").load("/contact/contactform-dimmerlay.php");
		$("#contact").toggle(500);
	});
    
	$("#contact #close").bind('click', function(){
		$("#contact").fadeOut(500);
		$("#contactform").removeClass('active2');
	});
    
//

	// Resume dimmerlay set to default (none)
	$("#dimmer, #overlay-row").bind("click tap", function(){
		$("#dimmer, #overlay-row").fadeOut(1500);
	});

//

	// Change CSS properties - Projectors thumnail images
	$("#projector-thum1").hover(function(){
        fnAjax("/modules/load-thum1.html", "#projectScreen");
	});
    
	$("#projector-thum2").hover(function(){
        fnAjax("/modules/load-thum2.html", "#projectScreen");
	});
    
	$("#projector-thum3").hover(function(){
        fnAjax("/modules/load-thum3.html", "#projectScreen");
	});
    
	$("#projector-thum4").hover(function(){
        fnAjax("/modules/load-thum4.html", "#projectScreen");
	});

//

	// DivGrid cells
	$(".gridCell").hover(function(){
		$(this).css("background-color", "#4188a2");
		$("#desc").text("This is grid cell #" + this.id);
	}, function(){
		$(this).css("background-color", "#94bccb");
		$("#desc").text("...");
	});
	//
	$(".gridCell#r9c3").hover(function(){
		$(this).css("background-color", "#4188a2");
		$("#desc").text("This is grid cell #" + this.id + " -- the last grid cell of this 27-cell css tableless grid. Try other cells and thank you for trying.")
	}, function(){
		$(this).css("background-color", "#94bccb");
		$("#desc").text("...");
	});
	//	

	$(".gridCell").bind("click tap", function(){
		$(this).css("background-color", "#b42800");
	});
	//
	$("#r1c2, #r1c3, #r2c1, #r2c2, #r2c3, #r3c1, #r3c2, #r3c3, #r4c1, #r4c2, #r4c3, #r5c1, #r5c3, #r6c1, #r6c2, #r6c3, #r7c1, #r7c2, #r7c3, #r1c1, #r8c2, #r8c3, #r9c1, #r9c2, #r9c3,").bind("click tap", function(){
		var message = 'Sorry, ' + this.id + ' is not the Daily Double cell. Please try again.';
		alert(message);
	});

	// Daily Double Cell
	$("#r5c2").bind("click tap", function(){
		var message = 'Congratualations! ' + this.id + ' is the Daily Double cell. Click R to refresh the page or X to close this window.';
		alert(message);
		$("#divGridTitle, #desc").css("background-color", "#b42800");
        fnAjax("/protox/aj-dailydoublerwd.html", "#ajax-collapse");
	});

//

	$("#modulesNavset-animation").bind("click tap", function(){
		$("#modulesHome").fadeOut();
		$("#modulesAnimation").fadeIn();
		$("#animationScreen").animate({
			height: 270
		}, "slow").animate({
			width: 756
		}, "slow");
	});

	$("#modulesNavset-modules").bind("click tap", function(){
		$("#modulesAnimation").fadeOut();
		$("#modulesHome").fadeIn().css("display", "block");
	});

	$("#stopAnimation").bind("click tap", function(){
		$("div#cssAnimate").fadeOut();
		$.timer(750, function (timer){
			timer.stop();
		});

		$("#refreshAnimation").bind("click tap", function(){
			$("div#cssAnimate").fadeIn();
			$("#animationScreenImg").fadeIn();
		});
	});
	
	/* To ajax in app files into #appsCollect from the top and bottom navbars.
	$("#thumb7, #thumb7x").bind("click tap", function(){
    $("#appsConsolet").toggle(500); 
	fnAjax("/mysql/view-comments.php", "#appsConsole");    
	});
	*/
	
	/*
	$('#appsConsole div span#close').bind("click tap", function(){
		$('#appsCollect').fadeOut(500);
	});
	*/
	
	//#restApps
	$("#restApps").bind('change', function(){
		var selectedOption = $("#restApps option:selected");
		if(selectedOption.val() === '1') { // restApps
			$('#appsConsole').css('display','none');
		};
		/*if(selectedOption.val() === '2') { // Comments
			fnAjax("/mysql/view-comments.php", "#appsConsole");
		};*/
		if(selectedOption.val() === '3') { // Guestbook
			fnAjax("/mysql/console-guestbook.php", "#appsConsole");
		};
	});
	
//

	//#ajax-left
	$("#javascript").bind('change', function(){
		var selectedOption = $("#javascript option:selected");
		if(selectedOption.val() === '1') { // restApps
			$('#ajax-left').css('display','none');
		};
		if(selectedOption.val() === '2') {
			fnAjax("/protox/js/closures/closure-101.html", "#ajax-left");
		};
		if(selectedOption.val() === '3') {
			fnAjax("/protox/js/closures/closure-102.html", "#ajax-left");
		};
		if(selectedOption.val() === '4') {
			fnAjax("/protox/js/closures/closure-103.html", "#ajax-left");
		};
		if(selectedOption.val() === '5') {
			fnAjax("/protox/js/closures/closure-factory.html", "#ajax-left");
		};
		if(selectedOption.val() === '6') {
			fnAjax("/protox/js/cab/call-apply-bind.html", "#ajax-left");
		};
		if(selectedOption.val() === '7') {
			fnAjax("/protox/js/callback/callbacks.html", "#ajax-left");
		};
		if(selectedOption.val() === '8') {
			fnAjax("/protox/js/funcprogram/functional-programming.html", "#ajax-left");
		};
		if(selectedOption.val() === '9') {
			fnAjax("/protox/js/fncons-proto/fncons-proto.html", "#ajax-left");
		};
		if(selectedOption.val() === '10') {
			fnAjax("/protox/js/obj-create/obj-create.html", "#ajax-left");
		};
		if(selectedOption.val() === '11') {
			fnAjax("/protox/js/json-ext/jq.html", "#ajax-left");
		};
		if(selectedOption.val() === '12') {
			fnAjax("/protox/js/json-ext/js.html", "#ajax-left");
		};
	});
});
// End: jQuery Library functions


/*
https://learn.jquery.com/using-jquery-core/faq/how-do-i-get-the-text-value-of-a-selected-option/

Select elements typically have two values that you want to access. First there's the value to be sent to the server, which is easy:
	
$( "#myselect" ).val();
// => 1

The second is the text value of the select. For example, using the following select box:
<select id="myselect">
    <option value="1">Mr</option>
    <option value="2">Mrs</option>
    <option value="3">Ms</option>
    <option value="4">Dr</option>
    <option value="5">Prof</option>
</select>

$("#myselect option:selected").text();
// => "Mr"
*/