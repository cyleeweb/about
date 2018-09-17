// MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// ROUTES
weatherApp.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'pages/home.html',
		controller: 'homeController'
	})
	.when('/forecast', {
		templateUrl: 'pages/forecast.html',
		controller: 'forecastController'
	})
	.when('/forecast/:days', {
		templateUrl: 'pages/forecast.html',
		controller: 'forecastController'
	})
});

// SERVICES
weatherApp.service('cityService', function() {
	this.city = "New York, NY";
});

// CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService){
	$scope.city = cityService.city;
	$scope.$watch('city', function(){
		cityService.city = $scope.city;
	});
	$scope.submit = function(){
		$location.path("/forecast");
	};
}]);
weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService){
	$scope.city = cityService.city;
	$scope.days = $routeParams.days || '2';
	$scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=3e41aaff88c829f85c8ffbfb6ad2e0c1", {callback: "JSON_CALLBACK" }, { get: {method: "JSONP" }});
	$scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt:$scope.days });
	$scope.convertToFarenheit = function(degK) {
		return Math.round((1.8 * (degK - 273)) + 32);
	}
	$scope.convertToDate = function(dt) {
		return new Date(dt * 1000);
	}
	
	
	// console.log($scope.weatherResult);
	
}]);