/*************************************** AngularJS ***************************************/
var app = angular.module('cyleeNgboot', []);

// SiteCtrl
app.controller('SiteCtrl', ['$scope', function ($scope) {
/*var SiteCtrl = function($scope){*/
	"use strict";
	// siteVars
    $scope.siteVars = {
		titleGlobal1: "C.Y. Lee Front-End Web and UI Development and Support Professional",
		titleGlobal2: "Cyleeweb.com AngularJS and Bootstrap",
		titleSamples: "Samples",
		titleAbout: "About Me",
		titleRecommend: "Recommendations",
        titleContact: "Contact",
        bylineSamples1: "Enterprise Sample Sites/Applications I've Contributed in Development, Design, Implementation and Maintenance Across My Career",
        bylineAbout1: "Maximizing MVC Design Pattern in SPA/SPI UI Experience with Dynamic Data Binding and Responsive Queries Using HTML5 + CSS3 + AngularJS + BootStrap + JQ + JS, etc. for Modern Desktops, Tablets and Mobile Devices",
		bylineAbout2: "",
		bylineRecommend: "Recommendations From My Current/Former Colleagues (Toggle to See Details)",
        bylineContact: "Please Fill Out the Contact Form or Send Email To cyleex@sbcglobal.net",
		knowledgeExp: "My Knowledge and Hands-On Experience As A Web Developer and Designer Include...",
		whatIdo: "What I Do (Toggle to See Details)",
        aboutTab1: "Template | UI Building",
        aboutTab2: "Dynamic Data Binding",
        aboutTab3: "Site | Page Performance",
        aboutTab4: "Front End Implementation",
        aboutTabContent1: "Based upon master design comps and wireframes, I work closely with dev/des groups to build and style clean and scalable HTML(5) + CSS(3) + jQuery/Ajax/Javascript core templates or modules for further intergration and implementation into Web architectures.",
        aboutTabContent2: "The sites/apps may be driven in various environments or sta. I can work with all front/back-end groups to seamlessly tackle tasks for content updating, function analyzing and creating, dynamic data-binding and tracking in all front-end areas including meta, headers, breadcrumbs, navigation, body, footers, styles, function scripts, and more.",
        aboutTabContent3: "Web site and Web application assets (images, scripts, styles, components, etc.) can be optimized, merged, minified with delay loading as needed to reduce page weight, element calls, dom parsing for faster rendering. Additionally, I can use various tools and methods including better semantic markup to improve page performance for sites/applications.",
        aboutTabContent4: "Whether the sites are driven in Apache, Tomcat, IIS, running HTML, PHP, ASP, .NET, JSP, or via WCMS such as Teamsite, WordPress, Tridion, Ektron, UCM, Crafter/Alfresco, and more, I can work with all core groups to convert and implement materials from stakeholders to HTML(5)-CSS(3)-jQuery compliant web pages with UI functions.",
        cyleeLinkedIn: "http://www.linkedin.com/in/cyleeweb",
        cyleeEmailPri: "cyleex@sbcglobal.net",
        cyleeEmailSec: "cyleex@cyleeweb.com",
		toggleToSee: "Toggle to See Details"
    };
	
	//refVars
	$scope.refVars = {
		refName14: "Michael Cohen",
		refLink14: "https://www.linkedin.com/pub/michael-cohen/5/467/356",
		refTitle14: "Digital Marketing Manager",
		refComp14: "@myFICO",
		refDate14: "August 13, 2015",
		refCont14: "For his time at myFICO, C.Y. has been an invaluable member of the marketing team. At a time when we were trying to expand both our team and the quality of our landing pages, C.Y. did both and went beyond what we needed. In November 2014, we had added a new content writer and C.Y. as a senior UI developer. This allowed us to begin creating far more landing pages than in previous quarters, and this has continued throughout the year. Even better was that C.Y. would discuss any concerns directly with us, helping to expand his own knowledge of the various marketing channels. As an inbound marketer, being able to share this information and know that C.Y. understood what we were trying to accomplish was exceptional and a joy. However, it was during major site changes where his skill and personality really came to play. With a very tight deadline, C.Y. was able to help update over 50 pages, some of which whose requirements were made a few days before we were set to go live. He would work with many members of the marketing team one-on-one to make sure these updates were flawless, and this was no fast task. He took all of these tasks patiently and professionally. While my own coding experience is a bit basic, it was great to work alongside C.Y. and even learn some tips not just from a development standpoint, but from his wide knowledge base. C.Y. was fantastic to work alongside and he would be a great asset to any team - hardworking, efficient, and always looking to know more to make his job better.",
		//
		refName13: "Peter LaPierre",
		refLink13: "https://www.linkedin.com/in/peterlp",
		refTitle13: "Engineering Manager - Web Publishing",
		refComp13: "@Hightail",
		refDate13: "September 26, 2014",
		refCont13: "C.Y. has always been a reliable resource for completing tasks. Especially tasks that span multiple days and require some out of the box thinking. His code is always clean, simple, and easy to read. He thrives on finding simple solutions for complex problems which is why I always put him on harder tasks. It's always nice to know you have someone that can figure out a problem that you're not even sure we can do.",
		//
		refName12: "Madhu Gelani",
		refLink12: "https://www.linkedin.com/in/gelani",
		refTitle12: "Senior Principal Web Developer",
		refComp12: "@Symantec Corporation",
		refDate12: "April 27, 2011",
		refCont12: "CY is a skilled front-end developer who keeps track of the up and coming web technologies. He is detail-oriented, very cautious, and highly motivated. He is a team-player and would be a great asset to any team.",
		//
		refName11: "Ted Garvey",
		refLink11: "https://www.linkedin.com/pub/ted-garvey/0/70/a41",
		refTitle11: "Senior Principal Web Developer",
		refComp11: "@Symantec Corporation",
		refDate11: "April 20, 2011",
		refCont11: "C.Y. is a dedicated, talented, thoughtful and extremely diligent Web Developer. He's very professional always going the extra mile to please his stake holders. I enthusiastically recommend C.Y. to any Web organization.",
		//
		refName10: "Luke Donavan",
		refLink10: "https://www.linkedin.com/in/ldonavan",
		refTitle10: "Sr. Manager Web Technology",
		refComp10: "@Symantec Corporation",
		refDate10: "April 14, 2011",
		refCont10: "C.Y. has been a great asset to our team. He has excellent front end web development experience and hit the ground running. He is detail oriented, personable and focused on success in his position.",
		//
		refName9: "Elise Schwalm",
		refLink9: "https://www.linkedin.com/pub/elise-schwalm/2/734/200",
		refTitle9: "Senior Manager",
		refComp9: "@Sun Microsystems",
		refDate9: "October 19, 2010",
		refCont9: "CY has been a great asset to our publishing team. This is due to his professionalism, extreme responsiveness, quality work and in-depth Web publishing knowledge.",
		//
		refName8: "Mathew Quilter",
		refLink8: "https://www.linkedin.com/pub/mathew-quilter/1/6a8/540",
		refTitle8: "Director, Online Strategies",
		refComp8: "@Extractable Solutions",
		refDate8: "October 16, 2010",
		refCont8: "I worked at Extractable alongside CY and would like to say that very quietly he was perhaps the most dedicated person at the company, taking care of business with the company's largest client both gracefully and efficiently. He was highly praised by the client which he managed almost singlehandedly. Although I did not manage CY, he clearly worked with very little if any supervision, managed his time and the many demands on his time with little trouble, and even found time to pitch in on projects that were outside his immediate responsibilities. If I had the right position today I would hire him immediately.",
		//
		refName7: "Yana Reznik",
		refLink7: "https://www.linkedin.com/in/yanareznik",
		refTitle7: "Senior Web Program Manager",
		refComp7: "@Sun Microsystems",
		refDate7: "October 11, 2010",
		refCont7: "I had a wonderful opportunity to work with C.Y. while I was at Sun Microsystems. Reliability, knowledge, responsibility, nice personality and high professional standards are all part of CY skill-set. CY is very detail-oriented and proactive, he can see the bigger picture and the goal of any web project ( small and big) and make sure that everything is taking care of with the highest quality standards. C.Y. is a very highly qualified expert with great web publishing, project management and technical skills. He would be a great asset to any team and I would love to work with C.Y. again in the future.",
		//
		refName6: "Jennifer Johnson",
		refLink6: "https://www.linkedin.com/in/jpsjohnson",
		refTitle6: "Senior Web Design Program Manager",
		refComp6: "@Sun Microsystems",
		refDate6: "October 9, 2010",
		refCont6: "I worked with CY for over three years. CY was my go-to guy. Failure was never an option for CY and he made it a point to find a solution, even when faced with the most daunting task. CY was always professional, always reliable, and always made sure that our clients were happy. His code was clean and he was always open to sharing what he had learned (and written) with others on our team. Every suggestion or solution was always meticulously thought out and well executed. I sincerely hope I get the opportunity to work with CY again. He is an amazing asset to any team and those smart enough to hire him on will discover that very quickly.",
		//
		refName5: "Peter LaPierre",
		refLink5: "https://www.linkedin.com/in/peterlp",
		refTitle5: "Web Designer / Project Manager",
		refComp5: "@Sun Microsystems",
		refDate5: "October 8, 2010",
		refCont5: "C.Y. was always easy to work with and represented his company well. Always willing to figure out solutions to tough problems and always wanting to learn more about our processes and procedures so he can provide better service to our group. He's a skilled Web Designing, Project Manager and problem solver and a good hire for anyone lucky enough to find him.",
		//
		refName4: "Jesper Helweg",
		refLink4: "https://www.linkedin.com/in/jesperhelweg",
		refTitle4: "Vice President of Operations",
		refComp4: "@Extractable Solutions",
		refDate4: "October 7, 2010",
		refCont4: "I had the great pleasure of working with CY for over three years and found him to be extremely dedicated, hardworking, and knowledgeable in web development. He could jump between PhotoShop, Dreamweaver, and even troubleshoot JSP code with great skill. In addition to his development capabilities he was able to manage multiple client contacts and a sizable ever changing pool of daily task requests. I frequently received positive feedback from clients who were impressed with his ability to not only complete his tasks on time and on spec, but also manage and mentor an off shore team that constantly exceeded expectations as well. CY is a true professional and I certainly hope to work with him again in the future.",
		//
		refName3: "Jennifer Hooper",
		refLink3: "https://www.linkedin.com/pub/jennifer-hooper/0/1b3/225",
		refTitle3: "Senior Global Publishing Director",
		refComp3: "@Sun Microsystems",
		refDate3: "October 6, 2010",
		refCont3: "C.Y. led a team of web production support resources and as such was the main interface into my team at Sun Microsystems. In this role C.Y. was an unmatchable asset. He led the team with a quiet calm, ensuring that quality standards were met, his team was fully trained, that expectations were met, priorities were set and that we were always up-to-date on the status of the work and resources. C.Y. even went above and beyond all of this and made sure that all requests met our standards and recommended process and technical improvements as applicable. I consistently received positive feedback from my team and outside stakeholders on C.Y. His quiet, meticulous, and professional dedication and focus to the job were a huge success factor for my team. Anyone would be lucky to have him. I can highly recommend C.Y. to be a part of any team - Top qualities: Great Results, Expert.",
		//
		refName2: "Christopher Hawn",
		refLink2: "https://www.linkedin.com/pub/christopher-hawn/0/b45/961",
		refTitle2: "Senior Project Manager",
		refComp2: "@Extractable Solutions",
		refDate2: "October 6, 2010",
		refCont2: "I've worked with C.Y. on several projects at Extractable and learned a lot. He's quiet, efficient, and successfully established and ran the most profitable division in the company for 3 years straight. C.Y. is especially skilled at putting together a team of talented individuals to get a job done -- done well, and on time!",
		//
		refName1: "Craig McLaughlin",
		refLink1: "https://www.linkedin.com/in/mclaughlincraig",
		refTitle1: "President/CEO",
		refComp1: "@Extractable Solutions",
		refDate1: "October 6, 2010",
		refCont1: "C.Y. is a true professional. Detail oriented, positive, and brings a dedication to exceeding client expectations. In addition to doing great work, he is the kind of person anyone would want to work with. Always pleasant and a team player. I hope to have the opportunity to work with him again someday."
	};
}]);

