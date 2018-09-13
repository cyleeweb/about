// JavaScript Document

/* Begin: jQuery Library Functions -- Subset for all Ajax Load Pages */
//
$(document).ready(function(){
	
	$(".xMark").bind('click', function(){
		var where = $(this).attr('id');
		//alert(where);
		if(where === "closeHome") {
			$('#ajax-home').fadeOut(500, function(){window.scrollTo(0,0);});
		}
		if(where === "closeAbout") {
			$('#ajax-about').fadeOut(500, function(){window.scrollTo(0,0);});
		}
		if(where === "closeGallery") {
			$('#ajax-gallery').fadeOut(500, function(){window.scrollTo(0,0);});
		}
		if(where === "closeSamples") {
			$('#ajax-samples').fadeOut(500, function(){window.scrollTo(0,0);});
		}
		if(where === "closeModules") {
			$('#ajax-modules').fadeOut(500, function(){window.scrollTo(0,0);});
		}
		if(where === "closeVideos") {
			$('#ajax-videos').fadeOut(500, function(){window.scrollTo(0,0);});
		}
		if(where === "closeAppsconsole") {
			$('#appsConsole').fadeOut(500, function(){window.scrollTo(0,0);});
			$("#restApps").val('1');
		}
		if(where === "closeJSCollection") {
			$('#ajax-left').fadeOut(500, function(){window.scrollTo(0,0);});
			$("#javascript").val('0');
		}
		$('#ajax-display').fadeOut(500, function(){window.scrollTo(0,0);});
	})

	$("#references #openAll").bind("click", function(){
		$("#references p").fadeIn(300);
		$("#references .section").css("color", "#397486").css("font-weight", "bold");
	});
	$("#references #closeAll").bind("click", function(){
		$("#references p").fadeOut(300);
	});

	// Change CSS properties - Samples -- Ajaxed area
	$("#ht-features, #ht-plans, #ht-apps, #ht-enterprise, #netgear, #geotrust, #thawte, #flash1, #pricingcalc").hover(function(){
		$(this).css("outline", "3px solid #efefef");
	}, function(){
		$(this).css("outline", "#fff solid 1px");
	});
	// For Videos section -- Ajaxed area
	$("#mask1").hover(function(){
		$(this).css("background", "url(/images/curvearrow-right.png) no-repeat center");
	}, function(){
		$(this).css("background", "url(/images/curvearrows.png) no-repeat center");
	});
	$("#mask2").hover(function(){
		$(this).css("background", "url(/images/curvearrow-right.png) no-repeat center");
	}, function(){
		$(this).css("background", "url(/images/curvearrows.png) no-repeat center");
	});
	$("#mask3").hover(function(){
		$(this).css("background", "url(/images/curvearrow-right.png) no-repeat center");
	}, function(){
		$(this).css("background", "url(/images/curvearrows.png) no-repeat center");
	});
	$("#mask4").hover(function(){
		$(this).css("background", "url(/images/curvearrow-right.png) no-repeat center");
	}, function(){
		$(this).css("background", "url(/images/curvearrows.png) no-repeat center");
	});
	$("#mask5").hover(function(){
		$(this).css("background", "url(/images/curvearrow-right.png) no-repeat center");
	}, function(){
		$(this).css("background", "url(/images/curvearrows.png) no-repeat center");
	});
	/**/
	$("#mask1").bind("click", function(){
		$(this).load('/videos/ajvid.html #video1');
		$("#videoBar1").css("visibility", "visible").css("background", "url(/images/curvearrow-left.png) no-repeat right center");
	});
	$("#mask2").bind("click", function(){
		$(this).load('/videos/ajvid.html #video2');
		$("#videoBar2").css("visibility", "visible").css("background", "url(/images/curvearrow-left.png) no-repeat right center");
	});
	$("#mask3").bind("click", function(){
		$(this).load('/videos/ajvid.html #video3');
		$("#videoBar3").css("visibility", "visible").css("background", "url(/images/curvearrow-left.png) no-repeat right center");
	});
	$("#mask4").bind("click", function(){
		$(this).load('/videos/ajvid.html #video4');
		$("#videoBar4").css("visibility", "visible").css("background", "url(/images/curvearrow-left.png) no-repeat right center");
	});
	$("#mask5").bind("click", function(){
		$(this).load('/videos/ajvid.html #video5');
		$("#videoBar5").css("visibility", "visible").css("background", "url(/images/curvearrow-left.png) no-repeat right center");
	});
	/**/
	$("#videoBar1").bind("click", function(){
		$("#video1").remove();
	});
	$("#videoBar2").bind("click", function(){
		$("#video2").remove();
	});
	$("#videoBar3").bind("click", function(){
		$("#video3").remove();
	});
	$("#videoBar4").bind("click", function(){
		$("#video4").remove();
	});
	$("#videoBar5").bind("click", function(){
		$("#video5").remove();
	});
});
//
/* End: jQuery Library Functions -- Subset for all Ajax Load Pages */
