<!-- Dev -->
<?php if ($_SERVER['PHP_SELF'] === '/index-dev.php')
echo "
	<script src='/common/script/lib/jquery.3.1.1.min.js'></script>
	<script src='/common/script/lib/jquery.tools.min.js'></script>
	<script src='/common/script/lib/jquery.timer.js'></script>
	<script src='/common/script/lib/modernizr.js'></script>
	<script src='/common/script/lib/swipesense.js'></script>
	<script src='/common/script/lib/mustache.min.js'></script>
	<script src='/common/script/lib/knockout-3.4.0.js'></script>
	<script src='/common/script/lib/ga.js'></script>
	<script src='/common/script/fn.jquery.main.js'></script>
	<script src='/common/script/fn.jquery.sub.js'></script>
	<script src='/common/script/fn.javascript.js'></script>
	<script src='/common/script/checkform.js'></script>
	<script src='/common/script/videos.js'></script>
	<script src='/common/script/geoloc.js'></script>
	<script src='/common/script/mustache-samples.js'></script>
	<script src='/common/script/fn.css.append.js'></script>
";
?>

<!-- Productdion -->
<?php if (($_SERVER['PHP_SELF'] === '/index.php') || ($_SERVER['HTTP_HOST'] === 'www.cyleeweb.com') || ($_SERVER['HTTP_HOST'] === 'cyleeweb.com')) 
echo "
	<script src='/common/dist/libs.min.js'></script>
	<script src='/common/dist/cyleecatmin-main.js'></script>
";
?>