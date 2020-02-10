console.log('script!');

const robot = require('robotjs');

document.addEventListener('click', (e)=> {
	var mouse = robot.getMousePos();
	console.log(mouse)
	robot.moveMouse(mouse.x+100, mouse.y+100)
	console.log('=====================')
	console.log(robot.getMousePos())
	
	console.log('=======END=======')
});
