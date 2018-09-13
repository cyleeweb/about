// JavaScript Document
// Begin: jQuery Library functions
//$.holdReady(false);
//$.holdReady(true);
$(document).ready(function(){
	"use strict";

	// Store all byline data into 'body' for on-demand access within DOM elemengts
	$("body").data("bylines", {
		home:"Build DB-Driven Modern Web in SingleURL with PHP, MySQL, JSON, AJAX & More", 
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

	$('.category').hover(function() {
		$(this).addClass("outlineOn2");
		//$(this).find(".sectitle").addClass("outlineOn2");
	}, function () {
		$(this).removeClass("outlineOn2");
		//$(this).find(".sectitle").removeClass("outlineOn2");
	});

	$('#thumb1, #home').hover(function() {
		$("#thumb1, #home").removeClass("outlineOn").addClass("outlineOn2");
	}, function () {
		$("#thumb1, #home").removeClass("outlineOn2");
	});
	$('#thumb2, #about').hover(function() {
		$("#thumb2, #about").removeClass("outlineOn").addClass("outlineOn2");
	}, function () {
		$("#thumb2, #about").removeClass("outlineOn2");
	});
	$('#thumb3, #gallery').hover(function() {
		$("#thumb3, #gallery").removeClass("outlineOn").addClass("outlineOn2");
	}, function () {
		$("#thumb3, #gallery").removeClass("outlineOn2");
	});
	$('#thumb4, #samples').hover(function() {
		$("#thumb4, #samples").removeClass("outlineOn").addClass("outlineOn2");
	}, function () {
		$("#thumb4, #samples").removeClass("outlineOn2");
	});
	$('#thumb5, #modules').hover(function() {
		$("#thumb5, #modules").removeClass("outlineOn").addClass("outlineOn2");
	}, function () {
		$("#thumb5, #modules").removeClass("outlineOn2");
	});
	$('#thumb6, #videos').hover(function() {
		$("#thumb6, #videos").removeClass("outlineOn").addClass("outlineOn2");
	}, function () {
		$("#thumb6, #videos").removeClass("outlineOn2");
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

	$('#ajax-collapse').bind('click', function(){
        $(this).fadeOut(500, function(){window.scrollTo(0,0);});
        $("#collapse").fadeIn(500);     
        $('#ajax-display').css('display','none');
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

	$("#css3bar-link").bind("click tap", function () {
        fnAjax("/protox/css/css3bar.php", "#ajax-modules");
	});

	$("#canvas-click").bind("click tap", function(){
        fnAjax("/protox/html5/canvas/aj-canvas.php", "#ajax-modules");
	});	

	$("#phpsuper-click").bind("click tap", function () {
        fnAjax("/protox/php/superglobals/servervars.php", "#ajax-modules");
	}); 

	$("#flickr-click").bind("click tap", function(){
        fnAjax("/modules/aj-apiflickr.php", "#ajax-modules");
	});
    
	$("#mustache-click").bind("click tap", function(){
        fnAjax("/protox/mustache/aj-mustache.php", "#ajax-modules");
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
    
    // Contact Form
	$("#contactTop").bind("click tap", function(){
		$("#contact").toggle(500);
	});
    
	$("#contact #close").bind('click tap', function(){
		$("#contact").fadeOut(500);
		$("#contactTop").removeClass('active2');
	});

	// LogIn Form
	$("#loginTop").bind("click tap", function(){
		$("#login").toggle(500);
	});
    
	$("#login #close").bind('click tap', function(){
		$("#login").fadeOut(500);
		$("#loginTop").removeClass('active2');
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
	
	//#restApps
	$("#restApps").bind('change', function(){
		var selectedOption = $("#restApps option:selected");
		/*
		if(selectedOption.val() === '1') { // restApps
			$('#appsConsole').css('display','none');
		};
		if(selectedOption.val() === '2') { // Comments
			fnAjax("/mysql/view-comments.php", "#appsConsole");
		};
		*/
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
			fnAjax("/protox/js/closures/closure-101.php", "#ajax-left");
		};
		if(selectedOption.val() === '3') {
			fnAjax("/protox/js/closures/closure-102.php", "#ajax-left");
		};
		if(selectedOption.val() === '4') {
			fnAjax("/protox/js/closures/closure-103.php", "#ajax-left");
		};
		if(selectedOption.val() === '5') {
			fnAjax("/protox/js/closures/closure-factory.php", "#ajax-left");
		};
		if(selectedOption.val() === '6') {
			fnAjax("/protox/js/cab/call-apply-bind.php", "#ajax-left");
		};
		if(selectedOption.val() === '7') {
			fnAjax("/protox/js/callback/callbacks.php", "#ajax-left");
		};
		if(selectedOption.val() === '8') {
			fnAjax("/protox/js/funcprogram/functional-programming.php", "#ajax-left");
		};
		if(selectedOption.val() === '9') {
			fnAjax("/protox/js/fncons-proto/fncons-proto.php", "#ajax-left");
		};
		if(selectedOption.val() === '10') {
			fnAjax("/protox/js/obj-create/obj-create.php", "#ajax-left");
		};
		if(selectedOption.val() === '11') {
			fnAjax("/protox/js/json-ext/jq.php", "#ajax-left");
		};
		if(selectedOption.val() === '12') {
			fnAjax("/protox/js/json-ext/js.php", "#ajax-left");
		};
	});

	$("#spahashpower").bind('change', function(){
		var n = $(this).val();
		var strURL = window.location.href.split("#"); // split into array at #
		var strHref = strURL[0]; // take the 1st value of the array

		switch(n) {
			case '#/exhibit/1':
				location.replace(strHref + '#/exhibit/1');
			break;
			case '#/exhibit/2':
				location.replace(strHref + '#/exhibit/2');
				break;
			case '#/exhibit/3':
				location.replace(strHref + '#/exhibit/3');
			   	break;
			case '#/exhibit/4':
				location.replace(strHref + '#/exhibit/4');
			   	break;
			case '#/exhibit/5':
				location.replace(strHref + '#/exhibit/5');
			   	break;
			case '#/exhibit/6':
				location.replace(strHref + '#/exhibit/6');
			   	break;
			case '#/exhibit/7':
				location.replace(strHref + '#/exhibit/7');
			   	break;
			case '#/exhibit/8':
				location.replace(strHref + '#/exhibit/8');
			break;
		}
	});

//

/************** SPA Hashtag change ********************/

	/*window.addEventListener('hashchange', function(){*/
	$(window).bind('hashchange', function() {
		//var gNone = '#orangebarTop nav, #gadgets > div:not(#cl-hashpower), #gadgets > select, .category';
		var gNone = '#orangebarTop nav, #gadgets > select:not(#spahashpower), #gadgets > div, .category';
		if(window.location.hash === '#/exhibit/1'){
			$(gNone).addClass('g-none');
			fnAjax("/gallery/aj-hash-exhibit1.php", "#hashpower");
		}
		if(window.location.hash === '#/exhibit/2'){
			$(gNone).addClass('g-none');
			fnAjax("/gallery/aj-hash-exhibit2.php", "#hashpower");
		}
		if(window.location.hash === '#/exhibit/3'){
			$(gNone).addClass('g-none');
			fnAjax("/gallery/aj-hash-exhibit3.php", "#hashpower");
		}
		if(window.location.hash === '#/exhibit/4'){
			$(gNone).addClass('g-none');
			fnAjax("/gallery/aj-hash-exhibit4.php", "#hashpower");
		}
		if(window.location.hash === '#/exhibit/5'){
			$(gNone).addClass('g-none');
			fnAjax("/gallery/aj-hash-exhibit5.php", "#hashpower");
		}
		if(window.location.hash === '#/exhibit/6'){
			$(gNone).addClass('g-none');
			fnAjax("/gallery/aj-hash-exhibit6.php", "#hashpower");
		}
		if(window.location.hash === '#/exhibit/7'){
			$(gNone).addClass('g-none');
			fnAjax("/gallery/aj-hash-exhibit7.php", "#hashpower");
		}
		if(window.location.hash === '#/exhibit/8'){
			$(gNone).addClass('g-none');
			fnAjax("/gallery/aj-hash-exhibit8.php", "#hashpower");
		}
	});

/************** /SPA Hashtag change ********************/

// Global Nav Scroll & Continuous Scroll Interactions 

// var scrollL = $('body').scrollLeft(); // document's scrollbar's left position (always zero if 'hidden')
//console.log(scrollL);
//console.log(objOffset.left); // moving object's left position

var objOffset = $('#categories').offset(); // moving object's top and left positions
var vRangeL = -4806;
var vRangeR = 0;

//
if ((objOffset.left >= vRangeL) && (objOffset.left <= vRangeR)) { // range = @slide-width * number of slides && one slide width + left side panel width

	$('#thumb1').bind("click tap", function(){
		$('#categories').animate({left:0}, 250, "linear");
		$("#orangebarTop .i").removeClass("outlineOn");
		$('#thumb1').addClass('outlineOn');
		$(".category").removeClass("outlineOn");
		$('#home').addClass('outlineOn');
		$('#scrollL').css('visibility', 'hidden');
		$('#scrollR').css('visibility', 'visible');
	});
    
	$('#thumb2').bind("click tap", function(){
		$('#categories').animate({left:-801}, 250, "linear");
		$("#orangebarTop .i").removeClass("outlineOn");
		$("#thumb2").addClass('outlineOn');
		$(".category").removeClass("outlineOn");
		$('#about').addClass('outlineOn');
		$('#scrollL').css('visibility', 'visible');
		$('#scrollR').css('visibility', 'visible');
	});
    
	$('#thumb3').bind("click tap", function(){
		$('#categories').animate({left:-1602}, 250, "linear");
		$("#orangebarTop .i").removeClass("outlineOn");
		$("#thumb3").addClass('outlineOn');
		$(".category").removeClass("outlineOn");
		$('#gallery').addClass('outlineOn');
		$('#scrollL').css('visibility', 'visible');
		$('#scrollR').css('visibility', 'visible');
	});
    
	$('#thumb4').bind("click tap", function(){
		$('#categories').animate({left:-2403}, 250, "linear");
		$("#orangebarTop .i").removeClass("outlineOn");
		$("#thumb4").addClass('outlineOn');
		$(".category").removeClass("outlineOn");
		$('#samples').addClass('outlineOn');
		$('#scrollL').css('visibility', 'visible');
		$('#scrollR').css('visibility', 'visible');
	});
    
	$('#thumb5').bind("click tap", function(){
		$('#categories').animate({left:-3204}, 250, "linear");
		$("#orangebarTop .i").removeClass("outlineOn");
		$("#thumb5").addClass('outlineOn');
		$(".category").removeClass("outlineOn");
		$('#modules').addClass('outlineOn');
		$('#scrollL').css('visibility', 'visible');
		$('#scrollR').css('visibility', 'visible');
	});
    
	$('#thumb6').bind("click tap", function(){
		$('#categories').animate({left:-4005}, 250, "linear");
		$("#orangebarTop .i").removeClass("outlineOn");
		$("#thumb6").addClass('outlineOn');
		$(".category").removeClass("outlineOn");
		$('#videos').addClass('outlineOn');
		$('#scrollR').css('visibility', 'hidden');
		$('#scrollL').css('visibility', 'visible');
		$(document).scrollLeft(0);
	});

	$('#contactTop, #loginTop').bind("click tap", function(){
		$(this).addClass('active2');
	});

//
	$("#contactTop, #loginTop").bind("click tap", function() {
		$("#scrollL").css("visibility","hidden");
		$("#scrollR").css("visibility","visible");
		$("#categories").animate({
			"left": "0"}, 0 /*millisecs*/);
		$('a.active').removeClass('outlineOn');
		$('#thumb1').addClass('outlineOn');
		$(".category").removeClass("outlineOn");
	});

//
	//	< Scroll Left & Scroll Right >
	$("#scrollR").hover(function() {
		$("#scrollL").css("visibility","visible");
		$("#categories").animate({
			"left": "-=4006px"
		}, 4000 /*millisecs*/);
	}, function() {
		$("#categories").stop();
		var objOffset = $('#categories').offset(); // moving object's top and left positions
		
		if ((objOffset.left <= 0) && (objOffset.left >= -801)) {
			$(".category").removeClass("outlineOn");
			$('#home').addClass('outlineOn');
			$("#orangebarTop .i").removeClass("outlineOn");
			$('#thumb1').addClass('outlineOn');
		}
		if ((objOffset.left < -801) && (objOffset.left >= -1602)) {
			$(".category").removeClass("outlineOn");
			$('#about').addClass('outlineOn');
			$("#orangebarTop .i").removeClass("outlineOn");
			$('#thumb2').addClass('outlineOn');
		}
		if ((objOffset.left < -1602) && (objOffset.left >= -2403)) {
			$(".category").removeClass("outlineOn");
			$('#gallery').addClass('outlineOn');
			$("#orangebarTop .i").removeClass("outlineOn");
			$('#thumb3').addClass('outlineOn');
		}
		if ((objOffset.left < -2403) && (objOffset.left >= -3204)) {
			$(".category").removeClass("outlineOn");
			$('#samples').addClass('outlineOn');
			$("#orangebarTop .i").removeClass("outlineOn");
			$('#thumb4').addClass('outlineOn');
		}
		if ((objOffset.left < -3204) && (objOffset.left >= -4005)) {
			$(".category").removeClass("outlineOn");
			$('#modules').addClass('outlineOn');
			$("#orangebarTop .i").removeClass("outlineOn");
			$('#thumb5').addClass('outlineOn');
		}
		if ((objOffset.left < -4005) && (objOffset.left >= -4806)) {
			$(".category").removeClass("outlineOn");
			$('#videos').addClass('outlineOn');
			$("#orangebarTop .i").removeClass("outlineOn");
			$('#thumb6').addClass('outlineOn');
			$('#categories').css('left','-4005px');
			$('#scrollR').css('visibility','hidden');
		}
		if ((objOffset.left <= -4005)) {
			$(".category").removeClass("outlineOn");
			$('#videos').addClass('outlineOn');
			$("#orangebarTop .i").removeClass("outlineOn");
			$('#thumb6').addClass('outlineOn');
			$("#categories").css("left","-4005px");
		}

		console.log(objOffset.left); // returns moving object's left position
		//alert(objOffset.left);
	});
	//
	$("#scrollL").hover(function() {
		$("#scrollR").css("visibility","visible");
		$("#categories").animate({
			"left": "+=4005px"
		}, 4000 /*millisecs*/);
	}, function() {
		$("#categories").stop();
		var objOffset = $('#categories').offset(); // moving object's top and left positions	
		
		if ((objOffset.left > 0) && (objOffset.left <= 4806)) {
			$(".category").removeClass("outlineOn");
			$('#home').addClass('outlineOn');
			$("#orangebarTop .i").removeClass("outlineOn");
			$('#thumb1').addClass('outlineOn');
			$("#categories").css('left', '0');
			$('#scrollL').css('visibility','hidden');
		}
		if ((objOffset.left <= 0) && (objOffset.left >= -801)) {
			$(".category").removeClass("outlineOn");
			$('#home').addClass('outlineOn');
			$("#orangebarTop .i").removeClass("outlineOn");
			$('#thumb1').addClass('outlineOn');
		}
		if ((objOffset.left < -801) && (objOffset.left >= -1602)) {
			$(".category").removeClass("outlineOn");
			$('#about').addClass('outlineOn');
			$("#orangebarTop .i").removeClass("outlineOn");
			$('#thumb2').addClass('outlineOn');
		}
		if ((objOffset.left < -1602) && (objOffset.left >= -2403)) {
			$(".category").removeClass("outlineOn");
			$('#gallery').addClass('outlineOn');
			$("#orangebarTop .i").removeClass("outlineOn");
			$('#thumb3').addClass('outlineOn');
		}
		if ((objOffset.left < -2403) && (objOffset.left >= -3204)) {
			$(".category").removeClass("outlineOn");
			$('#samples').addClass('outlineOn');
			$("#orangebarTop .i").removeClass("outlineOn");
			$('#thumb4').addClass('outlineOn');
		}
		if ((objOffset.left < -3204) && (objOffset.left >= -4005)) {
			$(".category").removeClass("outlineOn");
			$('#modules').addClass('outlineOn');
			$("#orangebarTop .i").removeClass("outlineOn");
			$('#thumb5').addClass('outlineOn');
		}
		if ((objOffset.left < -4005) && (objOffset.left >= -4806)) {
			$(".category").removeClass("outlineOn");
			$('#videos').addClass('outlineOn');
			$("#orangebarTop .i").removeClass("outlineOn");
			$('#thumb6').addClass('outlineOn');
			$('#categories').css('left','-4005px');
			$('#scrollR').css('visibility','hidden');
		}

		console.log(objOffset.left); // returns moving object's left position
		//alert(objOffset.left);
	});

} else {
	console.log('Out of range!');
	$("#categories").css("left","0")
	//alert("Out of range!");
}

	var opj = $(document);
	var posLeft = opj.scrollLeft();
	var posTop = opj.scrollLeft();
	console.log("(obj) " + "left: " + posLeft + ", top: " + posTop);

});
// End: jQuery Library functions

/***********************************************************************************************************/

/*
    var txt = "";
    txt += "Document width/height: " + $(document).width();
    txt += "x" + $(document).height() + "\n";

    txt += "Window width/height: " + $(window).width();
    txt += "x" + $(window).height();
    alert(txt);
*/

// Display scroll L&R from tab-mobile devices
/*
var isiPad = /ipad/i.test(navigator.userAgent.toLowerCase());
	if (isiPad) {alert('iPad');
	$("#scrollL, #scrollR, #farLeftTop, #farRightTop").css("display", "none")
}
*/

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

/* Keep as a reference
var opj1 = $("#widescreen");
	var opj2 = $("#about");
	var opj3 = $("#gallery");
	var opj4 = $("#samples");
	var opj5 = $("#modules");
	var opj6 = $("#videos");

	var pos1 = opj1.position();
	var pos2 = opj2.position();
	var pos3 = opj3.position();
	var pos4 = opj4.position();
	var pos5 = opj5.position();
	var pos6 = opj6.position();

	console.log("(obj1) " + "left: " + pos1.left + ", top: " + pos1.top );
	console.log("(obj2) " + "left: " + pos2.left + ", top: " + pos2.top );
	console.log("(obj3) " + "left: " + pos3.left + ", top: " + pos3.top );
	console.log("(obj4) " + "left: " + pos4.left + ", top: " + pos4.top );
	console.log("(obj5) " + "left: " + pos5.left + ", top: " + pos5.top );
	console.log("(obj6) " + "left: " + pos6.left + ", top: " + pos6.top );
*/

/*
	var opj1 = $("#caegories");
	var pos1 = opj1.position();
	console.log("(obj1) " + "left: " + pos1.left + ", top: " + pos1.top );
*/