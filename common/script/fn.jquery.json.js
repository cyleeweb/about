// JavaScript Document

// Begin: jQuery Library functions
//$.holdReady(false);
//$.holdReady(true);
$(document).ready(function(){
	
// Populate global JSON values into placeholders		
	$.getJSON("/common/script/sitevars.json", function(obj){
	// Header
	$('#cylee').text((obj.siteHeader));
	// About - Subtabs - Content
	$('#subtab1').text((obj.aboutTab1));
	$('#subtab2').text((obj.aboutTab2));
	$('#subtab3').text((obj.aboutTab3));
	$('#subtab4').text((obj.aboutTab4));
	});
});
// End: jQuery Library functions

<!-- JS script begins --> 
