"use-strict";
// Pre-loading Screen Overlay?
 let UsrMetrix = [];     // Unsure to use an array for this Json or Object might be better...
 let MenuItems = [];
 let PageActions = [];   // ?
 let ScrollAmnt = undefined;   // Activatecertain animations based on Scroll Ammount/ Parallex.
 let IframeConn = undefined;   // Github Pages does not support server side stuff Use iframe merged?
 let AssetCrate = {};
       // Has P5 loaded successfully?
       // Has Three.js Loaded?
       // Has GSAP Loaded?

// ::>> Example Only
// Put in a marquee style greeting message.......
 var welcome = '{ "Welcome Message" : [' +
                 '{ "Hello":"John" , "lastName":"Doe" },' +      // Change these and use Math.random() + ifelse to select a random greeting.
                 '{ "Bonjour":"Anna" , "lastName":"Smith" },' +
                 '{ "buenos dias":"Peter" , "lastName":"Jones" } ]}';

	// ::>> Then, use the JavaScript built-in function JSON.parse() to convert the string into a JavaScript object:
        var obj = JSON.parse(welcome);
    // ::>> UsrMetrix - - Device width, Device Height, User Agent : browser,
                       // Os, Ios etc, First Conn Time, Js-Disabled, Sensors,
                       // CountryLocation, Cookies? Refferer?

  //let e = e || evt || event;
	console.log("Js File Loaded Successfully");

	document.addEventListener("DOMContentLoaded",(function(){
		console.log("DomC Ran Successfully");
		        let tick_one = performance.now(); // Testing only.
		        console.log(tick_one)

        /* Wait 2/8/180ms after page load and use gsap to fade items it, draw in from sides etc..
           Consider using parallax aswell... */
        // let h1Anime = gsap.to();  // Flame/Smoke reveal or not? fad in/ slide in?
        // let h2Anime = gsap.to();  // Fade in.

        let navMenu = gsap.to();

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