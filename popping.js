var cvs = document.getElementById('popping');
var ctx = cvs.getContext('2d');
var canvas_width;
var canvas_height;

var img = new Image();
img.src = 'https://i.imgur.com/cqRdtNc.png';

console.log('running');

var time_limit = 5;

var countdown = 0;
var timer = setInterval(checker, 1000);

var drawloop = setInterval(loop, 1000);

var drawing;

var events = [ 'mousemove', 'mousedown', 'mouseup' ];

events.forEach(function(element) {
	window.addEventListener(element, reset);
});

window.addEventListener('resize', updateVariables);

function updateVariables() {
	canvas_width = document.documentElement.clientWidth;
	canvas_height = document.documentElement.clientHeight;

	ctx.canvas.width = canvas_width;
	ctx.canvas.height = canvas_height;
}

function reset() {
	drawing = false;
	countdown = 0;

	ctx.clearRect(0, 0, canvas_width, canvas_height);

	cvs.style.zIndex = '-100';
}

function draw() {
	cvs.style.zIndex = '100';
	ctx.beginPath();
	ctx.drawImage(
		img,
		Math.ceil(Math.random() * canvas_width * 0.8 + canvas_width * 0.1),
		Math.ceil(Math.random() * canvas_height * 0.8 + canvas_height * 0.1)
	);
	console.log('drawing');
}

function rolldice() {
	return Math.ceil(Math.random() * 15);
}

function checker() {
	if (countdown == time_limit) {
		drawing = true;
	} else countdown += 1;
}

function loop() {
	if (drawing && rolldice() == 1) {
		// random countdown and draw something
		draw();
	}
}
updateVariables();
