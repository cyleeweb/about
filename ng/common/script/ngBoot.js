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
    var H = $(window).height(); console.log("H: " + H);
    //console.log($("body").find(".track").length);

    var track0H = $(".track:eq(0)").height(); console.log("track0H#abouttabs: " + track0H); // #about
    var track1H = $(".track:eq(1)").height(); console.log("track1H#recommend: " + track1H); // #recommend
    var track2H = $(".track:eq(2)").height(); console.log("track2H#galleries: " + track2H); // #galleries
    var track3H = $(".track:eq(3)").height(); console.log("track3H#samples: " + track3H); // #samples
    var track4H = $(".track:eq(4)").height(); console.log("track4H#contact: " + track4H); // #contact
    //
    var trackTH = track0H + track1H + track2H + track3H + track4H; console.log("trackTH: " + trackTH);
    var FTop = 150; console.log("FTop: " + FTop);
    var Fac = 100; console.log("Fac: " + Fac);

    var SCRA = (FTop+track0H)+Fac; console.log ("SCRA: " + SCRA);
    var SCRB = (FTop+track0H+track1H+600)+Fac; console.log ("SCRB: " + SCRB);
    var SCRC = (FTop+track0H+track1H+600+track2H+300)+Fac; console.log ("SCRC: " + SCRC);
    var SCRD = (FTop+track0H+track1H+600+track2H+300+track3H+2800)+Fac; console.log ("SCRD: " + SCRD);

	// ScrollTop 
	$(window).scroll(function() {
        if ($(document).scrollTop() >= SCRA) {
            $('.track:eq(1)').fadeIn(2000); // #recommend
        }
        if ($(document).scrollTop() >= SCRB) {
            $('.track:eq(2)').fadeIn(2000); // #galleries
        }
        if ($(document).scrollTop() >= SCRC) {
            $('.track:eq(3)').fadeIn(2000); // #samples
        }
        if ($(document).scrollTop() >= SCRD) {
            $('.track:eq(4)').fadeIn(2000); // #contact
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