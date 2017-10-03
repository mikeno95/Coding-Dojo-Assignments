// 0 empty, 1 coin, 2 brick , 3 cherry
// array that contains arrays for the game display
var world =[
				[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
				[2, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
				[2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2],
				[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
				[2, 1, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 1, 2],
				[2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2],
				[2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2],
				[0, 0, 0, 0, 0, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 2, 2, 0, 2, 2, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0], // center
				[0, 0, 0, 0, 0, 2, 1, 2, 1, 1, 1, 2, 0, 0, 0, 2, 1, 1, 1, 2, 1, 2, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 2, 1, 2, 1, 1, 1, 2, 2, 0, 2, 2, 1, 1, 1, 2, 1, 2, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 0, 0, 0, 0, 0],	
				[2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2],
				[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
				[2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2],
				[2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2],
				[2, 2, 2, 2, 1, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 1, 2, 2, 2, 2],
				[2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2],
				[2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2],
				[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 2],
				[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
			];

// pacman's 'current' position. value is initial starting point	
// global variable for pacman's position	
var pacman = {
	current_x: 13, // initial x 
	current_y: 15 // initial y
};
var ghosts = { 
	redGhost: {x:13, y:7},
	blueGhost: {x:12, y:9}, 
	pinkGhost: {x:13, y:9}, 
	orangeGhost: {x:14, y:9}, 
	brown: {x:6, y:3}, 
	movingBlue: {x:6, y:15}, 
	movingPink: {x:20, y:3},
	dancer: {x:20, y:15}

}; 

var life = 5; // Pacman has 5 lives
var score = 0; // intial score is 0

function winGame(arr) {
	for (var k=0; k<arr.length; k++) {
		for (var a=0; a<arr[k].length; a++) {
			if (arr[k][a]==1) {
				return false;
			}
		}
	}
	return true;
}
// function displayEnd(l, w) {
// 	if (l==0) {
// 		document.getElementById('endDisplay').style.display = "block";
// 		document.getElementById('endDisplay').innerHTML = "You Lost :("; 
// 	} else if (winGame(w)) {
// 		document.getElementById('endDisplay').style.display = "block";
// 		document.getElementById('endDisplay').innerHTML = "You Won :)"; 
// 	}
// }

function displayGhost(obj, ghostId) {
	document.getElementById(ghostId).style.top = obj["y"]*20+"px";
	document.getElementById(ghostId).style.left = obj["x"]*20+"px";
}
// function moveGhost(obj) {
// 	// if the left side is a wall, then can only move up, right, or down (-y, +y, +x)
// 	// if the right side is a wall, then can only move up, left, or down (-y, +y, -x)
// 	// if top is a wall, then can only move left, right, down (-x, +x, +y)
// 	// if bottom is a wall, then can only move left, right, up (-x, +x, -y)
// 	for (var group in obj) { 
// 		var movePosition = Math.round(Math.random()*3);
// 		if (movePosition==0 && world[obj[group]["y"]][obj[group]["x"]+1]!=2) { // right  
// 			obj[group]["x"]++; 
// 		} else if (movePosition==1 && world[obj[group]["y"]][obj[group]["x"]-1]!=2) { // left 
// 			obj[group]["x"]--;

// 		} else if (movePosition==2 && world[obj[group]["y"]+1][obj[group]["x"]]!=2) { // down  
// 			obj[group]["y"]++;

// 		} else if (movePosition==3 && world[obj[group]["y"]-1][obj[group]["x"]]!=2) { // up  
// 			obj[group]["y"]--;
// 		}
// 		displayGhost(obj[group], group);
// 	}
// }
function moveGhost(obj) {
	// if the left side is a wall, then can only move up, right, or down (-y, +y, +x)
	// if the right side is a wall, then can only move up, left, or down (-y, +y, -x)
	// if top is a wall, then can only move left, right, down (-x, +x, +y)
	// if bottom is a wall, then can only move left, right, up (-x, +x, -y)
	for (var group in obj) { 
		var movePosition = Math.round(Math.random()*31);
		if (movePosition<=7 && world[obj[group]["y"]][obj[group]["x"]+1]!=2) { // right  
			obj[group]["x"]++; 
		} else if (movePosition>=8 && movePosition<=15 && world[obj[group]["y"]][obj[group]["x"]-1]!=2) { // left 
			obj[group]["x"]--;

		} else if (movePosition>=16 && movePosition<=23&& world[obj[group]["y"]+1][obj[group]["x"]]!=2) { // down  
			obj[group]["y"]++;

		} else if (movePosition>=24 && movePosition<=31 && world[obj[group]["y"]-1][obj[group]["x"]]!=2) { // up  
			obj[group]["y"]--;
		}
		displayGhost(obj[group], group);
	}
}
// edits the top and left position of Pacman. 20 is multiplied bc that is the size of each "box"
function displayPacman(){
	document.getElementById('pacman').style.top = pacman.current_y*20 +"px";
	document.getElementById('pacman').style.left = pacman.current_x*20+"px";
}; 

// function that reads the array and generate html for the game display
function displayWorld(arr) {
	var htmlString = "";

	if (winGame(world)) {
		document.getElementById('endDisplay').style.display = "block";
		document.getElementById('endDisplay').innerHTML = "You Won :)"; 
	}
	for(var i = 0; i < arr.length; i++) {
		htmlString+='<div class="row">';
		for(var j = 0; j < arr[i].length; j++) {
			if(arr[i][j]==2) {
				htmlString+='<div class="brick"></div>';
			} else if (arr[i][j]==1) {
				htmlString+='<div class="empty"><div class="dot"></div></div>';
			} else if (arr[i][j]==0) {
				htmlString+='<div class="empty"></div>';
			} else if (arr[i][j]==3) {
				htmlString+='<div class="cherry"></div>';
			}
		}
		htmlString+='</div>';
	}
	this.loop = function(){
		moveGhost(ghosts);
	}
	document.getElementById('container').style.width = (arr[0].length)*20+"px";
	document.getElementById('world').innerHTML = htmlString;
};

function displayScore() { // displays the score on the page
	document.getElementById('score').innerHTML = "Score: " + score;
};

// Pacman loses life
function displayLife() {
	document.getElementById('life').innerHTML = "Life: "+ life;
}

function restartPacman() {
	pacman.current_x=13; 
	pacman.current_y=15; 
}

function losePoints(obj) {
	for (var group in obj) {
		if (obj[group]["x"]==pacman.current_x && obj[group]["y"]==pacman.current_y) {
			life--;
			restartPacman();
			displayLife();
		}
	}
	if (life==0) {
		document.getElementById('endDisplay').style.display = "block";
		document.getElementById('endDisplay').innerHTML = "You Lost :("; 
	}

}

var display = new displayWorld(world); // call function to build world
displayPacman();
displayScore();
setInterval(display.loop, 100);
displayLife();



// function to move Pacman
// down: 40, left: 37, right: 39, up: 38
// everytime the key is pressed, it moves one box space in that direction.
document.onkeydown = function(event) {
	if(event.keyCode == 37 && world[pacman.current_y][pacman.current_x-1]!=2) {
		// move left
		// rotates to face left
		document.getElementById('pacman').style.transform = 'rotate(180deg)'; 
		pacman.current_x--;

	} else if (event.keyCode == 38 && world[pacman.current_y-1][pacman.current_x]!=2) {
		// move up
		// rotates to face up
		document.getElementById('pacman').style.transform = 'rotate(270deg)';
		pacman.current_y--;

	} else if (event.keyCode == 39 && world[pacman.current_y][pacman.current_x+1]!=2) {
		// move right
		// rotates to face down
		document.getElementById('pacman').style.transform = 'rotate(0deg)';
		pacman.current_x++;
		
	} else if (event.keyCode == 40 && world[pacman.current_y+1][pacman.current_x]!=2) {
		// move down
		// rotates to face down
		document.getElementById('pacman').style.transform = 'rotate(90deg)';
		pacman.current_y++;
		
	}
	if(world[pacman.current_y][pacman.current_x]==1) {
		score+=10; // when pacman gets coin, you get 10 points
		world[pacman.current_y][pacman.current_x]=0; // when pacman gets coin, coin div becomes empty
		displayWorld(world);
		displayScore();
	}
	if(world[pacman.current_y][pacman.current_x]==3) {
		score+=50; // when pacman gets cherry, you get 50 points
		world[pacman.current_y][pacman.current_x]=0; // when pacman gets coin, coin div becomes empty
		displayWorld(world);
		displayScore();
	}

	losePoints(ghosts); 
	displayPacman();
};
