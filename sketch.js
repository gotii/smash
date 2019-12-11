let speed = 10;
var ballkax = 60;
var f = "4vh";
var score = 1;
let bg;
// var mouseX = 1;

function setup() {
	createCanvas(windowWidth, windowHeight);
	bg = loadImage('img/bg.jpg');
	// button = createButton('Left');
	// button.position(19, height - 150);
	// button.mousePressed(changeRectPosLeft);
	// button = createButton('Right', 50);
	// button.position(width - 75, height - 150);
	// button.mousePressed(changeRectPosRight);
}


var circle = {
	x: ballkax,
	y: 0,
	diameter: 20,
};

function draw() {
	background(bg);

	// buttons 
	let col = color(227, 78, 41);
	button = createButton("<--");
	button.style('font-size', '15px');
	button.style('background-color', col);
	button.style('border-radius', "4px");
	button.position(10, height / 2);

	button2 = createButton("-->");
	button2.style('font-size', '15px');
	button2.style('background-color', col);
	button2.style('border-radius', "4px");
	button2.position(width - 50, height / 2);


	textFont('verdana');
	textSize(24);
	fill(227, 78, 41);
	strokeWeight(2);
	stroke(227, 78, 41);
	text("Score :" + score, 50, 50);
	if (circle.y + 20 > height - 10) {
		if (circle.x + 20 > mouseX && circle.x < mouseX + 54 && circle.y + 20 > height + 20) {
			console.log("Score :" + score, 30, 40);
			// real code
			score = score + 1;
		}
	};


	if (mov() == true) {
		textFont('verdana');
		strokeWeight(4);
		stroke(130, 18, 72);
		textSize(50);
		fill(130, 18, 72);
		text("Yess", width / 2 - 10, height / 2);
	} else if (mov() == false) {
		strokeWeight(4);
		stroke(130, 18, 72);
		fill(130, 18, 72);
		textSize(50);
		text("Outttttt", width / 2 - 100, height / 2);
		mov.stop();
	}
	// fill(255, 255, 255);
	// text("Score :" + score / 3, 30, 40);
	// console.log("Score :" + score / 3, 30, 40);





	fill(25, 34, 342);
	mov();
	fill(43, 87, 255)
	dis();
	rectos();
	keyPressed();


	if (circle.y >= height) {
		circle.y = 0;
		changeinX();
	}
	circle.y += speed;



}

function changeinX() {
	circle.x = random(20, width);
	if (circle.x > width) {
		circle.x = 20;
	}


	if (score > 30) {
		speed = 15;
	}

	if (score > 50) {
		speed = 20;
	}
}

function mov() {
	if (circle.y > height - 10) {
		if (circle.x + 20 > mouseX && circle.x < mouseX + 55 && circle.y + 20 > height - 5) {
			return true;
		} else {
			return false;
		}
	}
}


function rectos() {
	let go = mouseX;
	// right rect
	fill(250, 0, 245);
	if (mouseX >= width / 2) {
		rect(go, height - 10, 50, 10);
		go = 0;
	} else if (mouseX <= width / 2) {
		rect(go, height - 10, 50, 10);
		go = width / 2;
	}
}


function dis() {
	noStroke();
	fill(227, 217, 23);
	ellipse(circle.x, circle.y, 24, 24);
}



function keyPressed() {
	let space = random(15, 22);
	if (keyCode === LEFT_ARROW) {
		if (keyIsPressed === true) {
			mouseX -= space;
		}
	}
	if (keyCode === RIGHT_ARROW) {
		if (keyIsPressed === true) {
			mouseX += space;
		}
	}
}


// function changeRectPosLeft() {
// 	mouseX -= space;

// }

// function changeRectPosRight() {
// 	mouseX += space;

// }

//prevent my page
// document.addEventListener('contextmenu', event => event.preventDefault());