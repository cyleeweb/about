// JavaScript Document

// Begin: jQuery Framework functions
$(document).ready(function(){
// Leave above line untouched
// Change global mask display from 'block' to 'none'. 
	$("#globalmask").click(function(){
	$(this).fadeOut("slow");
	});
	
// Change cyleepic display from 'none' to 'block'. 
	$("#maskpic").mouseover(function(){
	$(this).css("border", "solid 4px #ddd");
	$(this).css("-khtml-opacity", "1.00");
	$(this).css("-moz-opacity", "1.00");
	$(this).css("-moz-opacity", "1.00");
	$(this).css("filter", "alpha(opacity=100)");
	$("#cyleepic1").css("display", "block");
	});	
	
// Change cyleepic display from 'block' to 'none'. 
	$("#maskpic").mouseout(function(){
	$(this).css("border", "none");
	$(this).css("-khtml-opacity", "0.40");
	$(this).css("-moz-opacity", "0.40");
	$(this).css("-moz-opacity", "0.40");
	$(this).css("filter", "alpha(opacity=40)");
	$("#cyleepic1").css("display", "none");
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

// For overlay link Contact Form. Make all links with the 'rel' attribute open overlays .
	$(function() { 
	// if the function argument is given to overlay, it is assumed to be the onBeforeLoad event listener.
	$("a[rel]").overlay({
	mask: '#222222', effect: 'apple', onBeforeLoad: function() { 
	// grab wrapper element inside content
	var wrap = this.getOverlay().find(".overlayContent"); 
	// load the page specified in the trigger
	wrap.load(this.getTrigger().attr("href"));
	} 
	});	

// Toggle -- Theme Control 1 (use sprite)
	$("#themeControl-1").mouseover(function(){
    $(this).css("background-position","0 0");
	});
	$("#themeControl-1").mouseout(function(){
    $(this).css("background-position","0 -24px");
	});
	$("#themeControl-1").toggle(function(){
	$(".container").css("background-image", "url('/images/bkgd-across-sepia.jpg')");
	$(".category").css("background-image", "url('/images/bkgd-across-sepia.jpg')");
	//$("#aboutnav, #exhibitnav, #moreproductions-link, #modulesNavset, #projectScreenRefresh, #projectText, #animationScreenRefresh, #startAnimation").css("background-color", "#000");
	alert ('Theme Two on.');
	},
    function(){
	$(".container").css("background-image", "url('/images/bkgd-across.jpg')");
	$(".category").css("background-image", "url('/images/bkgd-across.jpg')");
	$("#aboutnav, #exhibitnav, #moreproductions-link, #modulesNavset, #projectScreenRefresh, #projectText, #animationScreenRefresh, #startAnimation").css("background-color", "");
	alert ('Theme One on.');
	});
	
// Toggle -- Theme Control 2 (use sprite)
	$("#themeControl-2").mouseover(function(){
    $(this).css("background-position","0 0");
	});
	$("#themeControl-2").mouseout(function(){
    $(this).css("background-position","0 -48px");
	});
	$("#themeControl-2").toggle(function(){
	$(".container").css("background-image", "url('/images/tree-390x375-3.png')");
	$(".category").css("background-image", "url('/images/trees-820x350-1.png')");
	$("#aboutnav, #exhibitnav, #moreproductions-link, #modulesNavset, #projectScreenRefresh, #projectText, #animationScreenRefresh, #startAnimation").css("background-color", "#000");
	alert ('Theme Three on.');
	},
    function(){
	$(".container").css("background-image", "url('/images/bkgd-across.jpg')");
	$(".category").css("background-image", "url('/images/bkgd-across.jpg')");
	$("#aboutnav, #exhibitnav, #moreproductions-link, #modulesNavset, #projectScreenRefresh, #projectText, #animationScreenRefresh, #startAnimation").css("background-color", "");
	alert ('Theme One on.');
	});	

// Toggle -- Home DimmerSwitch (use sprite)
	$("#dimmerSwitch").mouseover(function(){
    $(this).css("background-position","0 0");
	});
	$("#dimmerSwitch").mouseout(function(){
    $(this).css("background-position","0 -72px");
	});
	$("#dimmerSwitch").toggle(function(){
	alert ('Background dimmer on.');
	$("#homeDimmer").css("display", "block");
	},
    function(){
	alert ('Background dimmer off.');
	$("#homeDimmer").css("display", "none");
	});

// Mouseover home images (switched to use Home Slide Cycle)
	/*$("#home1").click(function(){
	$("#home1").slideUp("slow"); // left:131px;
	$("#home3").fadeIn("slow");
	});
	//
	$("#home2").click(function(){
	$("#home2").slideUp("slow"); //left:427px;
	$("#home4").fadeIn("slow");
	});
	//
	$("#home3").click(function(){
	$("#home3").slideUp("slow"); // left:131px;
	$("#home5").fadeIn("slow");	
	});
	//
	$("#home4").click(function(){
	$("#home4").slideUp("slow"); //left:427px;
	$("#home6").fadeIn("slow");	
	});
	//
	$("#home5").click(function(){
	$("#home5").slideUp("slow"); // left:131px;
	$("#home1").fadeIn("slow");
	});
	//
	$("#home6").click(function(){
	$("#home6").slideUp("slow"); //left:427px;
	$("#home2").fadeIn("slow");
	});	*/
	});	

// For Home Headline 
	$.timer(1500, function (timer){timer.stop();
	$("#homeHeadline").fadeIn();
	$("#homeHeadline").css("display", "block");
	$.timer(3750, function (timer){timer.stop();
	$("#homeHeadline").fadeOut();
	});
	});
	
// For Home Slide Cycle
	$('.animSlideL, .animSlideR').fadeIn();
	$('.animSlideL, .animSlideR').css("display","block");
	$('.animSlideL').cycle({
		fx: 'fade' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
	});	
	$('.animSlideR').cycle({
		fx: 'fade' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
	});		
	
// Toggle Slider - MyInfo and ModulesNav
	$("#me-click").bind("click",function(){
	$("#contactinfo").slideToggle("fast");
	});
	//
	$("#modulesnav-click").bind("click",function(){
	$("#modulesnav").slideToggle("fast");
	});

// Change CSS properties - Gallery
	$("#exhibit1-click, #exhibit1").mouseover(function(){
    $("#exhibit1").css({border:"3px solid white"});
	});
	//
	$("#exhibit1-click, #exhibit1").mouseout(function(){
    $("#exhibit1").css({border:"0"});
	});
	//
	$("#exhibit2-click, #exhibit2").mouseover(function(){
    $("#exhibit2").css({border:"3px solid white"});
	});
	//
	$("#exhibit2-click, #exhibit2").mouseout(function(){
    $("#exhibit2").css({border:"0"});
	});
	//
	$("#exhibit3-click, #exhibit3").mouseover(function(){
    $("#exhibit3").css({border:"3px solid white"});
	});
	//
	$("#exhibit3-click, #exhibit3").mouseout(function(){
    $("#exhibit3").css({border:"0"});
	});
	//
	$("#exhibit4-click, #exhibit4").mouseover(function(){
    $("#exhibit4").css({border:"3px solid white"});
	});
	//
	$("#exhibit4-click, #exhibit4").mouseout(function(){
    $("#exhibit4").css({border:"0"});
	});
	//
	$("#exhibit5-click, #exhibit5").mouseover(function(){
    $("#exhibit5").css({border:"3px solid white"});
	});
	//
	$("#exhibit5-click, #exhibit5").mouseout(function(){
    $("#exhibit5").css({border:"0"});
	});
	//
	$("#exhibit6-click, #exhibit6").mouseover(function(){
    $("#exhibit6").css({border:"3px solid white"});
	});
	//
	$("#exhibit6-click, #exhibit6").mouseout(function(){
    $("#exhibit6").css({border:"0"});
	});
	
// Ajax Load function -- For the clickable nav links in About 
	$("#resume-click").click(function(){
	$("#ajax-display").load('/about/aj-resume.html');
  	});
	$("#references-click").click(function(){
	$("#ajax-display").load('/about/aj-references.html');
  	});

// Ajax Load function -- For the clickable nav links in Gallery 
	$("#exhibit1-click").click(function(){
	$("#ajax-display").load('/gallery/aj-exhibit1.html');
  	});
	$("#exhibit2-click").click(function(){
	$("#ajax-display").load('/gallery/aj-exhibit2.html');
  	});
	$("#exhibit3-click").click(function(){
	$("#ajax-display").load('/gallery/aj-exhibit3.html');
  	});
	$("#exhibit4-click").click(function(){
	$("#ajax-display").load('/gallery/aj-exhibit4.html');
  	});
	$("#exhibit5-click").click(function(){
	$("#ajax-display").load('/gallery/aj-exhibit5.html');
  	});
	$("#exhibit6-click").click(function(){
	$("#ajax-display").load('/gallery/aj-exhibit6.html');
  	});
	
// Ajax Load function -- For the clickable images in Gallery
	$("#exhibit1").click(function(){
	$("#ajax-display").load('/gallery/aj-exhibit1.html');
  	});
	$("#exhibit2").click(function(){
	$("#ajax-display").load('/gallery/aj-exhibit2.html');
  	});
	$("#exhibit3").click(function(){
	$("#ajax-display").load('/gallery/aj-exhibit3.html');
  	});
	$("#exhibit4").click(function(){
	$("#ajax-display").load('/gallery/aj-exhibit4.html');
  	});
	$("#exhibit5").click(function(){
	$("#ajax-display").load('/gallery/aj-exhibit5.html');
  	});
	$("#exhibit6").click(function(){
	$("#ajax-display").load('/gallery/aj-exhibit6.html');
  	});	
	// For the clickable nav links in Samples 
	$("#moreproductions-click").click(function(){
	$("#ajax-display").load('/samples/aj-moreproductions.php');
  	});
	$("#flickr-click").click(function(){
	$("#ajax-display").load('/modules/aj-apiflickr.html');
  	});
	// For CSS3 Selectors link in Modules 
	$("#css3bar-link, #homeAjax").click(function(){
	$("#ajax-display").load('/protox/css/aj-if-css3bar.html');
  	});

// Change CSS properties - Samples
	$("#nsb, #netgear, #javacom, #otn, #verisign").mouseover(function(){
    $(this).css({border:"3px solid #00cccc"});
	});
	//
	$("#nsb, #netgear, #javacom, #otn, #verisign").mouseout(function(){
    $(this).css({border:"0"});
	});

// Change CSS properties - Projectors thumnail images
	$("#projector-thum1").mouseover(function(){
    $("#projectScreen").load('/modules/load-thum1.html');
	});
	$("#projector-thum2").mouseover(function(){
    $("#projectScreen").load('/modules/load-thum2.html');
	});
	$("#projector-thum3").mouseover(function(){
    $("#projectScreen").load('/modules/load-thum3.html');
	});
	$("#projector-thum4").mouseover(function(){
    $("#projectScreen").load('/modules/load-thum4.html');
	});	

// DivGrid cells
	$(".gridCell").mouseover(function(){
	$(this).css("background-color","#4188a2");
  	$("#desc").text("This is grid cell #" + this.id);
	});
	//
	$(".gridCell#r9c3").mouseover(function(){
	$(this).css("background-color","#4188a2");
  	$("#desc").text("This is grid cell #" + this.id + " -- the last grid cell of this 27-cell css tableless grid. Try other cells and thank you for trying.");
	});
	//	
	$(".gridCell").mouseout(function(){
	$(this).css("background-color","#94bccb");
	$("#desc").text("...");
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
	$("#animation").fadeIn();
	$("#animation").css("display","block");
    $("#animationScreen").animate({height:172},"slow");
	$("#animationScreen").animate({width:756},"slow");
	});
	$("#modulesNavset-modules").click(function(){
	$("#animation").fadeOut();
	$("#modulesHome").fadeIn();
	$("#modulesHome").css({"display":"block"});
	});	
	//
	$("#startAnimation").click(function(){
	$("#animationScreenImg").fadeOut();
	$("#animationScreen").animate({height:0},"slow");
    $("#animationScreen").animate({width:0},"slow");
    $("#animationScreen").animate({height:172},"slow");
	$("#animationScreen").animate({width:252},"slow");
	$.timer(750, function (timer){timer.stop();
	$("#animationScreen").load('/modules/animationscreenx.html');
	$("#animationScreen").css("left", "3562px");
	$("#animationScreenRefresh").css("left", "3554px");
	$("#startAnimation").css("left", "3722px");
	$.timer(750, function (timer){timer.stop();
	$('#animationElements').cycle({ fx: 'scrollUp' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
	});
	});
	});
	//
	$("#animationScreenRefresh").click(function(){
	$("#animationElements").fadeOut();
	$("#animationScreenRefresh").css("left","3310px");
	$("#startAnimation").css("left","3980px");
	$.timer(750, function (timer){timer.stop();
	$("#animationScreen").replaceWith('<div id="animationScreen" title="Animation Screen"><img id="animationScreenImg" src="/modules/images/animationscreen.jpg" width="756" height="172" title="Animation Screen Image" alt="Animation Screen Image"></div>');
	});
	});
	});	

// Confirm plugin
    $('input[type=button]').click(function() {
        $(this).remove();
    });
    $('input[type=button]').confirm({
        msg:'Do you really want to delete this button?',
        timeout:5000
    });	
	
// IE6PngTransFix
	$('body').supersleight();
	$('body').supersleight({shim: '/images/x.gif'});
	
// Initialize tooltip for the scrollnav thumnail tabs
$("#scrollnav a[title]").tooltip({ 
   // tweak the position
   offset: [60, 0],
   // use the "slide" or "fade" effect
   effect: 'fade'  
// add dynamic plugin with optional configuration for bottom edge
}).dynamic({ bottom: { direction: 'down', bounce: true } });

// jQuery Framework Functions -- Subset for all Ajax Load Pages
	$(document).ready(function(){
	<!-- Hide -->	
	$(".galleryimg").click(function(){
	$(this).fadeOut("slow");
	});
	
	<!-- Open -->
	$("#open").click(function(){
	$(".galleryimg").show();
	});
	});
//	
	
// Leave below line untouched
});
// End: jQuery Framework functions