// JavaScript Document

/**************Change Properties Function********************/
<!--
function changeProp(objId,x,theProp,theValue) {
  var obj = null; with (document){ if (getElementById)
  obj = getElementById(objId); }
  if (obj){
    if (theValue == true || theValue == false)
      eval("obj.style."+theProp+"="+theValue);
    else eval("obj.style."+theProp+"='"+theValue+"'");
  }
}
//

/**************AJAX XHR Function********************/
var Request = false;
if (window.XMLHttpRequest) { //Try FireFox, Safari, Opera, IE 7 or higher
	Request = new XMLHttpRequest();
	} else if (window.ActiveXObject) { //Try ActiveX (Internet Explorer)
		Request = new ActiveXObject("Microsoft.XMLHTTP");
	}
//	
function xhr(url, elementID) {
if(Request) {
	var RequestObj = document.getElementById(elementID);
	Request.open("GET", url);
	Request.onreadystatechange = function() {
	if (Request.readyState == 4 && Request.status == 200) {
		RequestObj.innerHTML = Request.responseText;
		}
		}
	Request.send(null);
        }
	}

//

/**************AJAX XHR Function for Retrieving Images**************/
<!-- 
function xhrImage(fileName) {
if(Request) {
	Request.open("GET", fileName); 
	Request.onreadystatechange = function() { 
	if (Request.readyState == 4 && Request.status == 200) {
		document.getElementById("flickr-4pics").innerHTML = "<img src= " + 
		Request.responseText + ">";
		delete Request;
		Request = null;
		} 
		} 
	Request.send(null); 
        }
	}
//

/**************AJAX XHR Function for Projecting Images**************/
<!-- 
function projectImage(fileName) {
	var Request = false; 
	if (window.XMLHttpRequest) {
    Request = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
    Request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if(Request) {
    Request.open("GET", fileName); 
    Request.onreadystatechange = function() { 
    if (Request.readyState == 4 && Request.status == 200) {
    	document.getElementById("projectscreen").innerHTML = "<img src= " + Request.responseText + ">";
        delete Request;
        Request = null;
        } 
        } 
        Request.send(null); 
        }
      }
//-->


/**************Flickr's JSON API Function********************/
function apiFlickr (){
var apiURL = 'https://api.flickr.com/services/feeds/photos_public.gne?tagmode=any&format=json&jsoncallback=?';
	jQuery.getJSON(apiURL,
	function(data) {
		jQuery.each(data.items,
		function(i,item) {
			$("<img/>").attr("src", item.media.m).appendTo("#imgFlickr");
			if ( i == 7)
			return false;
    		});
	}); 
}

//
/**************Flickr's JSON SEARCH API Function********************/
function apiFlickrSearch (){
var RequestObj = document.searchform.searchfield.value;
	alert('Your searched: ' + RequestObj + '. Try a new tag next.');
	searchtag = RequestObj;
var apiURL = 'https://api.flickr.com/services/feeds/photos_public.gne?tags='+searchtag+'&tagmode=any&format=json&jsoncallback=?';
	jQuery.getJSON(apiURL,
	function(data) {
		jQuery.each(data.items,
		function(i,item) {
			$("<img/>").attr("src", item.media.m).appendTo("#imgFlickr");
			if ( i == 19)
			return false;
    		});
	}); 
}

//
/**************Google Maps API Function********************/
function apiGoogleMaps() {
    /*var latlng = new google.maps.LatLng(-34.397, 150.644);*///Sydney, Australia
	var latlng = new google.maps.LatLng(37.589701, -122.3858219); //Burlingame, CA
    var myOptions = {
      zoom: 8,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.TERRAIN
    };
    var map = new google.maps.Map(document.getElementById("googleMaps"),
        myOptions);
  }

//
/**************The xMark to close div Function********************/
function xMark(id) {
	document.getElementById(id).innerHTML = ""    
	}
//-->