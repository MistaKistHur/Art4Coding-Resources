"use-strict";
	document.addEventListener("DOMContentLoaded",(function(){
		console.log("Js File Loaded Successfully");
		console.log("DomC Ran Successfully");
		    const t0 = performance.now(); // Testing only.
			console.log(tick_one);
		//let e = e || evt || event;
	    (function PreSetUp(){
			// Pre-loading Screen Overlay?
			 let UsrMetrix = [];     // Unsure to use an array for this Json or Object might be better...
			 let MenuItems = [];
			 let PageActions = [];   // ?
			 let ScrollAmnt = undefined;   // Activatecertain animations based on Scroll Ammount/ Parallex.
			 let IframeConn = undefined;   // Github Pages does not support server side stuff Use iframe merged?
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
            const RMapsOuterCard = document.getElementById("RMapsHoverActivator");

        // ::>> Test Bench{::>>Move Around<<::}.. <<:: ::>>....................................................................<<::
				const t1 = performance.now();
				console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
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

		            RMapsOuterCard.style.transform = `rotateX(` + ${yAxis} +`deg) rotateY(` + ${xAxis}`deg) scale(0.885)`;
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

    (function UnloadAnimationAssets(){
    	require('Anime_Assets.json');
	    const RMaps = document.getElementById("Rev-maps")
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
		const TopNavLinx = document.getElementById("TopNavLinx");
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
			document.body.appendChild( renderer.domElement );
        }ThreeActive();

/* ::>> Three.js Set-up <<:: */

		let docu = document;
		  let bodi = docu.querySelector("body");
		  let header = docu.querySelector("header");
		  let xhr_video = docu.getElementsByClassName("xhr_video_request")[0];

		  xhr_video.addEventListener("mousedown",(e) => {
                  e.preventDefault();
                  console.log("Testing ::>> no err"); // move around for testing errors.
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