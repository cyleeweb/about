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
app.controller('SiteCtrl', ['$scope', '$http', function ($scope, $http){
	$http.get('/ng/common/script/json-sitevars.php').then(function (response){
		$scope.siteVars = response.data.siteVars;
	});
	console.log('SiteCtrl executed!');
}]);

// SkillsCtrl -- array block calling JSON
app.controller('SkillsCtrl', ['$scope', '$http', function ($scope, $http){
	$http.get('/ng/common/script/json-skills.php').then(function (response){
		$scope.skills = response.data.skills;
	});
	console.log('SkillsCtrl executed!');
}]);

// RefsCtrl -- array block calling JSON from MySQL DB 
app.controller('RefsCtrl', ['$scope', '$http', function ($scope, $http){
	$http.get("/mysql/json/json-refs.php").then(function (response){
		$scope.refs = response.data.refs;
	});
	console.log('RefsCtrl executed!');
}]);

// SamplesCtrl -- array block calling JSON from MySQL DB
app.controller('SamplesCtrl', ['$scope', '$http', '$window', function ($scope, $http, $window){
	$http.get("/mysql/json/json-samples.php").then(function (response){
		$scope.samples = response.data.samples;
	});
	console.log('SamplesCtrl executed!');
	$scope.greet = function(){
        console.log('Instance of ng-click!');
        //console.log(this);
      };
    
}]);

app.controller('EventCtrl', function($scope){
    $scope.showCont = false;
    $scope.clickFunc = function(){
        $scope.showCont = !$scope.showCont;
    }
    $scope.moverFunc = function(v){
    	console.log(this);
        console.log(v);
    }
});

/*************************************** Bootstrap ***************************************/

$(document).ready(function(){
	// Afix navbar
	$(".navbar").affix({
		offset: {
			top: $("header").outerHeight(true)
		}
	});
	$('[data-toggle="tooltip"]').tooltip();
	console.log('data-toggle1 executed!');
	$('[data-toggle="popover"]').popover();
	console.log('data-toggle2 executed!');
});

/*************************************** JQuery ***************************************/

$(document).ready(function(){
	$("html, body").animate({
		scrollTop: 0
	}, "fast");
	//return false;
	// For smooth scrolling to the anchor id position:
	$('#photo').hover(function(){
		$(this).css('width', '10rem').css('height', '10rem');
		console.log('photo hover executed!');
	}, function(){
		$(this).css('width', '5rem').css('height', '5rem');
	});
	$('#navAbout').on("click tap", function (event){
		var id = $('#about'),
			offset = -100,
			target = $(id).offset().top + offset;
		$('html, body').animate({
			scrollTop: target
		}, 500);
	});
	$('#navRecommend').on("click tap", function (event){
		var id = $('#recommend'),
			offset = -100,
			target = $(id).offset().top + offset;
		$('html, body').animate({
			scrollTop: target
		}, 500);
	});
	$('#navGalleries').on("click tap", function (event){
		var id = $('#galleries'),
			offset = -100,
			target = $(id).offset().top + offset;
		$('html, body').animate({
			scrollTop: target
		}, 500);
	});
	$('#navSamples').on("click tap", function (event){
		var id = $('#samples'),
			offset = -100,
			target = $(id).offset().top + offset;
		$('html, body').animate({
			scrollTop: target
		}, 500);
	});
	$('#navContact').on("click tap", function (event){
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
	$('#ngboot #samples #samples-main .blocks').on('click', function(){
		alert(this);
		console.log('Samples .blocks click executed!');
	});
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