console.log('script!');

const robot = require('robotjs');

let newX, newY;
document.addEventListener('click', (e)=> {
	console.log('======= START =======')
	let mouse = robot.getMousePos();
	newX = mouse.x + 10;
	newY = mouse.y + 10;
	console.log('new X, Y ',newX, newY)
	
	robot.moveMouse(newX, newY)
	console.log('robot.moveMouse', robot.getMousePos())
	
	robot.dragMouse(newX, newY)
	console.log('robot.dragMouse', robot.getMousePos())
	
	console.log('=======END=======')
});
