<!DOCTYPE HTML>
<html ng-app="NgBoot" ng-jq="jQuery">
<head>
<title>Cyleeweb.com AngularJS + JQuery + Bootstrap</title>
<?php include("./common/metatag.php"); ?>
<?php include("./common/hub-cssdev.php"); ?>
<?php include("./common/hub-jsdev.php"); ?>
</head>
<body>
<div id="ngboot" class="container-fluid" ng-controller="SiteCtrl">
	<!-- NavBar --> 
	<a href="/" title="Cyleeweb.com"><img class="logo" src="/images/logo-cyleeweb.png"></a>
	<nav class="navbar navbar-inverse fontRaleway14">
		<div class="container-fluid">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
			</div>
			<div class="collapse navbar-collapse" id="myNavbar">
				<ul class="nav navbar-nav">
					<li id="navAbout" class="active"><a href="#about" ng-bind="siteVars.titleAbout"></a></li>
					<li id="navRecommend" class="active"><a href="#recommend" ng-bind="siteVars.titleRecommend"></a></li>
					<li id="navGalleries" class="active"><a href="#galleries" ng-bind="siteVars.titleGalleries"></a></li>
					<li id="navSamples" class="active"><a href="#samples" ng-bind="siteVars.titleSamples"></a></li>
					<li id="navContact" class="active"><a href="#contact" ng-bind="siteVars.titleContact"></a></li>
					<li id="navPHPAdaptive" class="active"><a href="/" target="_blank" ng-bind="siteVars.titlePHPAdaptive"></a></li>
				</ul>
			</div>
		</div>
	</nav>
	<!-- NavBar -->	

	<!-- Global Header -->
	<header id="global" class="white fontPoiretOne28 fw-bold" ng-bind="siteVars.titleGlobal1"></header>
	<!-- /Global Header -->

	<!-- About & What I do -->
	<div id="about" class="container">
		<!-- Header -->
		<header class="white">
			<div class="title fontPoiretOne28 fw-bold" ng-bind="siteVars.titleAbout"></div>
			<h4 class="byline">
				<abbr title="I have comprehensive knowledge and experience in server and client side technologies with layout and styling being my second nature.">
					<span ng-bind="siteVars.bylineAbout1"></span>
				</abbr>
			</h4>
		</header> 
		<!-- /Header -->
		<!-- Main -->
		<div id="about-main" class="row">
			<!-- My Information -->
			<div id="myinfo" class="col-lg-12 text-center clearfix clear">
				<span class="col-xs-12 col-sm-6 col-md-2 col-lg-2">
					<img id="photo" class="img-circle" src="/images/cylee-new1.jpg" width="50" height="50" title="Thank you for visiting!">
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
					<span>{{x.Title}}</span>:  <span class="skill">{{x.Span}}</span>, <br>
				</div>
			</h5>
			<!-- /My Knowledge -->

			<!-- What I Do -->
			<h3 id="whatido" class="white clear" ng-bind="siteVars.whatIdo"></h3>
			<!-- About Tabs -->
			<div class="open-close fontRaleway14">
				<span class="open-all glyphicon glyphicon-plus" title="Open All"></span>
				<span class="close-all glyphicon glyphicon-minus" title="Close All"></span>
			</div>
			<div id="about-tabs" class="blocks text-left white fontRaleway12 clearfix">
				<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
					<div class="tabs" title="{{siteVars.toggleToSee}}">
						<div class="tab-top" ng-bind="siteVars.aboutTab1"></div>
						<div class="tab-cont" ng-bind="siteVars.aboutTabContent1"></div>
					</div>	
				</div>
				<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
					<div class="tabs" title="{{siteVars.toggleToSee}}">
						<div class="tab-top" ng-bind="siteVars.aboutTab2"></div>
						<div class="tab-cont" ng-bind="siteVars.aboutTabContent2"></div>
					</div>
				</div>
				<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
					<div class="tabs" title="{{siteVars.toggleToSee}}">
						<div class="tab-top" ng-bind="siteVars.aboutTab3"></div>
						<div class="tab-cont" ng-bind="siteVars.aboutTabContent3"></div>
					</div>
				</div>
				<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
					<div class="tabs" id="#tab4" title="{{siteVars.toggleToSee}}">
						<div class="tab-top" ng-bind="siteVars.aboutTab4"></div>
						<div class="tab-cont" ng-bind="siteVars.aboutTabContent4"></div>
					</div>
				</div>
			</div>
			<!-- /About Tabs -->	
			<!--/ What I Do -->
		</div>
		<!-- /Main --> 
	</div>

	<!-- /About & What I Do -->

	<!-- Recommendations -->
	<div id="recommend" class="container">
		<!-- Header -->
		<header class="white">
			<div class="title fontPoiretOne28 fw-bold" ng-bind="siteVars.titleRecommend"></div>
			<h4 class="byline container">
				<abbr title="I am always thankful for the endorsements by my former/current colleagues.">
					<span ng-bind="siteVars.bylineRecommend"></span>
				</abbr>
			</h4>		
		</header> 
		<!-- /Header -->

		<!-- Main -->
		<div id='recommend-main' class="row">
			<div class="open-close fontRaleway14">
				<span class="open-all glyphicon glyphicon-plus" title="Open All"></span>
				<span class="close-all glyphicon glyphicon-minus" title="Close All"></span>
			</div>
			<!-- Refs -->
				<div class="refs text-left white fontRaleway12 clearfix" ng-controller="RefsCtrl">
					<div class='blocks col-lg-3 col-md-4 col-sm-6 col-xs-12' title="{{siteVars.toggleToSee}}" ng-repeat="x in refs">
						<div class="ref-tabs">
							<div class="tab-top" onClick="fnRefs(this);" title="Click for details">
								<a href="{{x.refLink}}" target="_blank"><span ng-bind="x.refName"></span></a><br>
								<span ng-bind="x.refTitle"></span><br>
								<span ng-bind="x.refComp"></span><br>
								<span ng-bind="x.refDate"></span>
							</div>
							<div class="tab-cont" onClick="fnRefsX(this);" ng-bind="x.refCont" title="Close"></div>
						</div>
					</div>
				</div>
			<!-- /Refs -->
		</div>
		<!-- /Main -->
	</div>

	<!-- /Recommendations -->
		
	<!-- Galleries -->
	<div id="galleries" class="container">
		<!-- Header -->
		<header class="white">
			<div class="title fontPoiretOne28 fw-bold" ng-bind="siteVars.titleGalleries"></div>
			<h4 class="byline container">
				<abbr title="These are many not all of my photography images when I was travelling often during my career path.">
					<span ng-bind="siteVars.bylineGalleries"></span>
				</abbr>
			</h4>		
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
	<!-- /Galleries -->	

	<!-- Samples -->
	<div id="samples" class="container-fluid">
		<!-- Header -->
		<header class="white">
			<div class="title fontPoiretOne28 fw-bold" ng-bind="siteVars.titleSamples"></div>
			<h4 class="byline container"><abbr title="Below are show cases of some enterprise level corporate sites that I've involved as a developer." ng-bind="siteVars.bylineSamples1"></abbr></h4>
		</header>
		<!-- Header -->
		
		<!-- Main -->
		<div id="samples-main" class="row" ng-controller="SamplesCtrl">
			<div class="fontRaleway14 white">
				<div class="blocks col-xs-12 col-sm-6 col-md-3 col-lg-3" ng-repeat="x in samples">
					<img onMouseOver="fnSamps(this);" class="img-responsive img-thumbnail" ng-src="{{x.Src}}" ng-title="{{x.Title}}" ng-click="greet();">
					<span ng-bind="$index+1" class="level"></span>
					<span ng-bind="x.Span" class="level pd-0-10"></span>
				</div>
			</div>
		</div>
		<!-- /Main -->
	</div>
	<!-- /Samples -->

	<!-- Contact -->
	<div id="contact" class="container">
	<!-- Header -->
	<header class="white">
		<div class="title fontPoiretOne28 fw-bold" ng-bind="siteVars.titleContact"></div>
		<h4 class="byline"><abbr title="Feel free to contact me via email or this form with your comments or inquiries for a prompt reply to you. Thank you for visiting." ng-bind="siteVars.bylineContact"></abbr></h4>
	</header>
	<!-- /Header -->
	<!-- Main -->
	<div id="contact-main" class="row">
		<!-- Contact Form -->
		<form novalidate role="form" name="Contact" id="Contact" action="/contact/script/mailform.php" method="post" enctype="x-www-form-encoded" onSubmit="return checkForm()" ng-init="readyLock=true">
			<fieldset class="fontRaleway12 black fw-bold">
				<legend>Please select your option:
					<input type="hidden" name="Subject" value="Cyleeweb.com Contact Form">
					<div class="form-group">
						<label for="Inquiry">Inquire Information
							<input type="radio" name="Option" value="Inquiry" autofocus>
						</label>
						<label for="Request Password">Request Password
							<input type="radio" name="Option" value="RequestPassword">
						</label>
						<span class="require">*</span>
					</div>
					<div class="form-group">
						<input type="text" name="FullName" id="FullName" size="30" maxlength="30" ng-model="vName" placeholder="Name" required>
						<span class="require">*</span>
					</div>
					<div class="form-group">
						<input type="text" name="Email" id="Email1" size="30" maxlength="30" ng-model="vEmail" placeholder="Email" required>
						<span class="require">*</span>
					</div>
					<div class="form-group">
						<textarea name="Comments" id="Comments" ng-model="vComment" placeholder="Any comments?"></textarea>
					</div>
				</legend>
				<div>Your have filled in:
					<div>Name: <span ng-bind="vName" class="marine"></span></div>
					<div>Email: <span ng-bind="vEmail" class="marine"></span></div>
					<div>Comment: <span ng-bind="vComment" class="marine"></span></div>
					<div class="form-group"><input type="reset" title="Click to Reset" ng-click="reset()"></div>
					<div class="form-group"><input type="checkbox" ng-model="readyLock"/> When ready, uncheck this to unlock Send.</div>
				</div>
				<div class="form-group"><input type="submit" value="Send" title="Click to Send" ng-disabled="readyLock"></div>
			</fieldset>
		</form>
		<!-- /Contact Form --> 
	</div>
	<!-- /Main -->
	</div>
	<!-- /Contact -->

	<!-- Footer -->
	<footer id="footer" class="row">
		<!-- Main -->
		<h4 id="footer-main" class="col-xs-12 col-sm-12 col-md-12 col-lg-12 white">
			<span class="glyphicon glyphicon-registration-mark" ng-click='clickMe(this)'></span>
			<span id="year"></span> - <a href="/">CyleeWeb.com</a>
		</h4>
		<!-- /Main -->
	</footer>
	<!-- /Footer -->

	<!-- ToTop -->
	<div id="toTop" title="Back to Top">
		<a href="#ngboot"><img class="img-responsive"  src="/images/arrowup.png"></a>
	</div>
	<!-- /ToTop -->
</div>

<!-- Additional JS Depenencies -->
</body>
</html>