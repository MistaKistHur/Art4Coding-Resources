"use-strict";
    // this.applicationCache.onprogress; ......... <<:: Research These:
    // this.applicationCache.ondownloading; ...... <<:: Research These:
    // this = this || window || document;
    const Docu = document;
	Docu.addEventListener("DOMContentLoaded",(function(){
            // ::>> if(null)?
            // ::>> modules ? require()? include()?
		const Head   = Docu.querySelector("head");
		const Bodi   = Docu.querySelector("body");
		const Header = Docu.querySelector("header");
		const Footer = Docu.querySelector("footer");
		/* ::>> Notes            */
			console.log("Js File Loaded Successfully");
			console.log("DomC Ran Successfully");

		    const t0 = performance.now(); // Testing only.
		    console.log(`::>>${t0}`);
		    console.log(`::>>Test AB Ref:: X678`);
			//console.log(tick_one);
		//let e = e || evt || event;
	    (function PreSetUp(){
			// Pre-loading Screen Overlay?
			console.log(`::>> PreSetUp Fn Ran Successfully.`);
			 let UsrMetrix = [];     // Unsure to use an array for this Json or Object might be better...
			 let MenuItems = [];
			 let PageActions = [];   // ?
			 let ScrollAmnt = undefined;   // Activatecertain animations based on Scroll Ammount/ Parallex.
			 let IframeConn = undefined;   // Github Pages does not support server side stuff Use iframe merged?
			 let MaxConcuIframes = null;   // Max number of iframes, if more generate remove prev.
			 let AssetCrate = {};
			    // ::>> UsrMetrix - - Device width, Device Height, User Agent : browser,
			                       // Os, Ios etc, First Conn Time, Js-Disabled, Sensors,
			                       // CountryLocation, Cookies? Refferer?
	    })();
		       // Has P5 loaded successfully?
		       // Has Three.js Loaded?
		       // Has GSAP Loaded?
		// ::>> Example Only
		// Put in a marquee style greeting message.......
            const RMapsOuterCard = Docu.getElementById("RMapsHoverActivator");

        // ::>> Test Bench{::>>Move Around<<::}.. <<:: ::>>....................................................................<<::
				//const t1 = performance.now();
				//console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
// console.log("::>> Testing, This Section Ran Ok" + performance.now() + "<<::" + (performance.now() - ${tick_one}));
        // ::>> Test Bench{::>>Move Around<<::}.. <<:: ::>>....................................................................<<::

                //RMapsOuterCard.addEventListener("mouseenter",(e) => {
                	// RMapsOuterCard.style.transition = `all 244ms ease-in-out`
                //}
                //RMapsOuterCard.addEventListener("mouseleave",(e) => {

                //}
				RMapsOuterCard.addEventListener("mousemove",(e) => {
				    let xAxis = (window.innerWidth / 2 - e.pageX) / 24;
				    let yAxis = (window.innerHeight / 2 - e.pageY) / 28.8;
		                         let mouseMoving = true;

		            // console.log("hi");

		            RMapsOuterCard.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg) scale(0.885)`;
						// if(mouseMoving === true){
						//	console.log(`X:Axis::>>`+ ${xAxis}+`Y:Axis::>>`+ ${yAxis});
						// };


		              // console.log(" "${xAxis}"" ${yAxis}"");
		          // Handle touch events seperately.
				}); // ::>> Closing Tag for Document MouseMove evt...


		var welcome = '{ "Welcome Message" : [' +
		                '{ "Hello":"New User" },' +      // Change these and use Math.random() + ifelse to select a random greeting.
		                '{ "Bonjour":"Partner" },' +
		                '{ "Buenos dias":"Chica" } ]}';
			// ::>> Then, use the JavaScript built-in function JSON.parse() to convert the string into a JavaScript object:
		        var obj = JSON.parse(welcome);
		        // welcome.SomeMethod?
console.log(`::>> Test Ran Successfully:: ref x345`);
    (function UnloadAnimationAssets(){
    	console.log(Docu);
    	console.log(this);
    	// require('Anime_Assets.json');
	    const RMaps = Docu.getElementById("Rev_Maps");
		setTimeout(() => {
			  RMaps.classList.remove("disp_none");
	        let RevolverMapsGsap = gsap.fromTo(".r_maps_container",
	        	                        { opacity: 0 }, {
                                          opacity: 1,
                                         duration: 24.4287,
                                         ease: "slow(0.7, 0.7, false)",
                                         delay: 0.240
	        });
	        // Need to retain the hue-rotate but inverse the hue of the actual globe...
		},240)
		const TopNavLinx = Docu.getElementById("TopNavLinx");
		              // Slide in from the right menu linx
    })();

        /* Wait 2/8/180ms after page load and use gsap to fade items it, draw in from sides etc..
           Consider using parallax aswell... */
        // let h1Anime = gsap.to();  // Flame/Smoke reveal or not? fad in/ slide in?
        // let h2Anime = gsap.to();  // Fade in.

        // let navMenu = gsap.to();

        // CreateA P5.js Fractal?
        function P5Visual(){

        }P5Visual();

		//if(!document.worker()){
		//	console.log("::>> err somewhere");
		//}

/* ::>> Three.js Set-up <<:: */
        function ThreeActive(){
             // Move three Code inside here for modularity...
			var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			Docu.body.appendChild( renderer.domElement );
        }ThreeActive();

/* ::>> Three.js Set-up <<:: */


		  let xhr_video = Docu.getElementsByClassName("xhr_video_request")[0];

		  xhr_video.addEventListener("mousedown",(e) => {
                  e.preventDefault();
                  console.log("Testing ::>> no err :: ref: x123"); // move around for testing errors.
                  var vid_xhttp = new XMLHttpRequest();
                  //fetch();
		    // fetch extra videos, bump others out of view..
		  });
	})) /* ::>> Closing Tag for the MAIN body DOMC loaded event */

/* ::>> Use PreventDefault on all top Nav a links then use Ajax/xhr to load in other content .... */
		//document.querySelector("#id-checkbox").addEventListener("click", function(event) {
		//         document.getElementById("output-box").innerHTML += "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
		//         event.preventDefault();
		//}, false);