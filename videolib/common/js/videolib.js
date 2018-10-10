// Onload
$(function() {
    // Get JSON object for videos collection
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

            topnav = 
                "<li class='videolist' data='" + Object.entries(arrEntries[0][1])[x][1][0].DATA + "'>WHATEVER</li>"
            //    
            $('#topnav').append(topnav); // MUST use append() method for this.

            collection = 
                "<div class='videos off' id='" + Object.keys(arrEntries[0][1])[x] + "'><div class='name'>" + Object.keys(arrEntries[0][1])[x] + "</div>" +
                "<a href='" + Object.entries(arrEntries[0][1])[x][1][0].VPLAYER + "' target='_blank'><img id='vscreen' src=" + Object.entries(arrEntries[0][1])[x][1][0].IMGSRC + " />" +
                "<div class='desc'>" + Object.entries(arrEntries[0][1])[x][1][0].DESC + "</div>" + "</a>"
            //    
            $('#collection').append(collection); // MUST use append() method for this.
        });
        //- Method JQ each() approach looping thru 'arrEntries'

        // For nav#side .videolist

        var fnVideos = function(videoId){
            $(".videos").removeClass("on").addClass('off');
            $(videoId).removeClass("off").addClass("on");
        };
        
        //+ EDITABLE SECTION FOR COMPONENT LIST ADDITION
            $(".videolist").on("click", function(){
                var D = $(this).attr("data");
                fnVideos(D);
            });

        //- EDITABLE SECTION FOR COMPONENT LIST ADDITIONS

        // Hash in URL
        if (location.hash != ""){
            fnVideos(location.hash);
        }
    });
});