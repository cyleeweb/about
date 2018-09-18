"use strict";
/*************************************** AngularJS ***************************************/
var app = angular.module('NgBoot', ['ngRoute']);
console.log('Code starts!!!');

// ngRoute to specify routes via $routeProvider
app.config(function ($routeProvider){
	$routeProvider
		.when('/gallery1', {
			templateUrl: '/gallery/aj-slidewin-exhibit1.php',
			controller: 'SiteCtrl'
		})
		.when('/gallery2', {
			templateUrl: '/gallery/aj-slidewin-exhibit2.php',
			controller: 'SiteCtrl'
		})
		.when('/gallery3', {
			templateUrl: '/gallery/aj-slidewin-exhibit3.php',
			controller: 'SiteCtrl'
		})
		.when('/gallery4', {
			templateUrl: '/gallery/aj-slidewin-exhibit4.php',
			controller: 'SiteCtrl'
		})
		.when('/gallery5', {
			templateUrl: '/gallery/aj-slidewin-exhibit5.php',
			controller: 'SiteCtrl'
		})
		.when('/gallery6', {
			templateUrl: '/gallery/aj-slidewin-exhibit6.php',
			controller: 'SiteCtrl'
		});
});

// SiteCtrl
app.controller('SiteCtrl', ['$scope', '$http', '$log', function ($scope, $http, $log){
	$http.get('/ng/common/script/json-sitevars.php').then(function (response){
		$scope.siteVars = response.data.siteVars;
	});
	$log.info('SiteCtrl processed by $log service!');
}]);

// AbouttabsCtrl -- array block calling JSON from MySQL DB
app.controller('AbouttabsCtrl', ['$scope', '$http', '$log', function ($scope, $http, $log){
	$http.get('/mysql/json/json-abouttabs.php').then(function (response){
		$scope.abouttabs = response.data.abouttabs;
	});
	$log.info('AboutabsCtrl processed by $log service!');
}]);

// SkillsCtrl -- array block calling JSON from MySQL DB
app.controller('SkillsCtrl', ['$scope', '$http', '$log', function ($scope, $http, $log){
	$http.get('/mysql/json/json-skills.php').then(function (response){
		$scope.skills = response.data.skills;
	});
	$log.info('SkillsCtrl processed by $log service!');
}]);

// RefsCtrl -- array block calling JSON from MySQL DB 
app.controller('RefsCtrl', ['$scope', '$http', '$log', function ($scope, $http, $log){
	$http.get("/mysql/json/json-refs.php").then(function (response){
		$scope.refs = response.data.refs;
	});
	$log.info('RefsCtrl processed by $log service!');
}]);

// SamplesCtrl -- array block calling JSON from MySQL DB
app.controller('SamplesCtrl', ['$scope', '$http', '$log', '$window', function ($scope, $http, $log, $window){
	$http.get("/mysql/json/json-samples.php").then(function (response){
		$scope.samples = response.data.samples;
	});
	$log.info('SamplesCtrl processed by $log service!');
	$scope.greet = function(){
        $log.info('Instance of ng-click!');
        //$log.info(this);
      };
}]);

app.controller('EventsCtrl', ['$scope', '$log', function($scope, $log){
    $scope.showCont = false;
    $scope.clickFunc = function(){
        $scope.showCont = !$scope.showCont;
    }
    $scope.moverFunc = function(v){
    	$log.info(this);
        $log.info(v);
    };
    $log.info('EventsCtrl processed by $log service!');
}]);

/*************************************** Bootstrap ***************************************/

$(document).ready(function(){
	// Afix navbar
	$(".navbar").affix({
		offset: {
			top: $("header").outerHeight(true)
		}
	});
	$('[data-toggle="tooltip"]').tooltip();
	console.log('data-toggle1 processed!');
	$('[data-toggle="popover"]').popover();
	console.log('data-toggle2 processed!');
});

/*************************************** JQuery ***************************************/

$(document).ready(function(){

	$('#ngboot').fadeIn(2000);

	$("html, body").animate({
		scrollTop: 0
	}, "fast");
	//return false;

	// ScrollTop 
	$(window).scroll(function() {
        var H = $(window).height();

		if ($(document).scrollTop() > H*0.2) {
			$('#about').fadeIn(2000);
		}
        if ($(document).scrollTop() > H*0.4) {
            $('#recommend').fadeIn(2000);
        }
        if ($(document).scrollTop() > H*0.8) {
          $('#galleries').fadeIn(2000);
        }
        if ($(document).scrollTop() > H*1.6) {
          $('#samples').fadeIn(2000);
        }
        if ($(document).scrollTop() > H*3.2) {
          $('#contact').fadeIn(2000);
        } 
	});

	// For smooth scrolling to the anchor id position:
	$('#photo').hover(function(){
		$(this).css('width', '10rem').css('height', '10rem');
		console.log('#photo.hover() processed!');
	}, function(){
		$(this).css('width', '5rem').css('height', '5rem');
	});
	$('#navAbout').on("click tap", function (event){
		$('#about').fadeIn(2000);
		var id = $('#about'), 
			offset = -100,
			target = $(id).offset().top + offset;
		$('html, body').animate({
			scrollTop: target
		}, 500);
	});
	$('#navRecommend').on("click tap", function (event){
		$('#recommend').fadeIn(2000);
		var id = $('#recommend'),
			offset = -100,
			target = $(id).offset().top + offset;
		$('html, body').animate({
			scrollTop: target
		}, 500);

	});
	$('#navGalleries').on("click tap", function (event){
		$('#galleries').fadeIn(2000);
		var id = $('#galleries'),
			offset = -100,
			target = $(id).offset().top + offset;
		$('html, body').animate({
			scrollTop: target
		}, 500);
	});
	$('#navSamples').on("click tap", function (event){
		$('#samples').fadeIn(2000);
		var id = $('#samples'),
			offset = -100,
			target = $(id).offset().top + offset;
		$('html, body').animate({
			scrollTop: target
		}, 500);
	});
	$('#navContact').on("click tap", function (event){
		$('#contact').fadeIn(2000);
		var id = $('#contact'),
			offset = -100,
			target = $(id).offset().top + offset;
		$('html, body').animate({
			scrollTop: target
		}, 500);
	});
	$('#toTop').on("click tap", function (event){
		var id = $('#ngboot'),
			offset = -100,
			target = $(id).offset().top + offset;
		$('html, body').animate({
			scrollTop: target
		}, 500);
	});
	// Samples
	/*
	$('#ngboot #samples #samples-main .blocks').on('click', function(){
		alert(this);
		console.log('Samples .blocks click processed!');
	});
	*/
	
	// Footer
	$('#year').html(new Date().getFullYear());
});

/*************************************** Javascript ************************************/
// Refs

// Samples
function fnSamps(x){
	x.nextElementSibling.nextElementSibling.style.display = 'block';
}

function fnSampsX(x){
	x.nextElementSibling.nextElementSibling.style.display = 'none';
}

// For reference only -- DO NOT DELETE
/*$('body').on('click.collapse-next.data-api', '[data-toggle=collapse-next]', function (e){
	var $target = $(this).parent().next()
	$target.data('collapse') ? $target.collapse('toggle') : $target.collapse()
})*/
// HTML: <a class="accordion-toggle" data-toggle="collapse-next">