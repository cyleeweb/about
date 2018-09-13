// JavaScript Document

// Begin: jQuery Framework functions
//$.holdReady(false);
//$.holdReady(true);
$(document).ready(function(){
// Leave above line untouched
   	$("#enter").fadeIn(3000).css("display", "block").animate({top:50},1250).animate({top:500},1000).animate({top:150},1250).animate({top:405},1000).stop;
	$("#enter").click(function(){
	$("#enter").animate({top:50},1250).animate({top:500},1000).animate({top:150},1250).animate({top:405},1000).stop;
	});

// Change #maskpicL & #maskpicR opacity from '0' to '1.00'. 
	$("#enter").hover(function(){
	$("#maskpicL, #maskpicR").css("-khtml-opacity", "1.00").css("-moz-opacity", "1.00").css("opacity", "1.00").css("filter", "alpha(opacity=100)");},function(){
	$("#maskpicL, #maskpicR").css("-khtml-opacity", "0").css("-moz-opacity", "0").css("opacity", "0").css("filter", "alpha(opacity=0)");
	});	
	
// Change #maskpicL & #maskpicR opacity from '0' to '1'. 
	$("#maskpicL, #maskpicR").hover(function(){
	$(this).css("-khtml-opacity", "1.00").css("-moz-opacity", "1.00").css("opacity", "1.00").css("filter", "alpha(opacity=100)");},function(){
	$(this).css("border", "none").css("-khtml-opacity", "0").css("-moz-opacity", "0").css("opacity", "0").css("filter", "alpha(opacity=0)");	
	});				

// Animate to left/right global #sitemaskL/#sitemaskR width from '50%' to '0' and change #leftbar/#rightbar display from 'none' to 'block'. 
	$("#maskpicL, #maskpicR").click(function(){
	$("#sitemaskL, #sitemaskR").animate({width:0}, "slow");
	$("#entryrowL, #entryrowR").css("display", "none");
	$("#leftbar,#rightbar").css("display", "block");
	$("#enter").fadeOut("slow");
	$("body").animate({backgroundPosition:"center -145px"}, 3000).stop;
	});

// Animate to left/right gloal #sitemaskL/#sitemaskR width from '0' back to '50%' and change #leftbar/#rightbar display from 'block' to 'none'.
	$("#leftbar, #rightbar").click(function(){
	$("#sitemaskL, #sitemaskR").animate({width:"50%"}, 1000);
	$("#entryrowL, #entryrowR").css("display", "block");
	$("#leftbar, #rightbar").css("display", "none");
	$("#enter").fadeIn("slow").css("display", "block");
	$("body").animate({backgroundPosition:"center -145px"}, 1000).stop;
	});	
	
// Initializes scrollable and returns the programming API
	var api = $("#scroll").scrollable({
	items: '#categories', size: 1, clickable: false
	// use the navigator plugin
	}).navigator({api: true});

// Activates the About subtabs
	// perform JavaScript after the document is scriptable.
	$(function() {
	// setup ul.tabs to work as tabs for each div directly under div.panes
	$("ul.tabs").tabs("div.panes > div");
	});

// Toggle Theme Control 1 (use sprite)
	$("#themeControl-1").hover(function(){
    $(this).css("background-position","0 0");},function(){
	$(this).css("background-position","0 -24px");
	}).toggle(function(){
	$(".contentrow, .category").css("background", "url('/images/bkgd-across-800x450.jpg') repeat-x");
	alert ('Theme One on.');
	$("#themeControl-2, #themeControl-3").css("visibility","hidden");},function(){
	$(".contentrow, .category").css("background", "");
	$("#themeControl-2, #themeControl-3").css("visibility","visible");
	alert ('Theme One off.');
	});
	
// Toggle Theme Control 2 (use sprite)
	$("#themeControl-2").hover(function(){
    $(this).css("background-position","0 0");},function(){
	$(this).css("background-position","0 -48px");
	}).toggle(function(){
	$(".contentrow, .category").css("background", "url('/images/bkgd-across-800x450-sepia.jpg') repeat-x");
	alert ('Theme Two on.');
	$("#themeControl-1, #themeControl-3").css("visibility","hidden");},function(){
	$(".contentrow, .category").css("background", "");
	$("#themeControl-1, #themeControl-3").css("visibility","visible");
	alert ('Theme Two off.');
	});	
	
// Toggle Theme Control 3 (use sprite)
	$("#themeControl-3").hover(function(){
    $(this).css("background-position","0 0");},function(){
	$(this).css("background-position","0 -72px");
	}).toggle(function(){
	$(".contentrow, .category").css("background", "url('/images/trees-800x450.jpg') repeat-x");	
	alert ('Theme Three on.');
	$("#themeControl-1, #themeControl-2").css("visibility","hidden");},function(){
	$(".contentrow, .category").css("background", "");
	$("#themeControl-1, #themeControl-2").css("visibility","visible");
	alert ('Theme Three off.');
	});		

// Toggle Home DimmerSwitch (use sprite)
	$("#dimmerSwitch").hover(function(){
    $(this).css("background-position","0 0");},function(){
	$(this).css("background-position","0 -96px");
	}).toggle(function(){
	$("#themeDimmer").css("display", "block");
	alert ('Theme dimmer on.');}, function(){	
	$("#themeDimmer").css("display", "none");
	alert ('Theme dimmer off.');
	});

// For Home Headline 
	$.timer(5000, function (timer){timer.stop();
	$("#homeHeadline").fadeOut();
	});

// For Home Slide Cycle
	$('.animSlideL, .animSlideR').fadeIn(1500);
	$('.animSlideL img:gt(0)').css("display","none");
	setInterval(function(){
	$('.animSlideL :first-child').fadeOut(1500).next('img').fadeIn(3000).end().appendTo('.animSlideL');}, 3000);
	$('.animSlideR img:gt(0)').css("display","none");
	setInterval(function(){
	$('.animSlideR :first-child').fadeOut(1500).next('img').fadeIn(3000).end().appendTo('.animSlideR');}, 3000);
	
// Toggle Slider - MyInfo and ModulesNav
	$("#me-click").bind("click",function(){
	$("#contactinfo").slideToggle("fast");
	});
	//
	$("#modulesnav-click").bind("click",function(){
	$("#modulesnav").slideToggle("fast");
	});
	
// Change CSS proerties - bigHall Gallery for SlideWindow
	$('#thumb3').click(function() {
	$("#bigHallGallery").fadeIn(1000);
	$('#bigHallGallery').animate({top:590}, 1000).stop;
    });
	//
	$('#bigHallTop, #bigHallGalleryEnter').click(function() {
    $(".contentrow, .footer, .header").slideUp(500);
	$("#slidewin-nav").css("display","block");
	$("#slidewin").css("display","block");
	$("#bigHallGallery").css("display","block").animate({top:590}, 1000).stop;
	$("#slidewin").load('/gallery/aj-slidewin-exhibit1.php');
	$("#bigHallArt").fadeIn(1000);
    });
    $('#bigHallGalleryExit, #thumb1, #thumb2, #thumb4, #thumb5, #exhibit1-click, #exhibit1, #exhibit2-click, #exhibit2, #exhibit3-click, #exhibit3, #exhibit4-click, #exhibit4, #exhibit5-click, #exhibit5, #exhibit6-click, #exhibit6').click(function() {
    $(".contentrow, .footer, .header").slideDown(500);
	$("#slidewin-nav").css("display","none");
	$("#slidewin").css("display","none");
	$("#bigHallGallery").css("display","none").css("top","10px");
	$("#bigHallArt").css("display","none");
    });
	$('#bigHallArtShow').click(function(){
	$('#slidewin-nav, #slidewin').fadeOut(500);
	});
	$('#bigHallArtResume').click(function(){
	$('#slidewin-nav, #slidewin').fadeIn(500);
	});
//
	$("#swthumb-exhibit1").click(function(){
	$("#slidewin").load('/gallery/aj-slidewin-exhibit1.php');
  	});
	$("#swthumb-exhibit2").click(function(){
	$("#slidewin").load('/gallery/aj-slidewin-exhibit2.php');
  	});
	$("#swthumb-exhibit3").click(function(){
	$("#slidewin").load('/gallery/aj-slidewin-exhibit3.php');
  	});
	$("#swthumb-exhibit4").click(function(){
	$("#slidewin").load('/gallery/aj-slidewin-exhibit4.php');
  	});
	$("#swthumb-exhibit5").click(function(){
	$("#slidewin").load('/gallery/aj-slidewin-exhibit5.php');
  	});
	$("#swthumb-exhibit6").click(function(){
	$("#slidewin").load('/gallery/aj-slidewin-exhibit6.php');
  	});

// Change CSS properties - Gallery
	$("#exhibit1-click, #exhibit1").hover(function(){
    $("#exhibit1").css("outline","3px solid white");}, function(){
	$("#exhibit1").css("outline","0");
	});
	//
	$("#exhibit2-click, #exhibit2").hover(function(){
    $("#exhibit2").css("outline","3px solid white");}, function(){
	$("#exhibit2").css("outline","0");	
	});
	//
	$("#exhibit3-click, #exhibit3").hover(function(){
    $("#exhibit3").css("outline","3px solid white");}, function(){
	$("#exhibit3").css("outline","0");
	});
	//
	$("#exhibit4-click, #exhibit4").hover(function(){
    $("#exhibit4").css("outline","3px solid white");}, function(){
	$("#exhibit4").css("outline","0");
	});
	//
	$("#exhibit5-click, #exhibit5").hover(function(){
    $("#exhibit5").css("outline","3px solid white");}, function(){
	$("#exhibit5").css("outline","0");
	});
	//
	$("#exhibit6-click, #exhibit6").hover(function(){
    $("#exhibit6").css("outline","3px solid white");}, function(){
	$("#exhibit6").css("outline","0");
	});
	//
	
// Ajax Load function -- For the clickable nav links in About 
	$("#resume-click").click(function(){
	$("#ajax-display").load('/about/aj-resume.php');
  	});
	$("#references-click").click(function(){
	$("#ajax-display").load('/about/aj-references.php');
  	});
	
// For the smooth scrolling effect in the top-right links of all sections:
	$('a[href^="#"]').click(function(event) {
	var id = $(this).attr("href");
	var offset = 30;
	var target = $(id).offset().top - offset;
	$('html, body').animate({scrollTop:target}, 500); //millisec, the higher the slower
	event.preventDefault(); 
	});	

// Ajax Load function -- For the clickable nav links in Gallery 
	$("#exhibit1-click").click(function(){
	$("#ajax-display").load('/gallery/aj-exhibit1.php');
  	});
	$("#exhibit2-click").click(function(){
	$("#ajax-display").load('/gallery/aj-exhibit2.php');
  	});
	$("#exhibit3-click").click(function(){
	$("#ajax-display").load('/gallery/aj-exhibit3.php');
  	});
	$("#exhibit4-click").click(function(){
	$("#ajax-display").load('/gallery/aj-exhibit4.php');
  	});
	$("#exhibit5-click").click(function(){
	$("#ajax-display").load('/gallery/aj-exhibit5.php');
  	});
	$("#exhibit6-click").click(function(){
	$("#ajax-display").load('/gallery/aj-exhibit6.php');
  	});
	
// Ajax Load function -- For the clickable images in Gallery
	$("#exhibit1").click(function(){
	$("#ajax-display").load('/gallery/aj-exhibit1.php');
  	});
	$("#exhibit2").click(function(){
	$("#ajax-display").load('/gallery/aj-exhibit2.php');
  	});
	$("#exhibit3").click(function(){
	$("#ajax-display").load('/gallery/aj-exhibit3.php');
  	});
	$("#exhibit4").click(function(){
	$("#ajax-display").load('/gallery/aj-exhibit4.php');
  	});
	$("#exhibit5").click(function(){
	$("#ajax-display").load('/gallery/aj-exhibit5.php');
  	});
	$("#exhibit6").click(function(){
	$("#ajax-display").load('/gallery/aj-exhibit6.php');
  	});	
	// For the clickable nav links in Samples 
	$("#moreproductions-click").click(function(){
	$("#ajax-display").load('/samples/aj-moreproductions.php');
  	});
	$("#flickr-click").click(function(){
	$("#ajax-display").load('/modules/aj-apiflickr.php');
  	});
	// For the clickable nav link in Videos 
	$("#load-videos").click(function(){
	$("#ajax-display").load('/videos/aj-videos.php');
  	});
	// For CSS3 Selectors link in Modules 
	$("#css3bar-link, #homeAjax").click(function(){
	$("#ajax-display").load('/protox/css/aj-if-css3bar.html');
  	});

// Change CSS properties - Samples
	$("#nsb, #netgear, #javacom, #otn, #verisign, #yousendit").hover(function(){
    $(this).css("outline","3px solid #00cccc");}, function(){
	$(this).css("outline","#0f0 solid 1px");
	});
	
// launch dimmer with individual overlay
	$("#nsb, #otn, #javacom, #verisign, #yousendit, #contactform").click(function(){
	$("#overlay-row").fadeIn(2000);
	$("#dimmer, #overlay-row").css("display", "block").css("-khtml-opacity", "0.4").css("-moz-opacity", "0.4").css("-moz-opacity", "0.4").css("filter", "alpha(opacity=40)");
	});	
	$("#nsb").click(function(){$("#overlay-block").load("/samples/overlay-nsb.html");
	});	
	$("#otn").click(function(){$("#overlay-block").load("/samples/overlay-otn.html");
	});
	$("#javacom").click(function(){$("#overlay-block").load("/samples/overlay-javacom.html");
	});
	$("#verisign").click(function(){$("#overlay-block").load("/samples/overlay-verisign.html");
	});
	$("#yousendit").click(function(){$("#overlay-block").load("/samples/overlay-yousendit.html");
	});	
	$("#contactform").click(function(){$("#overlay-block").load("/contact/contactform-dimmerlay.php");
	});
// Resume dimmerlay set to default (none)
	$("#overlay-row .x").click(function(){
	$("#dimmer, #overlay-row").fadeOut(2000);
	});

// Change CSS properties - Projectors thumnail images
	$("#projector-thum1").hover(function(){
    $("#projectScreen").load('/modules/load-thum1.html');
	});
	$("#projector-thum2").hover(function(){
    $("#projectScreen").load('/modules/load-thum2.html');
	});
	$("#projector-thum3").hover(function(){
    $("#projectScreen").load('/modules/load-thum3.html');
	});
	$("#projector-thum4").hover(function(){
    $("#projectScreen").load('/modules/load-thum4.html');
	});	

// DivGrid cells
	$(".gridCell").mouseover(function(){
	$(this).css("background-color","#4188a2");
  	$("#desc").text("This is grid cell #" + this.id);}, function(){
	$(this).css("background-color","#94bccb");
	$("#desc").text("...");			
	});
	//
	$(".gridCell#r9c3").mouseover(function(){
	$(this).css("background-color","#4188a2");
  	$("#desc").text("This is grid cell #" + this.id + " -- the last grid cell of this 27-cell css tableless grid. Try other cells and thank you for trying.");
	});
	//	
	
	$(".gridCell").click(function(){
	$(this).css("background-color", "#b42800");
	});
	//
	$("#r1c2, #r1c3, #r2c1, #r2c2, #r2c3, #r3c1, #r3c2, #r3c3, #r4c1, #r4c2, #r4c3, #r5c1, #r5c3, #r6c1, #r6c2, #r6c3, #r7c1, #r7c2, #r7c3, #r1c1, #r8c2, #r8c3, #r9c1, #r9c2, #r9c3,").click(function(){
	var message = 'Sorry, ' + this.id + ' is not the Daily Double cell. Please try again.';
	alert (message);
  	});

// Daily Double Cell
	$("#r5c2").click(function(){
	var message = 'Congratualations! ' + this.id + ' is the Daily Double cell. Click R to refresh the page or X to close this window.';
	alert (message);
	$("#divGridTitle, #desc").css("background-color", "#b42800");
	$("#ajax-display").load('/protox/aj-dailydoublerwd.html');
	});
	//
	$("#modulesNavset-animation").click(function(){
    $("#modulesHome").fadeOut();
	$("#animation").fadeIn().css("display","block");
    $("#animationScreen").animate({height:172},"slow").animate({width:756},"slow").stop;
	});
	$("#modulesNavset-modules").click(function(){
	$("#animation").fadeOut();
	$("#modulesHome").fadeIn().css("display","block");
	});	
	//
	$("#startAnimation").click(function(){
	$("#animationScreenImg").fadeOut();
	$("#animationScreen").animate({height:0},"slow").animate({width:0},"normal").animate({height:172},"normal").animate({width:252},"normal");
	$.timer(750, function (timer){timer.stop();
	$("#animationScreen").load('/modules/animationscreenx.html').css("left", "3470px");
	$("#animationScreenRefresh").css("left", "3460px");
	$("#startAnimation").css("left", "3630px");
	$.timer(500, function (timer){timer.stop();
	$('#animationElements').cycle({ fx: 'shuffle' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
	});
	});
	//
	$("#animationScreenRefresh").click(function(){
	$("#animationElements").fadeOut();
	$("#animationScreenRefresh").css("left","3215px");
	$("#startAnimation").css("left","3886px");
	$.timer(250, function (timer){timer.stop();
	$("#animationScreen").replaceWith('<div id="animationScreen" title="Animation Screen"><img id="animationScreenImg" src="/modules/images/animationscreen.jpg" width="756" height="172" title="Animation Screen Image" alt="Animation Screen Image"></div>');
	});
	});
	});	
	
// Leave below line untouched
});
});
// End: jQuery Framework functions