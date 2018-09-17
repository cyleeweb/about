<div id="contact" class="container">
<!-- Header -->
<header class="white">
	<div class="title fontPoiretOne28 fw-bold" ng-bind="siteVars.titleContact"></div>
	<h4 ng-bind="siteVars.bylineContact" class="byline" title="Feel free to contact me via email or this form with your comments or inquiries for a prompt reply to you. Thank you for visiting."></h4>
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
