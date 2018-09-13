//JavaScript All Functions

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

alert ("Hosting domain of this document: "+ domVar0);
alert ("Doctype of this document: "+domVar1);
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