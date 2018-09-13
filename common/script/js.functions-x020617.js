//JavaScript All Functions

/**************Get and Check Browser Functions********************/
function getIEVersion() {
    var rv = -1; // Return value assumes failure.
    if (navigator.appName == 'Microsoft Internet Explorer') {
        var ua = navigator.userAgent;
        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat(RegExp.$1);
    }
    return rv;
}

function checkIEVersion() {
    var ver = getIEVersion();
    if (ver > -1 && ver <8.0) {  
			alert("This website supports Windows IE 7+, Firefox, Safari, Opera, SeaMonkey and Chrome.");
    } 
}

/**************Change Properties Function********************/
function changeProp(objId,x,theProp,theValue) {
  var obj = null; with (document){ if (getElementById)
  obj = getElementById(objId); }
  if (obj){
    if (theValue == true || theValue == false)
      eval("obj.style."+theProp+"="+theValue);
    else eval("obj.style."+theProp+"='"+theValue+"'");
  }
}

/**************AJAX XHR Function********************/
var Request = false;
if (window.XMLHttpRequest) { //Try FireFox, Safari, Opera, IE 7 or higher
	Request = new XMLHttpRequest();
	} else if (window.ActiveXObject) { //Try ActiveX (Internet Explorer)
		Request = new ActiveXObject("Microsoft.XMLHTTP");
	}
function xhr(url, elementID) {
if(Request) {
	var RequestObj = document.getElementById(elementID);
	document.getElementById("DataRetrieving").style.visibility = "visible"; // Data Retrieving is starting 
	Request.open("GET", url);
	Request.onreadystatechange = function() {
	if (Request.readyState == 4 && Request.status == 200) {
		RequestObj.innerHTML = Request.responseText;
		document.getElementById("DataRetrieving").style.visibility = "hidden"; // Data Retriving is complete
		}
		}
	Request.send(null);
        }
	}

/**************AJAX XHR Function for Retrieving Images**************/
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

/**********AJAX XHR Function for Projector Images via Text Reference***********/
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
    	document.getElementById("projectScreen").innerHTML = "<img src= " + Request.responseText + ">";
        delete Request;
        Request = null;
        } 
        } 
        Request.send(null); 
        }
      }

/**********AJAX XHR Function for Projector Images via XML Node Reference***********/
function getXMLData(targetData) { 
var Request = false 
var docElement; 
if (window.XMLHttpRequest) { 
Request = new XMLHttpRequest(); 
} else if (window.ActiveXObject) { 
Request = new ActiveXObject("Microsoft.XMLHTTP");
} 
if(Request) {
document.getElementById("DataRetrieving").style.visibility = "visible"; // Data Retrieving is starting 	
Request.open("GET", "/modules/projectscreen.xml"); 
Request.onreadystatechange = function() { 
if (Request.readyState == 4 && Request.status == 200) {
var xmlDoc = Request.responseXML; 
ClearOutWhiteSpace(xmlDoc) // calling the function below to clear the empty space/emptytextnode in the .xml document in Safari and Firefox browsers

docElement = xmlDoc.documentElement; //reference to the root element of the entire XML file
// begin Child nodes
child1 = docElement.firstChild; //reference it using the firstChild property
textNode1 =child1.firstChild; 
targetData1 = textNode1.nodeValue;
//
child2 = child1.nextSibling; //reference it using the nextSibling property
textNode2 = child2.firstChild;
targetData2 = textNode2.nodeValue;
//
child3 = child2.nextSibling; //reference it using the nextSibling property
textNode3 = child3.firstChild;
targetData3 = textNode3.nodeValue;
//
child4 = child3.nextSibling; //reference it using the nextSibling property
textNode4 = child4.firstChild;
targetData4 = textNode4.nodeValue;
//
child5 = child4.nextSibling; //reference it using the nextSibling property
textNode5 = child5.firstChild; //TEXT node object for the firstChild property
targetData5 = textNode5.nodeValue; //text node value of the referenced child
//
if (targetData == 'data1'){
document.getElementById("projectScreen").innerHTML = "<img src= " + targetData1 + ">";}
if (targetData == 'data2'){
document.getElementById("projectScreen").innerHTML = "<img src= " + targetData2 + ">";}
if (targetData == 'data3') {
document.getElementById("projectScreen").innerHTML = "<img src= " + targetData3 + ">";}
if (targetData == 'data4') {
document.getElementById("projectScreen").innerHTML = "<img src= " + targetData4 + ">";}
if (targetData == 'data5') {
document.getElementById("projectScreen").innerHTML = "<img src= " + targetData5 + ">";}
//
document.getElementById("DataRetrieving").style.visibility = "hidden"; // Data Retriving is complete
}
} 
} 
Request.send(null); 
}

