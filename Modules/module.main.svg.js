// Create a module that combines All Usables Ui Svg icons into one file or sprite sheet.
"use-strict";
	 export default class Svg{
		constructor(){

		}
	 }


	 export function Svg(){
		let MainSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		    MainSvg.setAttribute("viewbox", "0 0 28 28").then(
		    MainSvg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"));

	    // set width and height
	    svg1.setAttribute("width", "100");
	    svg1.setAttribute("height", "100");

	    // create a circle
	    const cir1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	    cir1.setAttribute("cx", "80");
	    cir1.setAttribute("cy", "80");
	    cir1.setAttribute("r", "30");
	    cir1.setAttribute("fill", "red");

	    // attach it to the container
	    svg1.appendChild(cir1);

	    // attach container to document
	    document.getElementById("svg54583").appendChild(svg1);


	 }
