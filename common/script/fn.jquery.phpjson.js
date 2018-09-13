// JavaScript Document

// Begin: jQuery Framework functions
//$.holdReady(false);
//$.holdReady(true);
$(document).ready(function(){	
// Populate global JSON values into placeholders		
	$.getJSON("/common/script/sitevars.php", function(obj){
	// Header
	$('#cylee').text((obj.siteHeader));
	// Home
	$('#homeHeadline').text((obj.homeHeadline));
	$('#hometitle').text((obj.sectitleHome));
	$('#hometitle').attr('title',(obj.sectitleHome));
	$('#home-byline').text((obj.bylineHome));
	// About
	$('#abouttitle').text((obj.sectitleAbout));
	$('#abouttitle').attr('title',(obj.sectitleAbout));
	$('#about-byline').text((obj.bylineAbout));
	// Galleries
	$('#gallerytitle').text((obj.sectitleGallery));
	$('#gallerytitle').attr('title',(obj.sectitleGallery));
	$('#gallery-byline').text((obj.bylineGallery));
	// Samples
	$('#samplestitle').text((obj.sectitleSamples));
	$('#samplestitle').attr('title',(obj.sectitleSamples));
	$('#samples-byline').text((obj.bylineSamples));
	$('#animation-byline').text(obj.bylineAnimation);
	// Modules
	$('#modulesTitle').text((obj.sectitleModules));
	$('#modulesTitle').attr('title',(obj.sectitleModules));
	$('#modules-byline').text((obj.bylineModules));
	// Videos
	$('#videostitle').text((obj.sectitleVideos));
	$('#videostitle').attr('title',(obj.sectitleVideos));
	$('#videos-byline').text((obj.bylineVideos));
	// About - Subtabs - Header
	$('#headerTab1').text((obj.headerTab1));
	$('#headerTab2').text((obj.headerTab2));
	$('#headerTab3').text((obj.headerTab3));
	$('#headerTab4').text((obj.headerTab4));
	// About - Subtabs - Content
	$('#subtab1').text((obj.aboutTab1));
	$('#subtab2').text((obj.aboutTab2));
	$('#subtab3').text((obj.aboutTab3));
	$('#subtab4').text((obj.aboutTab4));
	// About - Thumbs
	$('.thumb1x').text((obj.navHome));
	$('.thumb1x').attr('title',(obj.navHome));
	$('.thumb2x').text((obj.navAbout));
	$('.thumb2x').attr('title',(obj.navAbout));
	$('.thumb3x').text((obj.navGallery));
	$('.thumb3x').attr('title',(obj.navGallery));
	$('.thumb4x').text((obj.navSamples));
	$('.thumb4x').attr('title',(obj.navSamples));
	$('.thumb5x').text((obj.navModules));
	$('.thumb5x').attr('title',(obj.navModules));
	$('.thumb6x').text((obj.navVideos));
	$('.thumb6x').attr('title',(obj.navVideos));
	});
});
// End: jQuery Framework functions

<!-- JS script begins --> 
