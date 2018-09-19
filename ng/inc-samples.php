<div id="samples" class="container-fluid track">
	<!-- Header -->
	<header class="white">
		<div class="title fontPoiretOne28 fw-bold" ng-bind="siteVars.titleSamples"></div>
		<h4 ng-bind="siteVars.bylineSamples1" class="byline container" title="Below are show cases of some enterprise level corporate sites that I've involved as a developer."></h4>
	</header>
	<!-- Header -->
	
	<!-- Main -->
	<div id="samples-main" class="row" ng-controller="EventsCtrl">
		<div class="fontRaleway14 white" ng-controller="SamplesCtrl">
			<div class="blocks col-xs-12 col-sm-6 col-md-3 col-lg-3" ng-repeat="x in samples">
				<a href="{{x.Url}}" target="_blank"><img class="img-responsive img-thumbnail" ng-src="{{x.Src}}" ng-title="{{x.Title}}" ng-click="greet();" ng-mouseover="moverFunc(x.Span)"></a>
				<span ng-bind="$index+1" class="level"></span>
				<span ng-bind="x.Span" class="level pd-0-10"></span>
			</div>
		</div>
	</div>
	<!-- /Main -->
</div>
