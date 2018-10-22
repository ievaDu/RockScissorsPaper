
//Different elements on page

var akmens = document.querySelector("#akmens");
var skeres = document.querySelector("#skeres");
var papirs = document.querySelector("#papirs");
var akmens1 = document.querySelector("#akmens1");
var skeres1 = document.querySelector("#skeres1");
var papirs1 = document.querySelector("#papirs1");
var weHaveaTie = document.querySelector("#tied");
var rockBeatsScissors = document.querySelector("#rockBeatsScissors");
var paperCoversRock = document.querySelector("#paperCoversRock");
var h1 = document.querySelector("h1");
var scissorsBeatPaper = document.querySelector("#scissorsBeatPaper");

//Place to display score 
var userPoints = document.querySelector("#userPoints");
var PCPoints = document.querySelector("#PCPoints");

//User and PC points counter
var user = 0;
var PC = 0;

//Generating random PC choice
function PcChoice(){
	var computerChoice = Math.floor(Math.random() * 3);
	return computerChoice;
	}

//Default state to track if element is clicked
var elementIsClicked = false; 

//Onclick function for Akmens
function clickHandlerAkmens(){ 
	elementIsClicked = true;
	//generate PC choice
  	computerChoice = PcChoice();
  	//make element unclickable while function runs
  	akmens.style.pointerEvents = "none";
  	skeres.style.visibility = "hidden";
  	papirs.style.visibility = "hidden";
  	if(computerChoice === 0){
	akmens1.style.visibility = "visible";
	akmens1.style.position = "absolute";
	akmens1.style.left = "-7%";
		if (window.matchMedia("(max-width: 500px)").matches) {
		akmens1.style.position = "absolute";
		akmens1.style.top = "-150%";
		akmens1.style.left ="30%";
		};
	setTimeout(function(){ 
	akmens.style.visibility = "hidden";
	akmens1.style.visibility = "hidden";
	h1.style.visibility = "hidden";
	weHaveaTie.style.visibility = "visible";
	weHaveaTie.style.position = "absolute";
	weHaveaTie.style.top = "30%";
	weHaveaTie.style.left = "30%";
	/*weHaveaTie.classList.add("appearanceClass")*/
	 }, 1500);
	setTimeout(function(){ 
	weHaveaTie.style.visibility = "hidden";	
	akmens.style.visibility = "visible";
	skeres.style.visibility = "visible";
	papirs.style.visibility = "visible";
	h1.style.visibility = "visible";
	akmens.style.pointerEvents = "auto";
  	
	 }, 3800);
	}

	if(computerChoice === 1){
	user++;
	skeres1.style.visibility = "visible";
	skeres1.style.position = "absolute";
	skeres1.style.left = "18%";
	if (window.matchMedia("(max-width: 500px)").matches) {
		skeres1.style.position = "absolute";
		skeres1.style.top = "-150%";
		skeres1.style.left = "30%";
		};
	setTimeout(function(){ 
	akmens.style.visibility = "hidden";
	skeres1.style.visibility = "hidden";
	h1.style.visibility = "hidden";
	rockBeatsScissors.style.visibility = "visible";
	rockBeatsScissors.style.position = "absolute";
	rockBeatsScissors.style.top = "30%";
	rockBeatsScissors.style.left = "20%";
	rockBeatsScissors.style.width = "30%";
	rockBeatsScissors.style.height = "auto";
	/*rockBeatsScissors.classList.add("appearanceClass");*/
	 }, 1500);
	setTimeout(function(){ 
	rockBeatsScissors.style.visibility = "hidden";	
	akmens.style.visibility = "visible";
	skeres.style.visibility = "visible";
	papirs.style.visibility = "visible";
	h1.style.visibility = "visible";
	akmens.style.pointerEvents = "auto";
  	
	}, 3800);
	} 

	if(computerChoice === 2) {
	PC++;
	papirs1.style.visibility = "visible";
	papirs1.style.position = "absolute";
	papirs1.style.left = "18%";
		if (window.matchMedia("(max-width: 500px)").matches) {
		papirs1.style.position = "absolute";
		papirs1.style.top = "-150%";
		papirs1.style.left = "30%";

	};
	setTimeout(function(){ 
	akmens.style.visibility = "hidden";
	papirs1.style.visibility = "hidden";
	h1.style.visibility = "hidden";
	paperCoversRock.style.visibility = "visible";
	paperCoversRock.style.position = "absolute";
	paperCoversRock.style.top = "30%";
	paperCoversRock.style.left = "30%";
	paperCoversRock.style.width = "30%";
	paperCoversRock.style.height = "auto";
	/*paperCoversRock.classList.add("appearanceClass")*/
	;
	 }, 1500);
	setTimeout(function(){ 
	paperCoversRock.style.visibility = "hidden";	
	akmens.style.visibility = "visible";
	skeres.style.visibility = "visible";
	papirs.style.visibility = "visible";
	h1.style.visibility = "visible";
	akmens.style.pointerEvents = "auto";
  	}, 3800);
	}

	userPoints.textContent = user;
	PCPoints.textContent = PC;
}
	
	


	function clickHandlerSkeres(){ // declare a function that updates the state
  	elementIsClicked = true;
  	computerChoice = PcChoice();
  	skeres.style.pointerEvents = "none";
  	papirs.style.visibility = "hidden";
  	akmens.style.visibility = "hidden";
  
	if(computerChoice === 1){
	skeres1.style.visibility = "visible";
	skeres1.style.position = "absolute";
	skeres1.style.left = "40%";
	setTimeout(function(){ 
	skeres.style.visibility = "hidden";
	skeres1.style.visibility = "hidden";
	h1.style.visibility = "hidden";
	weHaveaTie.style.visibility = "visible";
	weHaveaTie.style.position = "absolute";
	weHaveaTie.style.top = "30%";
	weHaveaTie.style.left = "30%";
	 }, 1500);
	setTimeout(function(){ 
	weHaveaTie.style.visibility = "hidden";	
	akmens.style.visibility = "visible";
	skeres.style.visibility = "visible";
	papirs.style.visibility = "visible";
	h1.style.visibility = "visible";
	skeres.style.pointerEvents = "auto";
	}, 3800);
	
	} else if(computerChoice === 0){
	PC++;
	akmens1.style.visibility = "visible";
	akmens1.style.position = "absolute";
	akmens1.style.left = "15%";
	setTimeout(function(){ 
	skeres.style.visibility = "hidden";
	akmens1.style.visibility = "hidden";
	h1.style.visibility = "hidden";
	rockBeatsScissors.style.visibility = "visible";
	rockBeatsScissors.style.position = "absolute";
	rockBeatsScissors.style.top = "30%";
	rockBeatsScissors.style.left = "20%";
	rockBeatsScissors.style.width = "30%";
	rockBeatsScissors.style.height = "auto";
	;
	 }, 1500);
	setTimeout(function(){ 
	rockBeatsScissors.style.visibility = "hidden";	
	akmens.style.visibility = "visible";
	skeres.style.visibility = "visible";
	papirs.style.visibility = "visible";
	h1.style.visibility = "visible";
	skeres.style.pointerEvents = "auto";
	 }, 3800);


	} else if(computerChoice === 2) {
	user++;
	papirs1.style.visibility = "visible";
	papirs1.style.position = "absolute";
	papirs1.style.left = "40%";
	setTimeout(function(){ 
	skeres.style.visibility = "hidden";
	papirs1.style.visibility = "hidden";
	h1.style.visibility = "hidden";
	scissorsBeatPaper.style.visibility = "visible";
	scissorsBeatPaper.style.position = "absolute";
	scissorsBeatPaper.style.top = "30%";
	scissorsBeatPaper.style.left = "30%";
	scissorsBeatPaper.style.width = "40%";
	scissorsBeatPaper.style.height = "auto";
	;
	 }, 1500);
	setTimeout(function(){ 
	scissorsBeatPaper.style.visibility = "hidden";	
	akmens.style.visibility = "visible";
	skeres.style.visibility = "visible";
	papirs.style.visibility = "visible";
	h1.style.visibility = "visible";
	skeres.style.pointerEvents = "auto";
	 }, 3800);
	
	}
	userPoints.textContent = user;
	PCPoints.textContent = PC;
	elementIsClicked = false;

	}

	function clickHandlerPapirs(){ // declare a function that updates the state
	  elementIsClicked = true;
	  computerChoice = PcChoice();
	  papirs.style.pointerEvents = "none";
	  skeres.style.visibility = "hidden";
	  akmens.style.visibility = "hidden";
  
	if(computerChoice === 2){
	papirs1.style.visibility = "visible";
	papirs1.style.position = "absolute";
	papirs1.style.left = "63%";
	setTimeout(function(){ 
	papirs.style.visibility = "hidden";
	papirs1.style.visibility = "hidden";
	h1.style.visibility = "hidden";
	weHaveaTie.style.visibility = "visible";
	weHaveaTie.style.position = "absolute";
	weHaveaTie.style.top = "30%";
	weHaveaTie.style.left = "30%";
	 }, 1500);
	setTimeout(function(){ 
	weHaveaTie.style.visibility = "hidden";	
	akmens.style.visibility = "visible";
	skeres.style.visibility = "visible";
	papirs.style.visibility = "visible";
	h1.style.visibility = "visible";
	papirs.style.pointerEvents = "auto";
	}, 3800);
	
	} else if(computerChoice === 0){
	user++;
	akmens1.style.visibility = "visible";
	akmens1.style.position = "absolute";
	akmens1.style.left = "38%";
	setTimeout(function(){ 
	papirs.style.visibility = "hidden";
	akmens1.style.visibility = "hidden";
	h1.style.visibility = "hidden";
	paperCoversRock.style.visibility = "visible";
	paperCoversRock.style.top = "30%";
	paperCoversRock.style.position = "absolute";
	paperCoversRock.style.left = "20%";
	paperCoversRock.style.width = "30%";
	paperCoversRock.style.height = "auto";
	;
	 }, 1500);
	setTimeout(function(){ 
	paperCoversRock.style.visibility = "hidden";	
	akmens.style.visibility = "visible";
	skeres.style.visibility = "visible";
	papirs.style.visibility = "visible";
	h1.style.visibility = "visible";
	papirs.style.pointerEvents = "auto";
	 }, 3800);


	} else if(computerChoice === 1) {
	PC++;
	skeres1.style.visibility = "visible";
	skeres1.style.position = "absolute";
	skeres1.style.left = "63%";
	setTimeout(function(){ 
	papirs.style.visibility = "hidden";
	skeres1.style.visibility = "hidden";
	h1.style.visibility = "hidden";
	scissorsBeatPaper.style.visibility = "visible";
	scissorsBeatPaper.style.position = "absolute";
	scissorsBeatPaper.style.top = "30%";
	scissorsBeatPaper.style.left = "30%";
	scissorsBeatPaper.style.width = "40%";
	scissorsBeatPaper.style.height = "auto";
	;
	 }, 1500);
	setTimeout(function(){ 
	scissorsBeatPaper.style.visibility = "hidden";	
	akmens.style.visibility = "visible";
	skeres.style.visibility = "visible";
	papirs.style.visibility = "visible";
	h1.style.visibility = "visible";
	papirs.style.pointerEvents = "auto";
	 }, 3800);
	
	}
	userPoints.textContent = user;
	PCPoints.textContent = PC;
	elementIsClicked = false;

	}

akmens.addEventListener('click', clickHandlerAkmens); // associate the function above with the click event
skeres.addEventListener('click', clickHandlerSkeres);
papirs.addEventListener('click', clickHandlerPapirs);


