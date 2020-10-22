"use-strict";
  //let e = e || evt || event;
	console.log("Js File Loaded Successfully");

	document.addEventListener("DOMContentLoaded",(e)=>{
		if(!document.worker()){
			console.log("::>> err somewhere");
		}
		console.log("DomC Ran Successfully");
		    let tick_one = performance.now();


		let docu = document;
		  let bodi = docu.querySelector("body");
		  let header = docu.querySelector("header");
		  let xhr_video = docu.getElementsByClassName(".xhr_video_request")[0];

		  xhr_video.addEventListener("mousedown",(e) => {
                  e.preventDefault();
                  console.log("Testing ::>> no err"); // move around for testing errors.
                  fetch();
		    // fetch extra videos, bump others out of view..
		  });
	}) /* ::>> Closing Tag for the MAIN body DOMC loaded event */


/* ::>> Use PreventDefault on all top Nav a links then use Ajax/xhr to load in other content .... */
		//document.querySelector("#id-checkbox").addEventListener("click", function(event) {
		//         document.getElementById("output-box").innerHTML += "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
		//         event.preventDefault();
		//}, false);