var board = document.getElementById("board");

var colorB = "<div class=\"black\"></div>";
var colorW = "<div class=\"white\"></div>";

    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){
        	if((i+j)%2==0)board.innerHTML += colorB;
        	else board.innerHTML += colorW;
        }
        board.innerHTML += "<br>";
    }


var color ;

board.addEventListener("mousedown",function(event) {
	color = event.target.className;
	event.target.className = "red"
})        

board.addEventListener("mouseup", function(event){
	event.target.className = color;
})