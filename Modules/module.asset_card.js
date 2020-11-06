





//.........................................................................
// ::>> Move to External Module............................................
export default class AssetCard {
    constructor(Asset_Card_Name, Asset_Type, License,
                      Creator, Vendor, XLink, AssetDate, JsonIndex,
                      Preview) {      // Constructor
        this.card_name = Asset_Card_Name;   // ::>> The Name of the Resource for that specific Card.
	    this.type      = Asset_Type;		// ::>> Svg, 3D Model, Code, Fonts, Asset Crate, Pdf, Tutorial etc..
	    this.licence   = License;  			// ::>> Public Domain, Share Alike, MiT, Not Specified, etc....
	    this.creator   = Creator;
	    this.vendor    = Vendor;            // ::>> This Website or External Src such a Wikimedia, PublicDomainImages, ShutterStock etc..
	    this.xLink     = XLink;     		// ::>> XPath or Url......
	    this.date      = AssetDate; 		// ::>> Upload or Creation Date.
	    this.jsonIndex = JsonIndex;     	// ::>> File info....
	    this.preview   = Preview;  		    // ::>> is the item previewable inside the browser?
	// ::>> Methods ::>>.........................<<
    // ::>> x
	(function createContainerObj(){
		// Select the right container from the page.........
		// Create A Div Element for the Card to be nested in,
		let CContainer = document.createElement("div");
		    CContainer.setAttribute("id", "XCard-" + this.card_name);   // ${Asset_Card_Name}
		// Select the right section to be nested ie, tutorials, pdf, vectors, 3d, textures etc....
		// Grab the Asset_Type from above, & select the right area from the Dom.
	})();
		function flip3D(){
		  	// ::>> Flip Card & Show meta Data on reverse of Card? <<:: DoubleClick/Tap or Hover?
		  	document.getElementById(`XCard-` + this.card_name).addEventListener("mouseenter",(e) => {
		  	    // ::>> Todo...
		  	    this.style.transform = `rotateX(180deg)`;
		  	    // or e.traget?
		  	    // ::>> Transition + preserve 3D...
		  	});
		}
		function openExternalSrc(){
			// ::>> Opens in new Browser Tab.
			//      fetch()
		}
		function addToFavs(){
			// ::>>
		}
		function download(){
			//
		}
		function share(){
			//
		}
    }

}

/* ::>> Junk Code Snippets ................................ */
	/*
		// ::>> Use Via the code below....
		Card = new AssetCard(x,y,z,a,b,c);

	*/

/*29 + 6 + 6 + granola +

/*		class AssetCrate extends AssetCard{
			// ::>> Svg Box/Crate... Bundled Assets.
		}
//..........................................................

/*				function Page(){

				}
//....................................
/* ::>> Constructor Function for Asset Cards ....... */
// ::>> Move this into its own module...............
/*		function AssetCard(){
			this.type      = Asset;
			this.licence   = License;
			this.creator   = Creator;
			this.vendor    = Vendor;
			this.xLink     = XLink;     	// XPath or Url......
			this.date      = AssetDate; 	// Upload or Creation Date.
			this.jsonIndex = JsonIndex;
			this.preview   = undefined;  	// is the item previewable inside the browser?
			// ::>> Generic Card Dimensions? 340x340px?

        /* ::>> What kind of functions would an asset card have? */
/*			function flip3D(){
				// Transform CardX 180deg, preserve 3D.
			}
			function cardBackInfo(){

			}
			function showSource(){
				// Show Author, Creator, Vendor or External Source.
			}
			function download(){

			}
			function share(){

			}
		}
/* ::>> Constructor Function for Asset Cards ....... */