// This function removes the empty space/emptytextnode in the .xml document in Safari and Firefox browsers
function ClearOutWhiteSpace(xmlFile) { 
var i = 0; 
for (i = 0; i < xmlFile.childNodes.length; i++) {
var tag = xmlFile.childNodes[i]; 
if (tag.nodeType == 1) {
ClearOutWhiteSpace(tag); 
} 
if ((tag.nodeType == 3) && (/^\s+$/.test(tag.nodeValue))) { 
xmlFile.removeChild(xmlFile.childNodes[i--]);
} 
}
}

/**************Flickr's JSON API Function********************/
function apiFlickr (){
var apiURL = 'https://api.flickr.com/services/feeds/photos_public.gne?tagmode=any&format=json&jsoncallback=?';
	jQuery.getJSON(apiURL, function(data) {
		jQuery.each(data.items, function(i,item) {
			$("<img/>").attr("src", item.media.m).appendTo("#imgFlickr");
			if ( i == 7)
			return false;
    		});
	}); 
}

/**************Flickr's JSON SEARCH API Function********************/
function apiFlickrSearch (){
var RequestObj = document.searchform.searchfield.value;
	alert('Your searched: ' + RequestObj + '. Try a new tag next.');
	searchtag = RequestObj;
var apiURL = 'https://api.flickr.com/services/feeds/photos_public.gne?tags='+searchtag+'&tagmode=any&format=json&jsoncallback=?';
	jQuery.getJSON(apiURL, function(data) {
		jQuery.each(data.items, function(i,item) {
			$("<img/>").attr("src", item.media.m).appendTo("#imgFlickr");
			if ( i == 19)
			return false;
    		});
	}); 
}

/**************The xMark to close div Function********************/
function xMark(id) {
	window.scrollTo(0, 0);
	document.getElementById(id).innerHTML = ""; //
	document.getElementById(id).style.display = "none"; //double down the previous line

	}

/************** General Functions ********************/
function writeText(cell) {
	if (cell != 'r9c3'){
	var text = 'This is grid cell #'+ cell + '.';
	}
	else {
		text = 'This is grid cell #'+ cell + ' -- the last grid cell of this 27-cell css tableless grid. Try other cells and thank you for trying.';
	}
	document.getElementById("desc").innerHTML=text;
}

function changeBgOver(cell) {
document.getElementById(cell).style.backgroundColor='#4188a2';
}

function changeBgOut(cell) {
document.getElementById(cell).style.backgroundColor='#94bccb';
}

function checkMessage(cell) {
	if (cell != 'r5c2'){
  	var message = 'Sorry, ' + cell + ' is not the Daily Double cell. Please try again.';
	}
	else {
  	var message = 'Congratualations! ' + cell + ' is the Daily Double cell. Click R to refresh the page or X to close this window.';
	}	
	var sayAlert = function() { alert(message); }
  	sayAlert();
}

function showDiv(id) {
document.getElementById(id).style.visibility='visible';
}

function hideDiv(id) {
document.getElementById(id).style.visibility='hidden';
}

/************** OpenWindow Function ********************/
function popWin(url, width, height, name, properties) { //v6.0
	var winProperties = properties;
	if (!winProperties) winProperties = 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no';
	if (width > 0) winProperties = winProperties + ',width=' + width;
	if (height > 0) winProperties = winProperties + ',height=' + height;
	if(!name) name = "popWin";
	var win = window.open(url, name, winProperties);
	win.focus();
}
//-->

/************** Format Currency Functions ********************/
function formatCurrency(num) {
     num = num.toString().replace(/\$|\,/g,'');
     if(isNaN(num))
       num = "0";
     sign = (num == (num = Math.abs(num)));
     num = Math.floor(num*100+0.50000000001);
     cents = num%100;
     num = Math.floor(num/100).toString();
     if(cents<10)
       cents = "0" + cents;
     for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
       num = num.substring(0,num.length-(4*i+3))+','+ num.substring(num.length-(4*i+3));
     //return (((sign)?'':'-') + '$' + num + '.' + cents);
     return (((sign)?'':'-') + num + '.' + cents);
}

