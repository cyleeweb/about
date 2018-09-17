<div id="recommend" class="container">
	<!-- Header -->
	<header class="white">
		<div class="title fontPoiretOne28 fw-bold" ng-bind="siteVars.titleRecommend"></div>
		<h4 ng-bind="siteVars.bylineRecommend" class="byline container" title="I am always thankful for the endorsements by my former/current colleagues."></h4>		
	</header> 
	<!-- /Header -->

	<!-- Main -->
	<div id='recommend-main' class="row" ng-controller="EventsCtrl" ng-click="clickFunc()" title="{{siteVars.toggleToSee}}">

		<!-- Refs -->
			<div class="refs text-left white fontRaleway12 clearfix" ng-controller="RefsCtrl">
				<div class='blocks col-lg-3 col-md-4 col-sm-6 col-xs-12' ng-repeat="x in refs" >
					<div class="ref-tabs">
						<div class="tab-top" >
							<a href="{{x.refLink}}" target="_blank"><span ng-bind="x.refName" title="Link to LinkedIn profile"></span></a><br>
							<span ng-bind="x.refTitle"></span><br>
							<span ng-bind="x.refComp"></span><br>
							<span ng-bind="x.refDate"></span>
						</div>
						<div class="tab-cont" ng-bind="x.refCont" ng-show="showCont"></div>
					</div>
				</div>
			</div>
		<!-- /Refs -->
	</div>
	<!-- /Main -->
</div>
