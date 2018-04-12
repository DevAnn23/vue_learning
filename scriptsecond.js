const circle = document.querySelector(".circle"),
	info = document.querySelector(".info"),
	section = document.querySelector(".no-vue");

var positionValtop = circle.offsetTop;
var positionValleft = circle.offsetLeft;



//	var x = e.clientX + 12;
//		var y = e.clientY + 2;
function addShadow() {
	var div = document.createElement("div");
div.style.top = positionValtop + 30 + "px";
div.style.left = positionValleft + 10 + "px";
div.style.borderRadius = "50%";
section.appendChild(div);
div.style.backgroundColor = "red";
div.style.height = 5 + "px";
div.style.width = 5 + "px";
div.style.position = "absolute";

console.log(circle.style.left);
}
//function winGame () {
//	if(positionValtop)
//}
//function move(e) {
//	circle.style.top = positionVal + "%";
//positionVal = positionVal + 2;
//	console.log("wykonane");
//}
const move = (e) => {

	if (e.keyCode === 39) {
		positionValleft += 2;
	}
	if (e.keyCode === 37) {
		positionValleft -= 2;
	}
	if (e.keyCode === 38) {
		positionValtop += -2;
	}
	if (e.keyCode === 40) {
		positionValtop += 2;
	}


circle.style.top = positionValtop + "px";
circle.style.left = positionValleft + "px";

	addShadow();
	console.log("wykonane strzałkowo" + e.keyCode);
}
window.addEventListener("keydown", move);
