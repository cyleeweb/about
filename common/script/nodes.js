// JavaScript Document

var nodesHtml = document.getElementsByTagName('html');
var nodesHead = document.getElementsByTagName('head');
var nodesTitle = document.getElementsByTagName('title');
var nodesBody = document.getElementsByTagName('body');
var nodesStyle = document.getElementsByTagName('style');
var nodesScript = document.getElementsByTagName('script');
var nodesDiv = document.getElementsByTagName('div');
var nodesP = document.getElementsByTagName('p');
var nodesAnchor = document.getElementsByTagName('a');
var nodesSpan = document.getElementsByTagName('span');
var nodesImg = document.getElementsByTagName('img');

	//
	console.log(nodesHtml.length);
	console.log(nodesHtml);
	console.log(nodesHead.length);
	console.log(nodesHead);
	console.log(nodesTitle.length);
	console.log(nodesTitle);
	console.log(nodesStyle.length);
	console.log(nodesStyle);
	console.log(nodesScript.length);
	console.log(nodesScript);
	console.log(nodesBody.length);
	console.log(nodesBody);
	console.log(nodesDiv.length);
	console.log(nodesDiv);
	console.log(nodesP.length);
	console.log(nodesP);
	console.log(nodesAnchor.length);
	console.log(nodesAnchor);
	console.log(nodesSpan.length);
	console.log(nodesSpan);
	console.log(nodesImg.length);
	console.log(nodesImg);
	//

var NodesList = [].slice.call(document.querySelectorAll("div")); // parsing dom to collect NodeList (not an array yet).
var i ="";
var NodesArray= []; // declare the initial array being empty.
for (i = 0; i < NodesList.length; i++) {
	var output = NodesList[i].innerHTML + '<br>'; //take each value in for loop.
	NodesArray.push(output); // push/add them one by one to the empty array NodesArray.
}
// console.log(NodesArray); display the new array in Console.

document.getElementById('cyleeweb').innerHTML = NodesArray + '<br>';


