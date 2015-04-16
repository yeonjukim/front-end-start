var box = document.querySelectorAll('.box')[0];
var count = 0;
var game= document.getElementById("game");

var gameWidth = game.clientWidth;
var gameHeight = game.clientHeight;
function moveBox(){
	box.style.top = (Math.random()*(gameHeight-50))+'px';
	box.style.left = (Math.random()*(gameWidth-50))+'px';
}
window.setInterval(moveBox,1000);

function saveCount(){
	count++;
	document.getElementById('count').innerHTML = "count: " + count;
}

box.addEventListener('click', saveCount);
