<div id="galleries" class="container">
	<!-- Header -->
	<header class="white">
		<div class="title fontPoiretOne28 fw-bold" ng-bind="siteVars.titleGalleries"></div>
		<h4 ng-bind="siteVars.bylineGalleries" class="byline container" title="These are many not all of my photography images when I was travelling often during my career path."></h4>		
	</header> 
	<!-- /Header -->
	<!-- Main-->
	<div id="galleries-main" class="row">
		<!-- EXhibits Nav -->
		<ng-include src="'/ng/inc-galleries-nav.html'"></ng-include>
		<!-- /Exhibit Nav -->
		<!-- Exhibits -->
		<div ng-view></div>
		<!-- /Exhibit -->
	</div>
</div>