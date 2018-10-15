<!-- imgFlickr -->
<div id="imgFlickr" style="margin:0 auto; width:800px; height:auto; padding:10px 10px 0 10px;" title="Courtesy: Flickr Public API"></div>
<!-- /imgFlickr -->
	
<div id="apiFlickrDisplay" style="margin-bottom:10rem">
  <div>
  <!-- xMark div -->
  <?php include("../common/ssi-xmark-modules.html"); ?>
  <!-- /xMark div --> 

  <!-- Refresh -->
  <div class="rMark"><a href="#" onClick="javascript: xhr('/modules/aj-apiflickr.php','ajax-display')">R</a></div>
  <!-- /Refresh -->
  <div style="clear:both;"></div>
  </div>

<div>
  <form name="searchform" style="margin:0 auto;">
  <input id="apiflickr" type="button" value="Click to display randomly generated photos from Flickr's Public API" onclick = "apiFlickr()" />
  <div class="sp10"></div>
  <input id="searchfield" name="searchfield" type="text" value="Type a tag here" size="20" class="p10" />
  <input id="submit" type="button" value="Click to display up to 20 photos for your tag from Flickr's Public Search API" onclick = "apiFlickrSearch()" />
  </form>
</div>
</div>

<?php include("../common/inc-subscript.php"); ?>

