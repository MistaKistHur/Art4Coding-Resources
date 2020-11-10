"use-strict";
 // import Core from '/Modules/core_module.js';
 // import AssetCard from '/Modules/module.asset_card.js';
	console.log("::>> Js File Loaded Successfully");
	window.addEventListener("DOMContentLoaded", (event) => {
		console.log("::>> DomC Ran Successfully");
		 document.body.setAttribute("token", "x");


	    // navigator.sendBeacon('https://www.art4coding.icu/Scripts/Secondary/makesumfile.log/html/js/pyt', 'beacon_script');
	    // navigator.serviceWorker('?');
	    // ::>> Notes:                 //
		(function hiding_body_override(){
			// Setting inline styles back to an empty array.
			document.body.style = [];
		})();


	function getWikiArt(){
		if (XMLHttpRequest)
		{
		// Create a request variable and assign a new XMLHttpRequest object to it.
			var request = new XMLHttpRequest()
			// Open a new connection, using the GET request on the URL endpoint

			request.open('GET', 'https://cors-anywhere.herokuapp.com/https://www.wikiart.org/', true)
			// Block by cors try herokuapp proxy
			// request.open('GET', 'https://www.wikiart.org/', true)

			request.setHeaders()

			request.onload = function () {
			// Begin accessing JSON data here
				// Begin accessing JSON data here
				var data = JSON.parse(this.response)
				console.log(data);

				data.forEach((movie) => {
				  // Log each movie's title
				  console.log(movie.title)
				})
			}
			// Send request
			request.send()
		}
	}getWikiArt();


/*

			fetch('https://www.wikiart.org/en/App/home?json=2&amp;param=artwork-of-the-day')
			.then((res)=> res.text())
			.then((data)=> {
				console.log(data);
			})
			.catch((err)=>{
				console.log(err + console.trace());
			})

*/




			//JSON.parse({
			//	"display"   : "block",
			//	"opacity"   :"1",
			//	"visibility":"visible"
			//});


/*
::>> Page Item Selectors
		let
		select = (elem) => {
		    return document.querySelector(elem);
		},
		selectAll = (elem) => {
		    return document.querySelectorAll(elem);
		},
		getById = (elem) => {
		    return document.getElementById(elem);
		},
		getByTag = (elem) => {
		    return document.getElementsByTagName(elem);
		},
	    getByClass = (elem) => {
		    return document.getElementsByClassNames(elem);
		};

function cssPairs(styles) {
    let cssKeyValues = styles.split("=>");
}*/
// Usage
/*
cssPairs({
	"":"",

});
*/
// wish to be able to declare css via css =


//  ::>> Create node.js App & use modules mocha & chai for unit testing..
// ::
//  ::>> ............. Touch Screen Events ..............................
/*     var el = document.getElementById("canvas");
		  el.addEventListener("touchstart", handleStart, false);
		  el.addEventListener("touchend", handleEnd, false);
		  el.addEventListener("touchcancel", handleCancel, false);
		  el.addEventListener("touchmove", handleMove, false);*/
//  ::>> ............. Touch Screen Events ..............................
// ::    ?? https://developer.mozilla.org/en-US/docs/Web/API/Touch_events
//  ::>> ................. Click Events .................................

//  ::>> ................. Click Events .................................
// ::

    // ::>> document.crypto.KeyObject(type, handle);

		const Bodi       = document.querySelector("body");
		const Head       = document.querySelector("head");
		const Header     = document.querySelector("header");
		const HidNav     = document.getElementById('HiddenNavBar');
		const Footer     = document.querySelector("footer");
		const TopNavLinx = document.getElementById("TopNavLinx");
		      let sts    = document.styleSheets;
		      const BodyObjectArr = document.all;
		    const ProSettingCog = document.getElementById("Profile_Cog");
		// ::>> V:: this is not executing?.........
		Bodi.style.display = "block !important";

		ProSettingCog.addEventListener('mousedown',(e) => {
		  // hidden nav transform...
		  HidNavBar.style.transform = `translateY:128px;`;
		});

		let isDevice = (/android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent.toLowerCase()));

		  if(isDevice){
		  	// ::>> Use Mobile/Tablet Stylesheet & Media Query's..
		  	console.log(`portable device in use.`);
		  	// pushToHead();  // ::>> Add Mobile styleSheet's.
		  }
				    const t0 = performance.now(); // ::>> Testing only.
				    console.log(`::>>${t0}`);
				    console.log(`::>>Test AB Ref:: X678` + console.trace());

	}); //::>> Closing Tag for the main DOMC event listener. ...................

	/* ::>> debugging.
			debugger;
			console.debug(), console.warn() and console.error()
			console.trace()
			console.profile()
			console.time()
			console.timeLog()
			console.table()

	*/





