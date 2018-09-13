// JavaScript Document
(function() {
	var app = angular.module('AppCyleeweb',["ngRoute", 'ngAnimate']);
	var globalVars = {
        globalTitle:'C.Y. Lee Front-End Web & UI Development/Support Professional',
		globalHeader:'C.Y. Lee Front-End Web & UI Development/Support Professional',
		navHome:'Home',
		navAbout:'About',
		navGalleries:'Galleries',
		navSamples:'Samples',
		navModules:'Modules',
		navVideos:'Videos',
		navContact:'Contact',
		sectitleHome:'Home',
		headlineHome:'Slide animation is on... Toggle left buttons for theme and dimmer changes.',
		bylineHome:'Maximizing UI Experience to Full Modern 16:9 Wide Screens',
		sectitleAbout:'About',
		bylineAbout:'Professionally disciplined to deliver high-quality developments',
		subtab1Title:'Template | UI Building',
		subtab2Title:'Site | Page Performance',
		subtab3Title:'Content Implementation',
		subtab4Title:'Dynamic Data Binding',
		subTab1:'Based upon master design comps and wireframes, I work closely with dev/des groups to style and build clean and scalable HTML(5) + CSS(3) + jQuery/Ajax/Javascript core templates or modules for further intergration and implementation into your Web architectures.',
		subTab2:'Website assets (images, scripts, styles, components, etc.) can be optimized, merged, minified with delay loading as needed to reduce page weight, element calls, dom parsing for faster rendering. Additionally, I can use various tools and methods including better semantic markup to improve page/site performance.',
		subTab3:'Whether the sites are driven in Apache, Tomcat, IIS, running HTML, PHP, ASP, .NET, JSP, or via CMS such as Teamsite, Tridion, Ektron, UCM, Crafter/Alfresco and more, I can work with all core groups to convert and implement materials from stakeholders to HTML(5)-CSS(3)-jQuery compliant web pages with functions.',
		subTab4:'The sites may be driven in various environments. I can work with all front/back-end groups to seamlessly tackle tickets for content updating, function adding, dynamic data-binding and tracking in all areas including meta, headers, breadcrumbs, navigation, body contents, footers and more.',
		sectitleGalleries:'Image Galleries',
		bylineGalleries:'Composed with Photography, Imaging, HTML, CSS, jQuery, Javascript and AJAX',
		sectitleSamples:'Dev & Support Samples',
		bylineSamples:'Enterprise website and production support portfolio',
		sectitleModules:'Modules & Frameworks',
		bylineModules:'Built with (X)HTML(5), CSS(3), JQ, JS, Ajax, XML, SVG & more',
		sectitleVideos:'Embedding & Playing Remote Videos',
		bylineVideos:'On-Demand Ajax Call for YouTube/Vimeo Videos',
		sectitleContact:'Contact',
	}
	//
	app.controller ('AppController', function(){
	this.iVar = globalVars; // 'iVar' is the property of globalVars referenced in the html instances
	});
	

})();