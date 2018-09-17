<!DOCTYPE html>
<html>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<body>

<div ng-app="cyleeNgboot" ng-controller="RefsController"> 

<ul>
  <li >
	  {{x.refName}} + {{x.refLink}} + {{x.refTitle}} + {{x.refComp}} + {{x.refDate}} + {{x.refCont}}
  </li>
</ul>

</div>

<script>
var app = angular.module('cyleeNgboot', []);
app.controller('RefsController', function($scope, $http) {
	$http.get("/common/script/json-refs.js")
		.then(function (response) {$scope.refs = response.data.refs;});
});
</script>

</body>
</html>
