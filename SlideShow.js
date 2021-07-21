var i = 0; 			// Start Point
var images = [];	// Images Array
var images2=[];
var time = 2000;	// Time Between Switch
	 
// Image List
images[0] = "Black  (smilie face).jpg";
images[1] = "Blue  (smilie face).jpg";
images[2] = "Dark Blue (smilie face).jpg";
images[3] = "White  (smilie face).jpg";

images2[0]="Black Hoodie(Front)kakashi.jpg";
images2[1]="Black Hoodie(Back)kakashi.jpg";

// Change Image
function changeImg(){
	document.slide.src = images[i];
	document.slide2.src = images2[i];

	// Check If Index Is Under Max
	if((i < images.length - 1)&&(i < images2.length - 1)){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;
		