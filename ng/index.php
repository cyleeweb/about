<!DOCTYPE HTML>
<html ng-app="NgBoot" ng-jq="jQuery">
<head>
<title>Cyleeweb.com AngularJS + JQuery + Bootstrap</title>
<?php include("./common/metatag.php"); ?>
<?php include("./common/hub-css.php"); ?>
<?php include("./common/hub-js.php"); ?>
</head>
<body>
<div id="ngboot" class="container-fluid" ng-controller="SiteCtrl">
	<!-- NavBar --> 
	<ng-include src="'./inc-navbar.php'"></ng-include>
	<!-- NavBar -->	
	
	<!-- Global Header -->
	<ng-include src="'./inc-header.php'"></ng-include>
	<!-- /Global Header -->
	
	<!-- About & What I do -->
	<ng-include src="'./inc-about.php'"></ng-include>
	<!-- /About & What I Do -->
	
	<!-- Recommendations -->
	<ng-include src="'./inc-recommend.php'"></ng-include>
	<!-- /Recommendations -->
		
	<!-- Galleries -->
	<ng-include src="'./inc-galleries.php'"></ng-include>
	<!-- /Galleries -->	
	
	<!-- Samples -->
	<ng-include src="'./inc-samples.php'"></ng-include>
	<!-- /Samples -->
	
	<!-- Contact -->
	<ng-include src="'./inc-contact.php'"></ng-include>
	<!-- /Contact -->
	
	<!-- Footer -->
	<ng-include src="'./inc-footer.php'"></ng-include>
	<!-- /Footer -->
	
	<!-- ToTop -->
	<ng-include src="'./inc-totop.php'"></ng-include>
	<!-- /ToTop -->
</div>

<!-- Additional JS Depenencies -->
</body>
</html>