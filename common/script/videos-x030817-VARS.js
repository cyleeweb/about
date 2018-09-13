//JavaScript All Functions

$(document).ready(function(){
	// BGN CAROUSEL AUTO SLIDER WITH VARS
	var w = 500;
	
	// BEGIN YOUTUBE VIDEOS VARS
	var youtubePlayer ="http://www.youtube.com/embed/"
	var youtubeParam = "/?rel=0&amp;wmode=transparent"
	var youtubeSrcArr = new Array ("o69Jo8vkkng","zPX-AmKUnTY","8EWQpSLHRWA");
	var youtubeSrc1 = youtubePlayer + youtubeSrcArr[0] + youtubeParam;
	var youtubeSrc2 = youtubePlayer + youtubeSrcArr[1] + youtubeParam;
	var youtubeSrc3 = youtubePlayer + youtubeSrcArr[2] + youtubeParam;
	// END YOUTUBE VIDEOS VARS

	// BEGIN VIMEO VIDEOS VARS
	var vimeoPlayer ="http://player.vimeo.com/video/"
	var vimeoParam = "?badge=0"
	var vimeoSrcArr = new Array ("80035927","80037332","80037304","80037005","52120891","52120897","52120895","52120893","52120892");
	var vimeoSrc1 = vimeoPlayer + vimeoSrcArr[0] + vimeoParam;
	var vimeoSrc2 = vimeoPlayer + vimeoSrcArr[1] + vimeoParam;
	var vimeoSrc3 = vimeoPlayer + vimeoSrcArr[2] + vimeoParam;
	var vimeoSrc4 = vimeoPlayer + vimeoSrcArr[3] + vimeoParam;
	var vimeoSrc5 = vimeoPlayer + vimeoSrcArr[4] + vimeoParam;
	var vimeoSrc6 = vimeoPlayer + vimeoSrcArr[5] + vimeoParam;
	var vimeoSrc7 = vimeoPlayer + vimeoSrcArr[6] + vimeoParam;
	var vimeoSrc8 = vimeoPlayer + vimeoSrcArr[7] + vimeoParam;
	var vimeoSrc9 = vimeoPlayer + vimeoSrcArr[8] + vimeoParam;
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
    }, 3000);
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
	$(".videoDescrip").bind("click", function(){	
	$("#slider").removeClass("autoslide");
	if ($(this).attr('id') == 'youtubeVideo1') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', youtubeSrc1);};
	if ($(this).attr('id') == 'youtubeVideo2') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', youtubeSrc2);};
	if ($(this).attr('id') == 'youtubeVideo3') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', youtubeSrc3);};
	if ($(this).attr('id') == 'vimeoVideo1') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', vimeoSrc1);};
	if ($(this).attr('id') == 'vimeoVideo2') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', vimeoSrc2);};
	if ($(this).attr('id') == 'vimeoVideo3') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', vimeoSrc3);};		
	if ($(this).attr('id') == 'vimeoVideo4') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', vimeoSrc4);};
	if ($(this).attr('id') == 'vimeoVideo5') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', vimeoSrc5);};
	if ($(this).attr('id') == 'vimeoVideo6') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', vimeoSrc6);};
	if ($(this).attr('id') == 'vimeoVideo7') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', vimeoSrc7);};
	if ($(this).attr('id') == 'vimeoVideo8') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', vimeoSrc8);};
	if ($(this).attr('id') == 'vimeoVideo9') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', vimeoSrc9);};
	$(this).next().next().css('display','block');
	});
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
	$(this).css("opacity","0.50"); $("#slider").removeClass("autoslide");}, function(){$(this).css("opacity","1");});
	// END HOVER VIDEO DESCRIPTION
	
	// BGN PLAY VIDEO
	$(".videoDescrip").bind("click", function(){
	$("#slider").removeClass("autoslide");				
	if ($(this).attr('id') == 'youtubeVideo1') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', youtubeSrc1);};
	if ($(this).attr('id') == 'youtubeVideo2') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', youtubeSrc2);};
	if ($(this).attr('id') == 'youtubeVideo3') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', youtubeSrc3);};
	if ($(this).attr('id') == 'vimeoVideo1') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', vimeoSrc1);};
	if ($(this).attr('id') == 'vimeoVideo2') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', vimeoSrc2);};
	if ($(this).attr('id') == 'vimeoVideo3') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', vimeoSrc3);};
	if ($(this).attr('id') == 'vimeoVideo4') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', vimeoSrc4);};
	if ($(this).attr('id') == 'vimeoVideo5') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', vimeoSrc5);};
	if ($(this).attr('id') == 'vimeoVideo6') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', vimeoSrc6);};
	if ($(this).attr('id') == 'vimeoVideo7') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', vimeoSrc7);};
	if ($(this).attr('id') == 'vimeoVideo8') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', vimeoSrc8);};
	if ($(this).attr('id') == 'vimeoVideo9') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', vimeoSrc9);};
	$(this).next().next().css('display','block');
	});
	$(".close").bind("click", function(){
	$(this).css('display','none').prev().css('display','none').find("iframe").attr('src', "")
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
	$(".videoDescrip").bind("click", function(){
	$("#slider").removeClass("autoslide");
	if ($(this).attr('id') == 'youtubeVideo1') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', youtubeSrc1);};
	if ($(this).attr('id') == 'youtubeVideo2') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', youtubeSrc2);};
	if ($(this).attr('id') == 'youtubeVideo3') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', youtubeSrc3);};
	if ($(this).attr('id') == 'vimeoVideo1') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', vimeoSrc1);};
	if ($(this).attr('id') == 'vimeoVideo2') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', vimeoSrc2);};
	if ($(this).attr('id') == 'vimeoVideo3') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', vimeoSrc3);};
	if ($(this).attr('id') == 'vimeoVideo4') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', vimeoSrc4);};
	if ($(this).attr('id') == 'vimeoVideo5') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', vimeoSrc5);};
	if ($(this).attr('id') == 'vimeoVideo6') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', vimeoSrc6);};
	if ($(this).attr('id') == 'vimeoVideo7') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', vimeoSrc7);};
	if ($(this).attr('id') == 'vimeoVideo8') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', vimeoSrc8);};
	if ($(this).attr('id') == 'vimeoVideo9') {$(this).css('display','none').next().css('display','block').find("iframe").attr('src', vimeoSrc9);};
	$(this).next().next().css('display','block');
	});
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


/*$(function() {
  // enable circular scrollables with a click handler
  $(".stage").scrollable({ circular:true }).bind("click", function() {
  $(this).data("scrollable").next();
  });
  //
  });*/
