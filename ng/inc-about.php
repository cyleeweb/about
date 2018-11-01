<div id="about" class="container track">
	<!-- Header -->
	<header class="white">
		<div class="title fontPoiretOne28 fw-bold" ng-bind="siteVars.titleAbout"></div>
		<h4 class="byline">
			<div ng-bind="siteVars.bylineAbout1" title="I have comprehensive knowledge and experience in server and client side technologies with layout and styling being my second nature."></div>
		</h4>
	</header> 
	<!-- /Header -->
	<!-- Main -->
	<div id="about-main" class="row">
		<!-- My Information -->
		<div id="myinfo" class="col-lg-12 text-center clearfix clear">
			<span class="col-xs-12 col-sm-6 col-md-2 col-lg-2">
				<img id="photo" class="img-circle" src="/images/cylee-2018.jpg" width="50" height="50" title="Thank you for visiting!">
			</span>
			<span class="col-xs-12 col-sm-6 col-md-4 col-lg-4 fontRaleway12 glyphicon glyphicon-envelope"> LinkedIn<br>
				<a href="{{siteVars.cyleeLinkedIn}}" target="_blank" title="LinkedIn Profile" ng-bind="siteVars.cyleeLinkedIn"></a>
			</span>
			<span class="col-xs-12 col-sm-6 col-md-3 col-lg-3 fontRaleway12 glyphicon glyphicon-envelope"> Primary Email<br>
				<a href="mailto:{{siteVars.cyleeEmailPri}}" title="Email" ng-bind="siteVars.cyleeEmailPri"></a>
			</span>
			<span class="col-xs-12 col-sm-6 col-md-3 col-lg-3 fontRaleway12 glyphicon glyphicon-envelope"> Secondary Email<br>
				<a href="mailto:{{siteVars.cyleeEmailSec}}" title="Email" ng-bind="siteVars.cyleeEmailSec"></a>
			</span>
		</div>		
		<!-- /My Information -->

		<!-- My Knowledge -->
		<h3 id="knowledge-exp" class="white clear" ng-bind="siteVars.knowledgeExp"></h3>
		<h5 id="skills" class="aqua" ng-controller="SkillsCtrl">
			<div id="core" ng-repeat="x in skills">
				<span>{{x.sklArea}}</span>:  <span class="skill">{{x.sklSpan}}</span>, <br>
			</div>
		</h5>
		<!-- /My Knowledge -->

		<!-- What I Do -->
		<h3 id="whatido" class="white clear" ng-bind="siteVars.whatIdo"></h3>
		<!-- About Tabs -->

		<div id="about-tabs" class="blocks text-left white fontRaleway12 clearfix" title="{{siteVars.toggleToSee}}" ng-controller="AbouttabsCtrl">
			<div class="" ng-controller="EventsCtrl" ng-click="clickFunc()">
				<div class="tabs col-lg-3 col-md-3 col-sm-6 col-xs-12" ng-repeat="x in abouttabs">
					<div class="tab-top">{{x.tabTitle}}</div>
					<div class="tab-cont" ng-show="showCont">{{x.tabSpan}}</div>
				</div>	
			</div>
			
		</div>
		<!-- /About Tabs -->	
		<!--/ What I Do -->
	</div>
	<!-- /Main --> 
</div>
