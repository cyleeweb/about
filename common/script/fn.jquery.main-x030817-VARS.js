// JavaScript Document
// Begin: jQuery Library functions
//$.holdReady(false);
//$.holdReady(true);
$(document).ready(function(){
	"use strict";

    // WkDaily InitSlogan
    function fnWkSlog() {
    var d = new Date();
    var n = d.getUTCDay();
	    //alert(n);
		if(n===0){
			//default
	    	var wkSlog = "Code Web UI with a Passion for Marketing";
	    	return wkSlog;
	    	}
	
	    else if(n===1){
			$("body, body#main").css("background-image", "url(/images/bigback7.svg)");
	    	$(".category").css("background-image", "url(/images/v-blue.png)");
	    	$("nav.orangebar").css("background", "#008000");
	    	var wkSlog = "Code Web UI with a Passion for the Cloud";
	    	return wkSlog;
	    	}
	
	    else if(n===2){
	        $("body, body#main").css("background-image", "url(/images/bigback8.svg)");
	    	$(".category").css("background-image", "url(/images/bigback8.svg)");
	    	$("nav.orangebar").css("background", "#000");
	    	var wkSlog = "Close-Knit Collaboration Drives Ultimate Success";
	    	return wkSlog;
	    	}
	
	    else if(n===3){
	        //default
	    	var wkSlog = "The Greatest Asset is an Open Mind";
	    	return wkSlog;
	    	}
	
	    else if(n===4){
	        $("body, body#main").css("background-image", "url(/images/bigback4.svg)");
	    	$(".category").css("background-image", "url(/images/bigback4.svg)");
	    	$("nav.orangebar").css("background", "#000");
	    	var wkSlog = "FrontEnd Web/UI is the Key to Web Development";
	    	return wkSlog;  	
	    	}
	
	    else if(n===5){
	        $("body, body#main").css("background-image", "url(/images/bigback-trans-800.png)");
	    	$(".category").css("background-image", "url(/images/v-blue.png)");
	    	$("nav.orangebar").css("background", "#000");
	    	var wkSlog = "Collaboration and Teamwork Drive Great Success";
	    	return wkSlog;
	    	}
	
	    else if(n===6){
	        $("body, body#main").css("background-image", "url(/images/bigback8.svg)");
	    	$(".category").css("background-image", "url(/images/bigback8.svg)");
	    	$("nav.orangebar").css("background", "#000");
	    	var wkSlog = "Finding Simple Solutions to Complex Problems";
	    	return wkSlog;
	    	}
	    	
	    else {
	        //default
	    	var wkSlog = "Code Web UI with a Passion for Marketing";
	    	return wkSlog;
	    	};		
	}

// ++++++++++++++++++++++ Shared Core Global Functions ++++++++++++++++++++

	// Global Nav Scroll & Continuous Scroll Interactions
	// var scrollL = $("body").scrollLeft(); // document"s scrollbar"s left position (always zero if "hidden")
	// console.log(scrollL);
	// console.log(objOffset.left); // moving object"s left position

	var objOffset = $("#categories").offset(); // moving object"s top and left positions
	var vRangeL = -4806;
	var vRangeR = 50;
	var vMLeft = 50;

	var fnCoreGlobal = function(){
		window.scrollTo(0,0);
	}

	var fnNavHome = function(a, b, c, d, e){
		fnCoreGlobal();
		$(a).animate({marginLeft:0 + vMLeft}, 250, "linear");
		$(b).removeClass("outlineOn");
		$(c).addClass("outlineOn");
		$(d).removeClass("outlineOn");
		$(e).addClass("outlineOn");
		$("#scrollL").css("visibility", "hidden");
		$("#scrollR").css("visibility", "visible");
	};

	var fnNavAbout = function(a, b, c, d, e) {
		fnCoreGlobal();
		$(a).animate({marginLeft:-801 + vMLeft}, 250, "linear");
		$(b).removeClass("outlineOn");
		$(c).addClass("outlineOn");
		$(d).removeClass("outlineOn");
		$(e).addClass("outlineOn");
		$("#scrollL").css("visibility", "visible");
		$("#scrollR").css("visibility", "visible");
	}

	var fnNavGalleries = function(a, b, c, d, e) {
		fnCoreGlobal();
		$(a).animate({marginLeft:-1602 + vMLeft}, 250, "linear");
		$(b).removeClass("outlineOn");
		$(c).addClass("outlineOn");
		$(d).removeClass("outlineOn");
		$(e).addClass("outlineOn");
		$("#scrollL").css("visibility", "visible");
		$("#scrollR").css("visibility", "visible");
	}

	var fnNavSamples = function(a, b, c, d, e) {
		fnCoreGlobal();
		$(a).animate({marginLeft:-2403 + vMLeft}, 250, "linear");
		$(b).removeClass("outlineOn");
		$(c).addClass("outlineOn");
		$(d).removeClass("outlineOn");
		$(e).addClass("outlineOn");
		$("#scrollL").css("visibility", "visible");
		$("#scrollR").css("visibility", "visible");
	}

	var fnNavModules = function(a, b, c, d, e) {
		fnCoreGlobal();
		$(a).animate({marginLeft:-3204 + vMLeft}, 250, "linear");
		$(b).removeClass("outlineOn");
		$(c).addClass("outlineOn");
		$(d).removeClass("outlineOn");
		$(e).addClass("outlineOn");
		$("#scrollL").css("visibility", "visible");
		$("#scrollR").css("visibility", "visible");
	}

	var fnNavVideos = function(a, b, c, d, e) {
		fnCoreGlobal();
		$(a).animate({marginLeft:-4005 + vMLeft}, 250, "linear");
		$(b).removeClass("outlineOn");
		$(c).addClass("outlineOn");
		$(d).removeClass("outlineOn");
		$(e).addClass("outlineOn");
		$("#scrollR").css("visibility", "hidden");
		$("#scrollL").css("visibility", "visible");
		$(document).scrollLeft(0);
	}

	// Global General Functions
    var fnAlert = function(a){
    	alert(a);
    };

    var fnAddClass = function(a, b){
    	$(a).addClass(b);
    };

    var fnRemoveClass = function(a, b){
    	$(a).removeClass(b);
    };

    var fnFadeIn = function(a, b){
    	$(a).fadeIn(b);
    };

    var fnFadeOut = function(a, b){
    	$(a).fadeOut(b);
    };

    var fnAjax = function(content, where){
        $.ajax({
        url: content,
        success: function(result){
        $(where).html(result).fadeIn(1000);
        $("#ajax-display").css("display", "block");
        }
        })
    };

    // For smooth scrolling to the anchor id position:
	var fnScrollTop = function(x){
		var id = $(x);
		var offset = 393; // px offset up or down
		var target = $(id).offset().top + offset;
		$("html, body").animate({
			scrollTop: target
		}, 500); //millisec, the higher the slower
	};

	// Body#Main Callbacks Begins...
	$("body#main").fadeIn(500, function(){
	
		// InitSlogan starts...
		$("#init span:eq(0)").fadeIn(500);
		$("#init span:eq(1)").fadeIn(1000);
		$("#init span:eq(2)").fadeIn(1500);
		$("#init span:eq(3)").fadeIn(2000);
		$("#init span:eq(4)").fadeIn(2500);
		$("#init span:eq(5)").fadeIn(3000);
		$("#init span:eq(6)").fadeIn(3500);
		$("#init span:eq(7)").fadeIn(4000);
		$("#init span:eq(8)").fadeIn(4500);
		$("#init span:eq(9)").fadeIn(5000);
		$("#init span:eq(10)").fadeIn(5500);
		$("#init span:eq(11)").fadeIn(6000);
		$("#init span:eq(12)").fadeIn(6500);
		$("body").data("bylines", {
				init: fnWkSlog()
			});
		//
		$("#init #last").text($("body").data("bylines").init);
			
		// InitSlogan Callbacks Begins...
		$("#init").fadeIn(3500, function(){
		
			//fnAlert("InitSlogan is on...");
		
			$("nav.orangebar, header").fadeIn();
		
			// Store all byline data into "body" for on-demand access within DOM elemengts
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
				$("#tabtitle1").text((obj.abouttabs[0].tabTitle));
				$("#tabtitle2").text((obj.abouttabs[1].tabTitle));
				$("#tabtitle3").text((obj.abouttabs[2].tabTitle));
				$("#tabtitle4").text((obj.abouttabs[3].tabTitle));
		
				// Abouttabs - Content Span
				$("#tabspan1").text((obj.abouttabs[0].tabSpan));
				$("#tabspan2").text((obj.abouttabs[1].tabSpan));
				$("#tabspan3").text((obj.abouttabs[2].tabSpan));
				$("#tabspan4").text((obj.abouttabs[3].tabSpan));
			});
		    
			//
		
			// Event Bubbling Stop Propagation Handling
			/*
			$("#aboutnav, #aboutsubtab, #exhibitnav, #exhibit1, #exhibit1, #exhibit2, #exhibit3, #exhibit4, #exhibit5, #exhibit6, #exhibit7, #exhibit7, #moreproductions-link, .enterprise, #modulesNavset, #projector, #screen #prev, #screen #slider, #screen i, #slider i").click(function(event){
		        event.stopPropagation();
		        console.log("Event bubbling stopPropagation() triggered.");
		    });
			*/
			//
		
		    $("#categories").fadeIn(1000, function(){
		    	fnFadeIn(".sectitle, .byline, #collapse", 1000);
		    });
		
			//
		
			// Toggle Theme Control 1 (use sprite)
			$("#bkgd-black").bind("click tap", function(){
				//$("body, #littleGadget").css("background", "#000 url(/images/v-green.png) no-repeat center 0 fixed");
				$("body, #littleGadget").css("background", "#000");
			});
		
			$("#bkgd-burg").bind("click tap", function(){
				//$("body, #littleGadget").css("background", "#810202 url(/images/v-blue.png) no-repeat center 0 fixed");
				$("body, #littleGadget").css("background", "#810202");
			});
		
			$("#bkgd-turcoise").bind("click tap", function(){
				//$("body, #littleGadget").css("background", "#0c3b48 url(/images/v-green.png) no-repeat center 0 fixed");
				$("body, #littleGadget").css("background", "#0c3b48");
			});
		
			// Animate to left/right global #sitemaskL/#sitemaskR width from "50%" to "0" and change #leftbar/#rightbar display from "none" to "block". 
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
		
			// Animate to left/right gloal #sitemaskL/#sitemaskR width from "0" back to "50%" and change #leftbar/#rightbar display from "block" to "none".
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
		
			$(".category").hover(function() {
				fnAddClass(this, "outlineOn2");
				//$(this).find(".sectitle").addClass("outlineOn2");
			}, function () {
				fnRemoveClass(this, "outlineOn2");
				//$(this).find(".sectitle").removeClass("outlineOn2");
			});
		
			$("#thumb1, #home").hover(function() {
				//$("#thumb1, #home").addClass("outlineOn2");
				fnAddClass("#thumb1, #home", "outlineOn2");
			}, function () {
				fnRemoveClass("#thumb1, #home", "outlineOn2");
			});

			$("#thumb2, #about").hover(function() {
				fnAddClass("#thumb2, #about", "outlineOn2");
			}, function () {
				fnRemoveClass("#thumb2, #about", "outlineOn2");
			});

			$("#thumb3, #gallery").hover(function() {
				fnAddClass("#thumb3, #gallery", "outlineOn2");
			}, function () {
				fnRemoveClass("#thumb3, #gallery", "outlineOn2");
			});

			$("#thumb4, #samples").hover(function() {
				fnAddClass("#thumb4, #samples", "outlineOn2");
			}, function () {
				fnRemoveClass("#thumb4, #samples", "outlineOn2");
			});

			$("#thumb5, #modules").hover(function() {
				fnAddClass("#thumb5, #modules", "outlineOn2");
			}, function () {
				fnRemoveClass("#thumb5, #modules", "outlineOn2");
			});

			$("#thumb6, #videos").hover(function() {
				fnAddClass("#thumb6, #videos", "outlineOn2");
			}, function () {
				fnRemoveClass("#thumb6, #videos", "outlineOn2");
			});
		
		//
		
			// Activates the About subtabs
		
			$(function(){
				// setup ul.tabs to work as tabs for each div directly under div.panes
				$("ul.tabs").tabs("div.panes > div");
			});
			
			/*
			$("a#tabtitle1").bind("click", function(){
				$("#panes > #tabspan1").css("display", "block"); 
			});
			$("a#tabtitle2").bind("click", function(){
				$("#panes > #tabspan2").css("display", "block"); 
			});
			$("a#tabtitle3").bind("click", function(){
				$("#panes > #tabspan3").css("display", "block");
			});
			$("a#tabtitle4").bind("click", function(){
				$("#panes > #tabspan4").css("display", "block"); 
			});
		*/
		//
		
			// Toggle Theme Control 1 (use sprite)
			$("#themeControl-1").hover(function(){
				$(this).css("background-position", "0 0");
			}, function(){
				$(this).css("background-position", "0 -24px");
			}).toggle(function(){
				$(".category").css("background", "url('/images/bkgd-across-800x450.jpg') repeat-x");
				//fnAlert("Theme One on.");
				$("#themeControl-2, #themeControl-3").css("visibility", "hidden");
			}, function(){
				$("#categories, .category").css("background", "");
				$("#themeControl-2, #themeControl-3").css("visibility", "visible");
				//fnAlert("Theme One off.");
			});
		
			// Toggle Theme Control 2 (use sprite)
			$("#themeControl-2").hover(function(){
				$(this).css("background-position", "0 0");
			}, function(){
				$(this).css("background-position", "0 -48px");
			}).toggle(function(){
				$(".category").css("background", "url('/images/bkgd-across-800x450-sepia.jpg') repeat-x");
				//fnAlert("Theme Two on.");
				$("#themeControl-1, #themeControl-3").css("visibility", "hidden");
			}, function(){
				$(".category").css("background", "");
				$("#themeControl-1, #themeControl-3").css("visibility", "visible");
				//fnAlert("Theme Two off.");
			});
		
			// Toggle Theme Control 3 (use sprite)
			$("#themeControl-3").hover(function(){
				$(this).css("background-position", "0 0");
			}, function(){
				$(this).css("background-position", "0 -72px");
			}).toggle(function(){
				$(".category").css("background", "url('/images/trees-800x450.jpg') repeat-x");
				//fnAlert("Theme Three on.");
				$("#themeControl-1, #themeControl-2").css("visibility", "hidden");
			}, function(){
				$(".category").css("background", "");
				$("#themeControl-1, #themeControl-2").css("visibility", "visible");
				//fnAlert("Theme Three off.");
			});
		
		//
		
			// Toggle Home DimmerSwitch (use sprite)
			$("#dimmerSwitch").hover(function(){
				$(this).css("background-position", "0 0");
			}, function(){
				$(this).css("background-position", "0 -96px");
			}).toggle(function(){
				$("#themeDimmer").css("display", "block");
				fnAlert("Theme dimmer on.");
			}, function(){
				$("#themeDimmer").css("display", "none");
				fnAlert("Theme dimmer off.");
			});
		
		//
		
			// For Home Headline 
			$.timer(20000, function (timer){
				timer.stop();
				$("#homeHeadline").fadeOut(1000);
			});
		
		//

			// For Home Slides Cycle
			$(".animSlideL, .animSlideR").fadeIn(1500);
			$(".animSlideL").animate({left:130},500).animate({top:150},750);
		    $(".animSlideL").animate({left:130},500).animate({top:100},500);
			$(".animSlideR").animate({right:130},500).animate({top:50},750);
		    $(".animSlideR").animate({right:130},500).animate({top:100},500);
		
			$(".animSlideL img:gt(0)").css("display", "none");
			setInterval(function(){
				$(".animSlideL img:first-child").fadeOut(1500).next("img").fadeIn(3000).end().appendTo(".animSlideL");
			}, 3000);
		
			$(".animSlideR img:gt(0)").css("display", "none");
			setInterval(function(){
				$(".animSlideR img:first-child").fadeOut(1500).next("img").fadeIn(3000).end().appendTo(".animSlideR");
			}, 3000);
		
		//
		
			// Toggle Ajax-Display Samples Row
			$("#collapse").bind("click tap", function(){
		        fnAjax("/samples/aj-samples-row.php", "#ajax-collapse");
		        fnFadeOut(this, 500);
			});
		
			$("#ajax-collapse").bind("click tap", function(){
		        $(this).fadeOut(500, function(){window.scrollTo(0,0);});
		        fnFadeIn("#collapse", 500);
		        //$("#collapse").fadeIn(500);     
		        $("#ajax-display").css("display","none");
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
		
			// BigHallGalleryTab for SlideWindow
			$("#thumb3").bind("click tap", function(){
				fnFadeIn("#bigHallGalleryTab", 500);
				$("#bigHallGalleryTab").animate({top:104}, 500);
			});

			$("#bigHallTop, #bigHallGalleryEnter").bind("click tap", function(){
				$("#categories").slideUp(500);
				$("body").css("width", "100%");
				$("#slidewin").css("display", "block");
				$("#bigHallGalleryTab").css("display", "block").animate({top:104}, 100);
		        fnAjax("/gallery/aj-slidewin-exhibit1.php", "#centerStage");
		        fnFadeIn("#bigHallCollectionTab", 250);
				$("#scrollL, #scrollR").css("visibility", "hidden");
			});
		    
			$("#bigHallGalleryExit").bind("click tap", function(){
				$("#categories").slideDown(500); // milliseconds
				$("#slidewin").css("display", "none");
				$("#bigHallGalleryTab").css("display", "none").css("top", "10px");
				$("#bigHallCollectionTab, #slidewin, #collectionWin").css("display", "none");
			});
		
			$("#bigHallGalleryExit").bind("click tap", function(){
				$("#scrollL, #scrollR").css("visibility", "visible");
			});
		
			$("#bigHallCollectionShow").bind("click tap", function(){
				$("#slidewin").css("display", "none");
				fnAjax("/gallery/aj-exhibits-union.php", "#fullCollection");
				fnFadeIn("#collectionWin", 250);
			});
		
			$("#bigHallCollectionExit").bind("click tap", function(){
				$("#collectionWin").css("display", "none");
				fnFadeIn("#slidewin", 250);
				$("html, body").animate({ scrollTop:0}, "fast");
			});
		
		//
		
			// ThumbNails in BigHall SlideWin Exhibits 
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
		
			// Exhibit-Clicks for Various Galleries
			$("#exhibit1-click, #exhibit1").hover(function(){
				$("#exhibit1").css("outline", "4px groove #00ff00").css("z-index", "99");
			}, function(){
				$("#exhibit1").css("outline", "0").css("z-index", "0");
			});

			$("#exhibit2-click, #exhibit2").hover(function(){
				$("#exhibit2").css("outline", "4px groove #00ff00").css("z-index", "99");
			}, function(){
				$("#exhibit2").css("outline", "0").css("z-index", "1");
			});

			$("#exhibit3-click, #exhibit3").hover(function(){
				$("#exhibit3").css("outline", "4px groove #00ff00").css("z-index", "99");
			}, function(){
				$("#exhibit3").css("outline", "0").css("z-index", "2");
			});

			$("#exhibit4-click, #exhibit4").hover(function(){
				$("#exhibit4").css("outline", "4px groove #00ff00").css("z-index", "99");
			}, function(){
				$("#exhibit4").css("outline", "0").css("z-index", "3");
			});

			$("#exhibit5-click, #exhibit5").hover(function(){
				$("#exhibit5").css("outline", "4px groove #00ff00").css("z-index", "99");
			}, function(){
				$("#exhibit5").css("outline", "0").css("z-index", "3");
			});

			$("#exhibit6-click, #exhibit6").hover(function(){
				$("#exhibit6").css("outline", "4px groove #00ff00").css("z-index", "99");
			}, function(){
				$("#exhibit6").css("outline", "0").css("z-index", "2");
			});

			$("#exhibit7-click, #exhibit7").hover(function(){
				$("#exhibit7").css("outline", "4px groove #00ff00").css("z-index", "99");
			}, function(){
				$("#exhibit7").css("outline", "0").css("z-index", "1");
			});

			$("#exhibit8-click, #exhibit8").hover(function(){
				$("#exhibit8").css("outline", "4px groove #00ff00").css("z-index", "99");
			}, function(){
				$("#exhibit8").css("outline", "0").css("z-index", "0");
			});

		//

			// Smooth ScrollTop
			$("#collapse, #homeAjax, #resume-click, #references-click, #exhibit1-click, #exhibit1, #exhibit2-click, #exhibit2, #exhibit3-click, #exhibit3, #exhibit4-click, #exhibit4, #exhibit5-click, #exhibit5, #exhibit6-click, #exhibit6, #exhibit7-click, #exhibit7, #exhibit8-click, #exhibit8, #moreproductions-click, #flickr-click, #mustache-click, #canvas-click, #phpsuper-click").bind("click tap", function (event) {
				fnScrollTop("#categories");
			});

			// Ajax Load function -- For clickable nav links in About 
			$("#resume-click").bind("click tap", function(){
		        fnAjax("/about/aj-resume.php", "#ajax-about");
			});
		
			$("#references-click").bind("click tap", function(){      
		        fnAjax("/about/aj-references.php", "#ajax-about");
			});
		
			// Ajax .ajax function -- For clickable nav links and images in Gallery 
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
				fnFadeIn("#overlay-row", 1500);
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
		    
			$("#contact #close").bind("click tap", function(){
				fnFadeOut("#contact", 500);
				fnRemoveClass("#contactTop", "active2");
			});
		
			// LogIn Form
			$("#loginTop").bind("click tap", function(){
				$("#login").toggle(500);
			});
		    
			$("#login #close").bind("click tap", function(){
				fnFadeOut("#login", 500);
				fnRemoveClass("#loginTop", "active2");
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
				var message = "Sorry, " + this.id + " is not the Daily Double cell. Please try again.";
				fnAlert(message);
			});
		
			// Daily Double Cell
			$("#r5c2").bind("click tap", function(){
				var message = "Congratualations! " + this.id + " is the Daily Double cell. Click R to refresh the page or X to close this window.";
				fnAlert(message);
				$("#divGridTitle, #desc").css("background-color", "#b42800");
		        fnAjax("/protox/aj-dailydoublerwd.html", "#ajax-collapse");
			});
		
			//
		
			$("#modulesNavset-animation").bind("click tap", function(){
				$("#modulesHome").fadeOut();
				$("#modulesAnimation").fadeIn();
				$("#animationScreen").animate({height: 270}, "slow").animate({width: 756}, "slow");
			});
		
			$("#modulesNavset-modules").bind("click tap", function(){
				fnFadeOut("#modulesAnimation", 500);
				$("#modulesHome").fadeIn().css("display", "block");
			});
		
			$("#stopAnimation").bind("click tap", function(){
				fnFadeOut("div#cssAnimate", 500);
				$.timer(750, function (timer){
					timer.stop();
				});
		
				$("#refreshAnimation").bind("click tap", function(){
					fnFadeIn("div#cssAnimate", 500);
					fnFadeIn("#animationScreenImg", 500);
				});
			});
			
			/* REST Applications
			$("#restApps").bind("change", function(){
				var n = $(this).val();
				if(n === "0") { // restApps
					$("#appsConsole").css("display","none");
				};
				if(n === "1") { // Comments
					fnAjax("/mysql/view-comments.php", "#appsConsole");
				};

				if(n === "2") { // Guestbook
					fnAjax("/mysql/console-guestbook.php", "#appsConsole");
				};
			});
			*/
		
			// JS Core Fundamentals
			$("#javascript").bind("change", function(){
				var n = $(this).val();
				if(n === "0") { // JS Core
					$("#ajax-left").fadeOut(500, function(){
						window.scrollTo(0,0);
					});
				};
				if(n === "1") {
					fnAjax("/protox/js/closures/closure-101.php", "#ajax-left");
				};
				if(n === "2") {
					fnAjax("/protox/js/closures/closure-102.php", "#ajax-left");
				};
				if(n === "3") {
					fnAjax("/protox/js/closures/closure-103.php", "#ajax-left");
				};
				if(n === "4") {
					fnAjax("/protox/js/closures/closure-factory.php", "#ajax-left");
				};
				if(n === "5") {
					fnAjax("/protox/js/cab/call-apply-bind.php", "#ajax-left");
				};
				if(n === "6") {
					fnAjax("/protox/js/callback/callbacks.php", "#ajax-left");
				};
				if(n === "7") {
					fnAjax("/protox/js/funcprogram/functional-programming.php", "#ajax-left");
				};
				if(n === "8") {
					fnAjax("/protox/js/fncons-proto/fncons-proto.php", "#ajax-left");
				};
				if(n === "9") {
					fnAjax("/protox/js/obj-create/obj-create.php", "#ajax-left");
				};
				if(n === "10") {
					fnAjax("/protox/js/json-ext/jq.php", "#ajax-left");
				};
				if(n === "11") {
					fnAjax("/protox/js/json-ext/js.php", "#ajax-left");
				};
			});
		
			// SPA HashTag Routing Power
			$("#spahashpower").bind("change", function(){
				var gNone = "#orangebarTop nav, #gadgets > select:not(#spahashpower), #gadgets > div, .category";
				var n = $(this).val();
				var strURLi = window.location.href.split("#"); // split into array at #
				var strPath = strURLi[0]; // take the 1st value of the array
		
				switch(n) {
					case "#/exhibit/1":
						location.replace(strPath + "#/exhibit/1");
						fnAddClass(gNone, "g-none");
						fnAjax("/gallery/aj-hash-exhibit1.php", "#hashpower");
						break;
					case "#/exhibit/2":
						location.replace(strPath + "#/exhibit/2");
						fnAddClass(gNone, "g-none");
						fnAjax("/gallery/aj-hash-exhibit2.php", "#hashpower");
						break;
					case "#/exhibit/3":
						location.replace(strPath + "#/exhibit/3");
						fnAddClass(gNone, "g-none");
						fnAjax("/gallery/aj-hash-exhibit3.php", "#hashpower");
					   	break;
					case "#/exhibit/4":
						location.replace(strPath + "#/exhibit/4");
						fnAddClass(gNone, "g-none");
						fnAjax("/gallery/aj-hash-exhibit4.php", "#hashpower");
					   	break;
					case "#/exhibit/5":
						location.replace(strPath + "#/exhibit/5");
						fnAddClass(gNone, "g-none");
						fnAjax("/gallery/aj-hash-exhibit5.php", "#hashpower");
					   	break;
					case "#/exhibit/6":
						location.replace(strPath + "#/exhibit/6");
						fnAddClass(gNone, "g-none");
						fnAjax("/gallery/aj-hash-exhibit6.php", "#hashpower");
					   	break;
					case "#/exhibit/7":
						location.replace(strPath + "#/exhibit/7");
						fnAddClass(gNone, "g-none");
						fnAjax("/gallery/aj-hash-exhibit7.php", "#hashpower");
					   	break;
					case "#/exhibit/8":
						location.replace(strPath + "#/exhibit/8");
						fnAddClass(gNone, "g-none");
						fnAjax("/gallery/aj-hash-exhibit8.php", "#hashpower");
						break;
					case "#/exhibit/all":
						location.replace(strPath + "#/exhibit/all");
						fnAddClass(gNone, "g-none");
						fnAjax("/gallery/aj-hash-exhibits-union.php", "#hashpower");	
						break;
				}
			});
		
			// Query String Entries
			$("#entryqueries").bind("change", function(){
				var n = $(this).val();
				var strURLi = window.location.href.split("?"); // split into array at ?
				var strSplit = strURLi[0]; // take the 1st value of the array
				var strHref = strSplit.split("#"); // split into array at #
				var strPath = strHref[0]; // take the 1st value of the array
		
				switch(n) {
					case "entry=home":
						location.replace(strPath + "?entry=home");
						break;
					case "entry=about":
						location.replace(strPath + "?entry=about");
						break;
					case "entry=galleries":
						location.replace(strPath + "?entry=galleries");
					   	break;
					case "entry=samples":
						location.replace(strPath + "?entry=samples");
					   	break;
					case "entry=modules":
						location.replace(strPath + "?entry=modules");
					   	break;
					case "entry=videos":
						location.replace(strPath + "?entry=videos");
					   	break;
				}
			});
		
			// DOM Traversing
			$("#domtraversing").bind("change", function(){
				var n = $(this).val();
				//
				var dom1 = document.domain;
				var dom2 = document.characterSet;
				var dom3 = document.title;		
				var dom4 = document.body.childNodes.length;
				var dom5 = document.body.attributes.length;
				var dom6 = $(document).height();
				var dom7 = $(document).width();
				var dom8 = document.body.clientTop;
				var dom9 = document.body.clientLeft;
				var dom10 = document.getElementsByTagName("div").length;
				var dom11 = $("#home").html();
				var dom12 = document.getElementsByTagName("meta");
				//
				switch(n) {
					case "1":
						alert ("The hosting domain of this document: " + dom1);
						break;
					case "2":
						alert ("The doctype of this document: " + dom2);
						break;
					case "3":
						alert ("The title of this document: " + dom3);
						break;	
					case "4":
						alert ("The ChildNode length in <body> of this document: " + dom4);
					   	break;
					case "5":
						alert ("The Attribute length of <body> of this document: " + dom5);
					   	break;
					case "6":
						alert ("The Height of this document: " + dom6 + "px");
					   	break;
					case "7":
						alert ("The Width of this document: "+dom7 + "px");
					   	break;
					case "8":
						alert ("The starting Top point of <body> of this document: " + dom8);
					   	break;
					case "9":
						alert ("The starting Left point of <body> of this document: " + dom9);
						break;
					case "10":
						alert ("The <div> length in <body> of this document: " + dom10);
						break;
					case "11":
						alert ("The InnerHTML content of the div id=\"home\":\n" + dom11);
						break;
					case "12":
						for (var i = 0; i < dom12.length; ++i) {
						fnAlert("The meta information (content) of this document:"+ (dom12[i].getAttribute("content")));
						}
						break;
				}
				$(this).val("0");
			});
		
			//
			if ((objOffset.left >= vRangeL) && (objOffset.left <= vRangeR)) { // range = @slide-width * number of slides && one slide width + left side panel width
		
			$("#thumb1, #home").bind("click tap", function(){
				fnNavHome("#categories", "#orangebarTop .i", "#thumb1", ".category", "#home");
			});
		    
			$("#thumb2, #about").bind("click tap", function(){
				fnNavAbout("#categories", "#orangebarTop .i", "#thumb2", ".category", "#about");
			});
		    
			$("#thumb3, #gallery").bind("click tap", function(){
				fnNavGalleries("#categories", "#orangebarTop .i", "#thumb3", ".category", "#gallery");
			});
		    
			$("#thumb4, #samples").bind("click tap", function(){
				fnNavSamples("#categories", "#orangebarTop .i", "#thumb4", ".category", "#samples");
			});
		    
			$("#thumb5, #modules").bind("click tap", function(){
				fnNavModules("#categories", "#orangebarTop .i", "#thumb5", ".category", "#modules");
			});
		    
			$("#thumb6, #videos").bind("click tap", function(){
				fnNavVideos("#categories", "#orangebarTop .i", "#thumb6", ".category", "#videos");
			});
			
			// ContactTop and LogIn Top links 
			$("#contactTop, #loginTop").bind("click tap", function() {
				fnCoreGlobal();
				fnRemoveClass("a.active", "outlineOn");
				fnAddClass(this, "active2");
				fnRemoveClass(".category", "outlineOn");
				fnAddClass("#thumb1", "outlineOn");
				$("#categories").animate({
					"marginLeft": "50"}, 0 /*millisecs*/);
				$("#scrollL").css("visibility","hidden");
				$("#scrollR").css("visibility","visible");
			});
		
		//
			//	< Scroll Left & Scroll Right >
			$("#scrollR").hover(function() {
				$("#scrollL").css("visibility","visible");
				$("#categories").animate({
					"marginLeft": "-=3955" + "px"
				}, 4000 /*millisecs*/);
			}, function() {
				$("#categories").stop();
				var objOffset = $("#categories").offset(); // moving object"s top and left positions
		
				fnRemoveClass(".category, #orangebarTop .i", "outlineOn");
				
				if ((objOffset.left <= 0 + vMLeft) && (objOffset.left >= -801 + vMLeft)) {
					fnAddClass("#home, #thumb1", "outlineOn");
				}
				if ((objOffset.left < -801 + vMLeft) && (objOffset.left >= -1602 + vMLeft)) {
					fnAddClass("#about, #thumb2", "outlineOn");
				}
				if ((objOffset.left < -1602 + vMLeft) && (objOffset.left >= -2403 + vMLeft)) {
					fnAddClass("#gallery, #thumb3", "outlineOn");
				}
				if ((objOffset.left < -2403 + vMLeft) && (objOffset.left >= -3204 + vMLeft)) {
					fnAddClass("#samples, #thumb4", "outlineOn");
				}
				if ((objOffset.left < -3204 + vMLeft) && (objOffset.left >= -4005 + vMLeft)) {
					fnAddClass("#modules, #thumb5", "outlineOn");
				}
				if ((objOffset.left < -4005 + vMLeft) && (objOffset.left >= -4806 + vMLeft)) {
					fnAddClass("#videos, #thumb6", "outlineOn");
					$("#categories").css("margin-left","-3955" + "px");
					$("#scrollR").css("visibility","hidden");
				}
				if ((objOffset.left <= -4005 + vMLeft)) {
					fnAddClass("#videos, #thumb6", "outlineOn");
					$("#categories").css("margin-left","-3955" + "px");
				}
		
				console.log(objOffset.left); // returns moving object"s left position
				//fnAlert(objOffset.left);
			});
			//
			$("#scrollL").hover(function() {
				$("#scrollR").css("visibility","visible");
				$("#categories").animate({
					"marginLeft": "+=4005px"
				}, 4000 /*millisecs*/);
			}, function() {
				$("#categories").stop();
				var objOffset = $("#categories").offset(); // moving object"s top and left positions
				fnRemoveClass(".category", "outlineOn");
				fnRemoveClass("#orangebarTop .i", "outlineOn");
		
				if (objOffset.left > 0 + vMLeft) {
					fnAddClass("#home, #thumb1", "outlineOn");
					$("#categories").css("margin-left", "50" + "px");
					$("#scrollL").css("visibility","hidden");
				}

				if ((objOffset.left <= 0 + vMLeft) && (objOffset.left >= -801 + vMLeft)) {
					fnAddClass("#home, #thumb1", "outlineOn");
				}

				if ((objOffset.left < -801 + vMLeft) && (objOffset.left >= -1602 + vMLeft)) {
					fnAddClass("#about, #thumb2", "outlineOn");
				}

				if ((objOffset.left < -1602 + vMLeft) && (objOffset.left >= -2403 + vMLeft)) {
					fnAddClass("#gallery, #thumb3", "outlineOn");
				}

				if ((objOffset.left < -2403 + vMLeft) && (objOffset.left >= -3204 + vMLeft)) {
					fnAddClass("#samples, #thumb4", "outlineOn");
				}

				if ((objOffset.left < -3204 + vMLeft) && (objOffset.left >= -4005 + vMLeft)) {
					fnAddClass("#modules, #thumb5", "outlineOn");
				}

				if ((objOffset.left < -4005 + vMLeft)) {
					fnAddClass("#videos, #thumb6", "outlineOn");
					$("#categories").css("margin-left","-3955" + "px");
					$("#scrollR").css("visibility","hidden");
				}
		
				console.log(objOffset.left); // returns moving object"s left position
				//fnAlert(objOffset.left);
			});
		
			} else {
				console.log("Out of range!");
				$("#categories").css("margin-left",vMLeft + "px")
				//fnAlert("Out of range!");
			}
		
			var obj = $(document);
			var posLeft = obj.scrollLeft();
			var posTop = obj.scrollTop();
			console.log("(objDoc) " + "left: " + posLeft + ", top: " + posTop);
		
			// Window.Scroll() for scroll bar interactions (This section is only for Tablet not for Desktop)
			$(window).scroll(function() {
				fnRemoveClass(".category, #orangebarTop .i", "outlineOn");
			//
			    if (($(document).scrollLeft() > 0) && ($(document).scrollLeft())<= 800) {  	
			    	fnAddClass("#home, #thumb1", "outlineOn");
			    }
	
			    if (($(document).scrollLeft() > 800 && ($(document).scrollLeft() <= 1602))) {
			    	fnAddClass("#about, #thumb2", "outlineOn");
			    }
	
			    if (($(document).scrollLeft() > 1602) && ($(document).scrollLeft() <= 2403)) {
			    	fnAddClass("#gallery, #thumb3", "outlineOn");
			    }
	
			    if (($(document).scrollLeft() > 2403) && ($(document).scrollLeft() <= 3204)) {
			    	fnAddClass("#samples, #thumb4", "outlineOn");
			    }
	
			    if (($(document).scrollLeft() > 3204) && ($(document).scrollLeft() <= 4005)) {
			    	fnAddClass("#modules, #thumb5", "outlineOn");
			    }
	
			    if (($(document).scrollLeft() > 4005) && ($(document).scrollLeft() <= 4806)) {
			    	fnAddClass("#videos, #thumb6", "outlineOn");
					$("#categories").css("margin-left","-4005" + "px");
					$("#scrollR").css("visibility","hidden");
			    }
	
			    if ($(document).scrollLeft() > 4806) {
			    	fnAddClass("#videos, #thumb6", "outlineOn");
					$("#categories").css("margin-left","-4005" + "px");
			    }
			});
			
			// Location Entry Href Navigation
			var entryHref = window.location.href;
			var strSplit = entryHref.split("?"); // split into array at #
			var strPath = strSplit[0]; // take the 1st value of the array
			var strHash = strSplit[1]; // take the 1st value of the array
		
		//
			if (strHash === "entry=home") {
				fnNavHome("#categories", "#orangebarTop .i", "#thumb1", ".category", "#home");
			}
		
			if (strHash === "entry=about") {
				fnNavAbout("#categories", "#orangebarTop .i", "#thumb2", ".category", "#about");
			}
		
			if (strHash === "entry=galleries") {
				fnNavGalleries("#categories", "#orangebarTop .i", "#thumb3", ".category", "#gallery");
			}
		
			if (strHash === "entry=samples") {
				fnNavSamples("#categories", "#orangebarTop .i", "#thumb4", ".category", "#samples");
			}
		
			if (strHash === "entry=modules") {
				fnNavModules("#categories", "#orangebarTop .i", "#thumb5", ".category", "#modules");
			}
		
			if (strHash === "entry=videos") {
				fnNavVideos("#categories", "#orangebarTop .i", "#thumb6", ".category", "#videos");
			}
		});
		// #InitSlogan Callbacks Ends...
		
		// InitSlogan fades Out...
		$("#init").fadeOut(2000);
	});
	// Body#Main Callbacks Ends...

});
// End: jQuery Library functions

/***********************************************************************************************************/

/*
    var txt = "";
    txt += "Document width/height: " + $(document).width();
    txt += "x" + $(document).height() + "\n";

    txt += "Window width/height: " + $(window).width();
    txt += "x" + $(window).height();
    fnAlert(txt);
*/

// Display scroll L&R from tab-mobile devices
/*
var isiPad = /ipad/i.test(navigator.userAgent.toLowerCase());
	if (isiPad) {fnAlert("iPad");
	$("#scrollL, #scrollR, #farLeftTop, #farRightTop").css("display", "none")
}
*/

/*
https://learn.jquery.com/using-jquery-core/faq/how-do-i-get-the-text-value-of-a-selected-option/

Select elements typically have two values that you want to access. First there"s the value to be sent to the server, which is easy:
	
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