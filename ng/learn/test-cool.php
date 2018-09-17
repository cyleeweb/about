<!DOCTYPE html>
<html>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<body>

<div ng-app="cyleeNgboot" ng-controller="SamplesController"> 

<ul>
  <li ng-repeat="x in samples">
	  <img class="img-responsive hello" ng-src="{{x.Src}}" title="{{x.Title}}"><span>{{x.Span}}</span>
  </li>
</ul>

</div>

<script>
var app = angular.module('cyleeNgboot', []);
app.controller('SamplesController', function($scope, $http) {
  $http.get("/common/script/json-samples.php")
  .then(function (response) {$scope.samples = response.data.samples;});
});
</script>

</body>
</html>
