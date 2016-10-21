function generateRandomColors(numberOfColors){
var arr=[];//make array
	
	//generate random colors
	for (u=0;u<numberOfColors;u++){
		var rrr = Math.floor(Math.random() * 256);
		var ggg = Math.floor(Math.random() * 256);
		var bbb = Math.floor(Math.random() * 256);
		var rgb = "rgb("+rrr+", "+ggg+", "+bbb+")";
	
		arr.push(rgb);
	}
	
	return arr;//return array
}

function pickColorHere(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}

function resetMe(){
	colors=generateRandomColors(numSquares);
	pickedColor=pickColorHere();
	colorDisplayselect.textContent=pickedColor;
	h1Select.style.background="steelblue";
	resetSelect.textContent="New Colors!";
	messageDisplayselect.textContent="";
	for(a=0;a<selectSquares.length;a++){
	//add initial colors to squares
		
	if (colors[a]){
			selectSquares[a].style.display="block";
			selectSquares[a].style.background=colors[a];
		}
		else {selectSquares[a].style.display="none";}
	}
}

function changeAllColors(colorall){
	//loop through all squares
	for(j=0;j<selectSquares.length;j++){
	selectSquares[j].style.background=colorall;
		//change each color to given color
	}
	
}

function squaresclicked(){
	var clickedColor=this.style.background;
	
	if (clickedColor===pickedColor){
		messageDisplayselect.textContent="Correct!";
		resetSelect.textContent="Play Again!";
		h1Select.style.background=clickedColor;
		changeAllColors(clickedColor);
	}
	else {
		this.style.background="#232323";
		messageDisplayselect.textContent="Try Again!";
	}
}



var numSquares=6;
var colors=generateRandomColors(numSquares);
var selectSquares=document.querySelectorAll(".squares");
var pickedColor=pickColorHere();
var colorDisplayselect=document.querySelector("#colorDisplay");
var messageDisplayselect=document.querySelector("#message");
var h1Select=document.querySelector("h1");
var modeSelect=document.querySelectorAll(".mode");
for(mode=0;mode<modeSelect.length;mode++){
	modeSelect[mode].addEventListener('click',function(){
	modeSelect[0].classList.remove("selected");
	modeSelect[1].classList.remove("selected");
	modeSelect[2].classList.remove("selected");
	modeSelect[3].classList.remove("selected");
	
	this.classList.add("selected");
	//this.textContent==="Easy" ? numSquares=3: numSquares=6;
		if (this.textContent==="Easy"){numSquares=3;}
		else if (this.textContent==="Hard"){numSquares=6;}
		else if (this.textContent==="Very Hard"){numSquares=9;}
		else {numSquares=18;
			 }
	resetMe();
	});
}
colorDisplayselect.textContent=pickedColor;
var resetSelect=document.querySelector("#reset");
resetSelect.addEventListener('click',function(){resetMe();});
for(i=0;i<selectSquares.length;i++){
	//add initial colors to squares
	selectSquares[i].style.background=colors[i];
	//add click listeners to squares
	selectSquares[i].addEventListener("click",squaresclicked)
}






/*var easySelect=document.querySelector("#easy");
var hardSelect=document.querySelector("#hard");*/
//easySelect.addEventListener('click',easyCall);
//hardSelect.addEventListener('click',hardCall);

/*
function resetGame(){
	
	colors=generateRandomColors(numSquares);
	pickedColor=pickColorHere();
	colorDisplayselect.textContent=pickedColor;
	h1Select.style.background="steelblue";
	this.textContent="New Colors!";
	messageDisplayselect.textContent="";
	for(ii=0;ii<selectSquares.length;ii++){
	//add initial colors to squares
		selectSquares[ii].style.background=colors[ii];	
	}
}

function easyCall(){
	easySelect.classList.add("selected");
	hardSelect.classList.remove("selected");	
	numSquares=3;
	colors=generateRandomColors(numSquares);
	console.log(colors);
	pickedColor=pickColorHere();
	colorDisplayselect.textContent=pickedColor;
	h1Select.style.background="steelblue";
	for(iii=0;iii<selectSquares.length;iii++){
	//add initial colors to squares
		
	selectSquares[iii].style.background=colors[iii];
		if (iii>2){selectSquares[iii].style.display="none";}
	}
}

function hardCall(){
	easySelect.classList.remove("selected");
	hardSelect.classList.add("selected");
	numSquares=6;
	colors=generateRandomColors(numSquares);
	console.log(colors);
	pickedColor=pickColorHere();
	colorDisplayselect.textContent=pickedColor;
	h1Select.style.background="steelblue";
	for(iiii=0;iiii<selectSquares.length;iiii++){
	//add initial colors to squares
		
	selectSquares[iiii].style.background=colors[iiii];
		if (iiii>2){selectSquares[iiii].style.display="block";}
	}
}*/