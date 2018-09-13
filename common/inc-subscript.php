<?php
// Localhost
if ($_SERVER['HTTP_HOST'] === 'localhost') { ?>
<script>
$.getScript("/common/script/fn.jquery.sub.js", function(){});
</script>
<?php } ?>

<?php 
// Cyleeweb.com
if (($_SERVER['HTTP_HOST'] === 'www.cyleeweb.com') || ($_SERVER['HTTP_HOST'] === 'cyleeweb.com')) { ?>
<script>
  $.getScript("/common/dist/cyleecatmin-sub.js", function(){});
</script>
<?php } ?>