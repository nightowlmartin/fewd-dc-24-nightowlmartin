// Click  on Grey Button
document.getElementById("grayButton").onclick = changeToGrey;
	// Call changeToGrey

// Click  on White Button
document.getElementById("whiteButton").onclick = changeToWhite;
	// Call changeToWhite


function changeToGrey(){
	// Change background color
	document.body.style.backgroundColor = "gray";
	// Chane text color
	document.body.style.color = "white";
}

function changeToWhite(){
	// Change background color
	document.body.style.backgroundColor = "white";
	// Chane text color
	document.body.style.color = "black";
}