// SkillControll -- This is an array block
app.controller('SkillControll', ['$scope', '$http', function ($scope, $http) {
	"use strict";
	$http.get('/common/script/json-skills.php').then(function(response) {$scope.skills = response.data.skills; })
}]);

// refsCtrl
app.controller('RefsControll', ['$scope', '$http', function ($scope, $http) {
	"use strict";
	$http.get("/common/script/json-refs.js").then(function (response) {$scope.refs = response.data.refs; });
}]);

// sampleCtrl
app.controller('SamplesControll', ['$scope', '$http', function ($scope, $http) {
	"use strict";
	$http.get("/common/script/json-samples.php")
		.then(function (response) {$scope.samples = response.data.samples; });
}]);
//

/*************************************** Bootstrap ***************************************/

$(document).ready(function () {
	"use strict";
	$('[data-toggle="tooltip"]').tooltip();
	$('[data-toggle="popover"]').popover();
});

/*************************************** JQuery ***************************************/

$(document).ready(function () {
	"use strict";
    $(this).scrollTop(0);

// For smooth scrolling to the anchor id position:
    $('#navAbout').on("click", function (event) {
		var id = $('#about'), offset = -100, target = $(id).offset().top + offset;
		$('html, body').animate({scrollTop: target}, 500);
	});
    $('#navRecommend').on("click", function (event) {
		var id = $('#recommend'), offset = -100, target = $(id).offset().top + offset;
		$('html, body').animate({scrollTop: target}, 500);
	});
	$('#navSamples').on("click", function (event) {
		var id = $('#samples'), offset = -100, target = $(id).offset().top + offset;
		$('html, body').animate({scrollTop: target}, 500);
	});
    $('#navContact').on("click", function (event) {
		var id = $('#contact'), offset = -100, target = $(id).offset().top + offset;
		$('html, body').animate({scrollTop: target}, 500);
	});
//
	$("#about-tabs .tabs .tab-top").on("click", function () {
		$(this).next().toggle(500);
	});
	$("#refs .ref-tabs .tab-top").on("click", function () {
		$(this).next().toggle(500);
	});
	$('.open-all').on('click', function () {
		$('.tab-cont').fadeIn(500);
	});
	$('.close-all').on('click', function () {
		$('.tab-cont').fadeOut(500);
	});
// Samples
    $('#ngboot #samples #samples-main').hover(function () {
		$(this).next().css('display', 'block');
			}, function () {
		$(this).next().css('display', 'none');
	});
// Footer
	$('#year').html(new Date().getFullYear());
});

/*************************************** Javascript ************************************/
// Samples
function funcSib(x){
	x.nextElementSibling.nextElementSibling.style.display = 'block';
}
function funcSibX(x){
	x.nextElementSibling.nextElementSibling.style.display = 'none';
}