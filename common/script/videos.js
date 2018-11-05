//JavaScript All Functions
$(document).ready(function(){

	// BGN CAROUSEL AUTO SLIDER WITH VARS
	var w = 500;

	// BEGIN YOUTUBE VIDEOS VARS
	var youtubePlayer ="https://www.youtube.com/embed/";
	var youtubeParam = "/?rel=0&amp;wmode=transparent";
	var youtubeSrcArr = new Array ("UI7B306CdoM","StF3bXCbtJ8","jj6wP62oqPo","_he3cwFGFDc","wWynO77BDCE","bbJ4FGvS5EY","o69Jo8vkkng","zPX-AmKUnTY","8EWQpSLHRWA");

	// ServiceNow videos below...
	var youtubeSrc1 = youtubePlayer + youtubeSrcArr[0] + youtubeParam; // servicenow-1
	var youtubeSrc2 = youtubePlayer + youtubeSrcArr[1] + youtubeParam; // servicenow-2
	var youtubeSrc3 = youtubePlayer + youtubeSrcArr[2] + youtubeParam; // servicenow-3
	var youtubeSrc4 = youtubePlayer + youtubeSrcArr[3] + youtubeParam; // servicenow-4
	var youtubeSrc5 = youtubePlayer + youtubeSrcArr[4] + youtubeParam; // servicenow-5
	var youtubeSrc6 = youtubePlayer + youtubeSrcArr[5] + youtubeParam; // servicenow-6
	
	// Hitail videos below...
	var youtubeSrc7 = youtubePlayer + youtubeSrcArr[6] + youtubeParam; // hightail-1
	var youtubeSrc8 = youtubePlayer + youtubeSrcArr[7] + youtubeParam; // hightail-2
	var youtubeSrc9 = youtubePlayer + youtubeSrcArr[8] + youtubeParam; // hightail-3
	// END YOUTUBE VIDEOS VARS

	// BEGIN VIMEO VIDEOS VARS
	var vimeoPlayer ="https://player.vimeo.com/video/";
	var vimeoParam = "?badge=0";
	var vimeoSrcArr = new Array ("80035927","80037332","80037005","52120891","52120897","52120895","52120893","52120892");

	// Hitail videos below...
	var vimeoSrc1 = vimeoPlayer + vimeoSrcArr[0] + vimeoParam; // hightail-4
	var vimeoSrc2 = vimeoPlayer + vimeoSrcArr[1] + vimeoParam; // hightail-5
	var vimeoSrc3 = vimeoPlayer + vimeoSrcArr[2] + vimeoParam; // hightail-6
	var vimeoSrc4 = vimeoPlayer + vimeoSrcArr[3] + vimeoParam; // hightail-7
	var vimeoSrc5 = vimeoPlayer + vimeoSrcArr[4] + vimeoParam; // hightail-8
	var vimeoSrc6 = vimeoPlayer + vimeoSrcArr[5] + vimeoParam; // hightail-9
	var vimeoSrc7 = vimeoPlayer + vimeoSrcArr[6] + vimeoParam; // hightail-10
	var vimeoSrc8 = vimeoPlayer + vimeoSrcArr[7] + vimeoParam; // hightail-11 ???
	// END VIMEO VIDEOS VARS

	// BGN AUTO FORWARD-PAUSE
	$("#autoforward").bind("click", function(){
        alert ('Auto scroller activated.');
        //
        setInterval(function(){
            $(".autoslide").animate({left:"-"+1*w},1000,function(){
            $(this).find(".slides:last").after($(this).find(".slides:first"));
            $(this).css({left:0});
        })

    }, 2500);
    // END CAROUSEL AUTO SLIDER WITH VARS

		$("#slider").addClass("autoslide");	
	});

	$("#pause").bind("click", function(){
		alert ('Auto scroller deactivated.');
		$("#slider").removeClass("autoslide");	
	});
	// END AUTO FORWARD-PAUSE

	// BGN HOVER VIDEO DESCRIPTION
	$(".videoDescrip").hover(function(){
		$(this).css("opacity","0.50");
		$("#slider").removeClass("autoslide");}, function(){$(this).css("opacity","1");
	})
	// END HOVER VIDEO DESCRIPTION

	// BGN PLAY VIDEO	
	var BgnPlayVdo = $(".videoDescrip").bind("click", function(){
			$("#slider").removeClass("autoslide");
			if ($(this).attr('id') == 'youtubeVideo1') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', youtubeSrc1);};
			if ($(this).attr('id') == 'youtubeVideo2') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', youtubeSrc2);};
			if ($(this).attr('id') == 'youtubeVideo3') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', youtubeSrc3);};
			if ($(this).attr('id') == 'youtubeVideo4') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', youtubeSrc4);};
			if ($(this).attr('id') == 'youtubeVideo5') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', youtubeSrc5);};
			if ($(this).attr('id') == 'youtubeVideo6') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', youtubeSrc6);};
			if ($(this).attr('id') == 'youtubeVideo7') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', youtubeSrc7);};
			if ($(this).attr('id') == 'youtubeVideo8') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', youtubeSrc8);};
			if ($(this).attr('id') == 'youtubeVideo9') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', youtubeSrc9);};
			//
			if ($(this).attr('id') == 'vimeoVideo1') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', vimeoSrc1);};
			if ($(this).attr('id') == 'vimeoVideo2') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', vimeoSrc2);};
			if ($(this).attr('id') == 'vimeoVideo3') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', vimeoSrc3);};		
			if ($(this).attr('id') == 'vimeoVideo4') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', vimeoSrc4);};
			if ($(this).attr('id') == 'vimeoVideo5') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', vimeoSrc5);};
			if ($(this).attr('id') == 'vimeoVideo6') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', vimeoSrc6);};
			if ($(this).attr('id') == 'vimeoVideo7') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', vimeoSrc7);};
			if ($(this).attr('id') == 'vimeoVideo8') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', vimeoSrc8);};
			$(this).next().next().css('display','block');
		});

	BgnPlayVdo;

	$(".close").bind("click", function(){
		$(this).css('display','none').prev().css('display','none').find("iframe").attr('src', "")
		$(this).prev().prev().css('display','block');
	});
	// END PLAY VIDEO

	// BGN CAROUSEL "PREV"	
	$('#prev').bind("click", function(event){
	    event.stopPropagation();
		$("#slider").removeClass("autoslide");
		$('#slider .slides:last').clone().insertBefore("#slider .slides:first");
		$('#slider .slides:last').detach();
		$('#slider').attr({style:"left:-500px"}); // To compensate the lost width of a frame
		$('#slider').animate({left:"+="+1*w},250).clearQueue();

		// BGN HOVER VIDEO DESCRIPTION
		$(".videoDescrip").hover(function(){
			$(this).css("opacity","0.50"); $("#slider").removeClass("autoslide");}, function(){$(this).css("opacity","1");
			});
		// END HOVER VIDEO DESCRIPTION

		// BGN PLAY VIDEO
		BgnPlayVdo;;

		$(".close").bind("click", function(){
			$(this).css('display','none').prev().css('display','none').find("iframe").attr('src', "");
			$(this).prev().prev().css('display','block');

		});					

	});
	// END PLAY VIDEO
	// END CAROUSEL "PREV"	

	// BGN CAROUSEL "NEXT"
	$('#next').bind("click", function(event){
	    event.stopPropagation();
		$("#slider").removeClass("autoslide");
		$('#slider').animate({left:"-="+1*w},250, function(){
			$('#slider').attr({style:"left:0"});
			$('#slider .slides:first').clone().insertAfter("#slider .slides:last");
			$('#slider .slides:first').detach();

			// BGN HOVER VIDEO DESCRIPTION
			$(".videoDescrip").hover(function(){
				$(this).css("opacity","0.50"); $("#slider").removeClass("autoslide");}, function(){$(this).css("opacity","1");
			});
			// END HOVER VIDEO DESCRIPTION

			// BGN PLAY VIDEO
			BgnPlayVdo;

			$(".close").bind("click", function(){
				$(this).css('display','none').prev().css('display','none').find("iframe").attr('src', "")
				$(this).prev().prev().css('display','block');
			});				
		});
		// END PLAY VIDEO	
	});
	// END CAROUSEL "NEXT"
});
// -->

/*
$(function() {
	// enable circular scrollables with a click handler
  	$(".stage").scrollable({ circular:true }).bind("click", function() {
  		$(this).data("scrollable").next();
	});
});
*/

