"use-strict";
// ::>> Create node.js App & use modules mocha & chai for unit testing...
document.body.style.visibility = "visible";
	console.log("::>> Js File Loaded Successfully");
    // ::>> document.crypto.KeyObject(type, handle);
	document.addEventListener("DOMContentLoaded",(e)=>{
		console.log("::>> DomC Ran Successfully");
		document.body.setAttribute("token", "x");

		const Bodi       = document.querySelector("body");
		const Head       = document.querySelector("head");
		const Header     = document.querySelector("header");
		const Footer     = document.querySelector("footer");
		const TopNavLinx = document.getElementById("TopNavLinx");
		      let sts    = document.styleSheets;
		      const BodyObjectArr = document.all;
		// ::>> V:: this is not executing?.........
		Bodi.style.display ="block !important";

		let isDevice = (/android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent.toLowerCase()));

		  if(isDevice){
		  	// ::>> Use Mobile/Tablet Stylesheet & Media Query's..
		  	console.log(`portable device in use.`);
		  	pushToHead();  // ::>> Add Mobile styleSheet's.
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





