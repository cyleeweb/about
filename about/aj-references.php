<!-- References Div -->
    <!-- xMark div -->
    <?php include("../common/ssi-xmark-about.html"); ?>
    <!-- /xMark div -->

<article id="references">    
    <div>
	    <span>Download:
	        <a href="/about/cyleereference.doc" target="_blank">WORD</a> |
	        <a href="/about/cyleereference.pdf" target="_blank">PDF</a>
	    </span>
	    
		<span class="floatR">
	        <a id="openAll">Open All</a> |
	        <a id="closeAll">Close All</a>
		</span>
		<span style="clear:both;"></span>
    </div>
    
    <div id="refs"></div>
</article>
<!-- /References Div -->

<!-- Dynamic binding with JQ.get() to a JSON data set from MySQL -->

<script>
$(function(){
    $.getJSON("/mysql/json/json-refs.php", function(data, status, xhr){
        console.log(data);
        console.log(status);
        console.log(xhr);
        console.log(data.refs.length);

        var render="", i="";
        for(i=0; i<data.refs.length; i++){
            render += '<div class="section"><a href=' + data.refs[i].refLink + ' target="_blank">'
            + data.refs[i].refName + '</a>, '
            + data.refs[i].refTitle
            + data.refs[i].refComp + ', '
            + data.refs[i].refDate + ':</div><p>'
            + data.refs[i].refCont + '</p>'
          }

        $('#refs').html(render);
        $("#references .section").bind("click", function(){
        $(this).next().toggle(300);
        $(this).css("color", "#397486").css("font-weight", "bold");
        });
        $("#references p").bind("click", function(){
        $(this).fadeOut(300);
        });
      });
}); 
</script>

<?php include("../common/inc-subscript.php"); ?>