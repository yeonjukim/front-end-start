$(document).ready(function () {
var box = $('.box');
var count = 0;
var game= $('#game');

var gameWidth = game.css("width");
var gameHeight = game.css("height");

function randomNumber(endNum){
	return Math.floor(Math.random()*endNum)+1;
}
function moveBox(){
	var x = randomNumber(950);
    var y = randomNumber(450);
	
	box.css({
        'left': x,
        'top': y
    });
	/*box.style.top = (Math.random()*(gameHeight-50))+'px';
	box.style.left = (Math.random()*(gameWidth-50))+'px';*/
}
window.setInterval(moveBox,1000);

box.click(function(){
	count++;
	countString = 'count:'  + count;
	$('#count').html(countString);
});


});