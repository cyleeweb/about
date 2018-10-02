// Onload
$(function() {
    // Get external sidenav.html for nav#side
    $.get('./common/sidenav.html', function(navhtml) {
        $('.colleft').html(navhtml);

        // Toggle span#protocomps in the scope
        $("nav li .protocomps").on("click tap", function(){
            $("li div.videolist").fadeToggle(500);
        });

        $("nav li .uidocs").on("click tap", function(){
            $("li div.uidoclist").fadeToggle(500);
        });

        // Click .gutter to fadeToggle left column
        $(".gutter").on("click tap", function(){
            //$("nav#side").fadeToggle(100);
            $(".colleft").fadeToggle(500, function(){
            });
        });

        // Toggle .hero-inner
        $("#hero .hero-toggle").on("click tap", function(){
            //$("nav#side").fadeToggle(100);
            $("#hero .hero-inner").fadeToggle(500);
        });
    });
});

// Onload
$(function() {
    // Get JSON object for components collection
    $.getJSON("./common/json/videos.json", function(json) {

        // Convert object 'json' to arrays of arrKeys and arrEntries for parsing used in the Merthod JQ
        var arrKeys = Object.keys(json);
        var arrEntries = Object.entries(json);
        var jsonDate = json.DATE.date;
        //console.log(json); // {VIDEOS: {…},DATE: {…}}

        $("#updatedversion").text(jsonDate);

        //+ Method JQ each() approach looping thru 'arrEntries'
        $.each(Object.entries(arrEntries[0][1]), function(x, element) {

            //console.log(element); // VIDEOS
            // var collection; // optional?

            collection = 
                "<div class='videos off' id='" + Object.keys(arrEntries[0][1])[x] + "'><div class='name'>" + Object.keys(arrEntries[0][1])[x] + "</div>" +
                "<div class='screen'><iframe id='iframeSCREEN' src=" + Object.entries(arrEntries[0][1])[x][1][0].SCREEN + " frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>"
            //    
            $('#collection').append(collection); // MUST use append() method for this.
        });
        //- Method JQ each() approach looping thru 'arrEntries'

        // For nav#side .videolist

        var fnComps = function(compId){
            $(".videos").removeClass("on").addClass('off');
            $(compId).removeClass("off").addClass("on");
        };
        
        //+ EDITABLE SECTION FOR COMPONENT LIST ADDITION
            $("#v1, #v2, #v3, #v4, #v5, #v6, #v7").on("click", function(){
                var D = $(this).attr("data");
                fnComps(D);
            });

        //- EDITABLE SECTION FOR COMPONENT LIST ADDITIONS

        // Hash in URL
        if (location.hash != ""){
            fnComps(location.hash);
        }
    });
});