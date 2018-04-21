const circle = document.querySelector(".circle"),
	info = document.querySelector(".info"),
	section = document.querySelector(".no-vue"),
	circleH = circle.height,
	circleW = circle.width,
 fruits = document.getElementsByClassName('fruit');
var positionValtop = circle.offsetTop;
var positionValleft = circle.offsetLeft;

var div = document.createElement("div");
	div.style.top = positionValtop + circleH + "px";
	div.style.left = positionValleft + circleW / 2 + "px";
	div.style.borderRadius = "50%";
	section.appendChild(div);
	div.style.backgroundColor = "red";
	div.style.height = 2 + "px";
	div.style.width = 2 + "px";
	div.style.position = "absolute";




//	var x = e.clientX + 12;
//		var y = e.clientY + 2;
function addShadow() {
	var div = document.createElement("div");
	div.style.top = positionValtop + circleH + "px";
	div.style.left = positionValleft + circleW / 2 + "px";
	div.style.borderRadius = "50%";
	section.appendChild(div);
	div.style.backgroundColor = "red";
	div.style.height = 2 + "px";
	div.style.width = 2 + "px";
	div.style.position = "absolute";

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
		positionValleft += 5;
	}
	if (e.keyCode === 37) {
		positionValleft -= 5;
	}
	if (e.keyCode === 38) {
		positionValtop += -5;
	}
	if (e.keyCode === 40) {
		positionValtop += 5;
	}


	circle.style.top = positionValtop + "px";
	circle.style.left = positionValleft + "px";

	addShadow();
	for (var i=0; i < fruits.length; i++) {
	fruits[0].style.top = 330 + "px";
	fruits[0].style.left = 600 + "px";
	fruits[1].style.top = 490 + "px";
	fruits[1].style.left = 1000 + "px";
	fruits[2].style.top = 730 + "px";
	fruits[2].style.left = 830 + "px";
	console.log(positionValleft);

	if (positionValleft + circleW / 2 >= fruits[i].offsetLeft && positionValleft + circleW / 2 <= fruits[i].offsetLeft + fruits[i].width && positionValtop + circleH > fruits[i].offsetTop && positionValtop + circleH <= fruits[i].offsetTop + fruits[i].height){
		fruits[i].style.display = "none";
	}

};
}
window.addEventListener("keydown", move);
