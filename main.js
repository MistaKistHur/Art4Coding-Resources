"use-strict";
// ::>> Create node.js App & use modules mocha & chai for unit testing...
document.body.style.visibility = "visible";
    // ::>> document.crypto.KeyObject(type, handle);
	document.addEventListener("DOMContentLoaded",(e)=>{
			 console.log("::>> Js File Loaded Successfully");
			 console.log("::>> DomC Ran Successfully");

		let isDevice = (/android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent.toLowerCase()));
		const Head   = document.querySelector("head");
		  let sts    = document.styleSheets;
		  if(isDevice){
		  	// ::>> Use Mobile/Tablet Stylesheet & Media Query's..
		  	console.log(`portable device in use.`);
		  	pushToHead();  // ::>> Add Mobile styleSheet's.
		  }


				    const t0 = performance.now(); // ::>> Testing only.
				    console.log(`::>>${t0}`);
				    console.log(`::>>Test AB Ref:: X678` + console.trace());



		const Bodi          = document.querySelector("body");
		const BodyObjectArr = document.all;
		const Header     = document.querySelector("header");
		const Footer     = document.querySelector("footer");
		const TopNavLinx = document.getElementById("TopNavLinx");

		Bodi.style.display ="block !important";
	});

	/* ::>> debugging.
			debugger;
			console.debug(), console.warn() and console.error()
			console.trace()
			console.profile()
			console.time()
			console.timeLog()
			console.table()

	*/





