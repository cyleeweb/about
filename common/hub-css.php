<!-- Dev -->
<?php if (($_SERVER['PHP_SELF'] === '/index-dev.php') || ($_SERVER['HTTP_HOST'] === 'localhost'))
echo "
<link rel='stylesheet' type='text/css' href='/common/css/reset-new.css'>
<!--<link rel='stylesheet' type='text/css' href='http://fonts.googleapis.com/css?family=Noto+Sans|Poiret+One' >-->
<!--<link rel='stylesheet' type='text/css' href='/common/css/normalize.css'>-->
<link rel='stylesheet' type='text/css' href='/common/css/fonts/font-awesome.min.css'>
<link rel='stylesheet' type='text/css' href='/common/css/fonts/fonts.css'>
<link rel='stylesheet' type='text/css' href='/common/css/cyleeweb.css'>
<link rel='stylesheet' type='text/css' href='/common/css/html5.css'>
<link rel='stylesheet' type='text/css' href='/common/css/divgrid.css'>
<link rel='stylesheet' type='text/css' href='/mysql/common/css/apps.css'>
";
?>

<!-- Productdion -->
<?php if (($_SERVER['PHP_SELF'] === '/index.php') || ($_SERVER['HTTP_HOST'] === 'www.cyleeweb.com') || ($_SERVER['HTTP_HOST'] === 'cyleeweb.com')) 
echo "
<link rel='stylesheet' type='text/css' href='/common/css/fonts/font-awesome.min.css'>
<link rel='stylesheet' type='text/css' href='/common/dist/libs.min.css'>
<link rel='stylesheet' type='text/css' href='/common/dist/cyleemerged.min.css'>
";
?>