function display(str) {
     document.write(formatCurrency(str));
}

/************** Set Sursor Function ********************/
function setCursor(){
	document.AuthForm.AuthCode.focus();
}

/************** AuthForm authForm Function ********************/
function authForm(AuthForm)
{
	if (document.AuthForm.AuthCode.value == ''){ 
	alert ("Please provide a valid guest password for this area. Thank you.");
	document.AuthForm.AuthCode.focus();
	return false;
	}
}

/**************** Contact Form checkForm function ***********************/
function checkForm(Contact)
{
if (document.Contact.Option[0].checked == false && document.Contact.Option[1].checked == false) {
	alert ("Please select one of the options:\nInquiry or Request Password")
	return false;
	}

//Option One starts here --

		if (document.Contact.FullName.value == ''){ 
	    alert ("May I have your name?");
		document.Contact.FullName.focus();
		return false;
		}
		if (document.Contact.Email1.value == ''){ 
	    alert ("Please provide your email address.");
		document.Contact.Email1.focus();
		return false;
		}
		
//Begin Email address format validation --------------------------------------------
		if (document.Contact.Email.value != ''){
			var AtSymbol = document.Contact.Email.value.indexOf('@')
			var Period   = document.Contact.Email.value.lastIndexOf('.')
			var Space    = document.Contact.Email.value.indexOf(' ')
			var Length   = document.Contact.Email.value.length-1

			if ((AtSymbol < 1) || (Period <= AtSymbol+1) || (Period == Length ) || (Space  != -1)) {  
      			alert('Please re-enter a valid e-mail address!')
      			document.Contact.Email.focus();
   				return false;
				}		
		}	
//End of email address FORMAT validation --------------------------------------------
	{
	alert("Thanks for your submission. I'll be in touch soon.\n\nClick OK to go back to the cyleeweb.com homepage.");	
	return true;
	}		
}

/************** HTML5 Page Experiemnt Function ********************/
function resCalc()
{
numA=document.getElementById("num_a").value;
numB=document.getElementById("num_b").value;
document.getElementById("result").value=Number(numA)+Number(numB);
}
// -->

/************** Display Local Time Function ********************/
function startTime()
{
var today=new Date();
var y=today.getFullYear();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('time').innerHTML=+y+" ("+h+":"+m+":"+s+")";
t=setTimeout('startTime()',500);
}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
// -->

/*************** Explore DOM Function *****************************/
function checkDom(){
var domVar0 = document.domain;
var domVar1 = document.characterSet;
var domVar2 = document.body.childNodes.length;
var domVar3 = document.body.attributes.length;
var domVar4 = document.height;
var domVar5 = document.width;
var domVar6 = document.body.clientTop;
var domVar7 = document.body.clientLeft;
var domVar8 = document.getElementsByTagName('div').length;
var domVar9 = document.title;
var domVar10 = document.getElementById('home').innerHTML;
var meta = document.getElementsByTagName("meta");

alert ("The hosting domain of this document: "+ domVar0);
alert ("The doctype of this document: "+domVar1);
alert ("The ChildNode length in <body> of this document: "+ domVar2);
alert ("The Attribute length of <body> of this document: "+ domVar3);
alert ("The Height of this document: "+ domVar4+"px");
alert ("The Width of this document: "+domVar5+"px");
alert ("The starting Top point of <body> of this document: "+domVar6);
alert ("The starting Left point of <body> of this document: "+domVar7);
alert ("The <div> length in <body> of this document: "+ domVar8);
alert ("The title of this document: "+domVar9);
alert ("The InnerHTML content of the div id=\"home\":\n"+ domVar10);
for (var i = 0; i < meta.length; ++i) {
    alert("The meta information (content) of this document:"+ (meta[i].getAttribute("content")));
  }
}
// -->

/**************** Show Mata Information Function ****************/
function showMetaContent()
{
  var meta = document.getElementsByTagName("meta");
  for (var i = 0; i < meta.length; ++i) {
    alert(meta[i].getAttribute("content"));
  }
}
// -->
