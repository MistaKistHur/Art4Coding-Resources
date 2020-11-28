"use-strict";
  // import Core from '/Modules/core_module.js';
  // import AssetCard from '/Modules/module.asset_card.js';
  // SetUp Animation Worker Thread;
	console.log("::>> Js File Loaded Successfully");
	window.addEventListener("DOMContentLoaded", (event) => {
		        console.log("::>> DomC Ran Successfully");
		        document.body.setAttribute("token", "x");
  /*	    ::>> Notes::
   */
		(function bs_reset(){
			document.body.style = [];
	     // Setting inline styles back to an empty array on the body object.
		})();
/* ::.............::>> ElementGrabbers <<::................::*/
		let qS       =(s)=>{          //:: s for selector..::
			return document.querySelector(s);
		    },
		    qSAll    =(s)=>{
		    return document.querySelectorAll(s);
		    },
		    getId    =(g)=>{		  //:: g for get.......::
		    return document.getElementById(g);
		    },
		    getTag   =(g)=>{
		    return document.getElementsByTagName(g);
		    },
		    getClass =(g)=>{
		    return document.getElementsByClassName(g);
		    },
/* ::.............::>> ElementGrabbers <<::...............::*/
            setAttrib =(elem, attrib, val)=>{
        	return elem.setAttribute(attrib, val);
            }  // Not sure this one works, test it out......::
		//      ::::::::::::::::::::::::::::::
				const Bodi       = qS("body");
				const Head       = qS("head");
				const Header     = qS("header");
				const Footer     = qS("footer");
		//      ::::::::::::::::::::::::::::::::
		const HidNav     = getId('HiddenNavBar');

		const TopNavLinx = getId("TopNavLinx");
		      let sts    = document.styleSheets;
		      const BodyObjectArr = document.all;
		      const ProSettingCog = getId("Profile_Cog");



/* ::..............::>> WebWorker <<::....................:: */
	    function genWebWorker(){
	         let genWorker = new Worker('/Scripts/Workers/genWorker.js');
		     genWorker.addEventListener('message', function(e){
		         console.log('Worker said: ', e.data);
			 console.trace(this);
			 console.trace(genWorker);
			 console.log(typeof genWorker);
		     },false);
		     genWorker.postMessage({"hello": "world"});
	    } // ::<< Closing tag for gen worker // ::<< send data to the worker thread.




		let nav_arr = qS('.nav_arrow');
		    console.log(nav_arr);
		    nav_arr.addEventListener('mousedown',(e) => {
		  			// Todo...
		  		let cs = window.getComputedStyle("HidNav", null).getPropertyValue("transform");
		  		console.log(cs);


		  			// HidNav.style.transform = "translateY(-378px) !important";
		    });
		if ('pictureInPictureEnabled' in document) { // not sure how to select the css background image.
			console.trace(this || err);
			console.log(this);
			console.log("::>> Picture in Picture enabled");
			// currently unwated picture in picture icon on the stars background. remove it...
		}else{
			console.log("::>> Picture in Picture not in Current Document");
		}

		// window.addEventListener("onresize", changePerspective({"x":"y"})=>{

		// })


		// ::>> V:: this is not executing?.........
		Bodi.style.display = "block !important";

		ProSettingCog.addEventListener('mousedown',(e) => {
		  // hidden nav transform...
		  HidNavBar.style.transform = `translateY(128px)`;
		});

		let isDevice = (/android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent.toLowerCase()));

		  if(isDevice){
		  	// ::>> Use Mobile/Tablet Stylesheet & Media Query's..
		  	console.log(`portable device in use.`);
		  	// pushToHead();  // ::>> Add Mobile styleSheet's.
		  };
				    const t0 = performance.now(); // ::>> Testing only.
				    console.log(`::>>${t0}`);
				    console.log(`::>>Test AB Ref:: X678` + console.trace(this));

	}); //::>> Closing Tag for the main DOMC event listener. ...................








		    //window.onresize() = changePerspective({"":""})=>{

		    //}







	    // navigator.sendBeacon('https://www.art4coding.icu/Scripts/Secondary/makesumfile.log/html/js/pyt', 'beacon_script');
	    // navigator.serviceWorker('?');
	    // ::>> Notes:                 //



	//function getWikiArt(){
		//if (XMLHttpRequest)
		//{
		// Create a request variable and assign a new XMLHttpRequest object to it.
			//var request = new XMLHttpRequest()
			// Open a new connection, using the GET request on the URL endpoint

			//request.open('GET', 'https://cors-anywhere.herokuapp.com/https://www.wikiart.org/', true)
			// Block by cors try herokuapp proxy
			// request.open('GET', 'https://www.wikiart.org/', true)

			//request.setHeaders()

			//request.onload = function () {
			// Begin accessing JSON data here
				// Begin accessing JSON data here
				//var data = JSON.parse(this.response)
				//console.log(data);

				//data.forEach((movie) => {
				  // Log each movie's title
				  //console.log(movie.title)
				//})
			//}
			// Send request
			//request.send()
		//}
	//}getWikiArt();


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




	/* ::>> debugging.
			debugger;
			console.debug(), console.warn() and console.error()
			console.trace()
			console.profile()
			console.time()
			console.timeLog()
			console.table()

	*/





