//'use strict';
jQuery
$('input[type=range]').on('input', function (e) {
	var min = e.target.min,
		max = e.target.max,
		val = e.target.value;

	$(e.target).css({
		'backgroundSize': (val - min) * 100 / (max - min) + '% 100%'
	});
}).trigger('input');

window.onload = function () {
	var input = document.querySelector("input"),
		night = document.querySelector(".night"),
		valueOpacity = document.querySelector(".valueOpacity");
	night.style.opacity = input.value / 100;

	function updateValue() {
		night.style.opacity = this.value / 100;
		valueOpacity.innerHTML = this.value + "%";
	}

	input.addEventListener('change', updateValue);
	input.addEventListener('mousemove', updateValue);

};

/*Button Menu*/
var body = document.getElementById('#body');
var buttonMenu = document.getElementById('button-menu');
	var list = document.querySelector(".menu");
	
	buttonMenu.addEventListener("click", function(){
		list.classList.toggle("displayList");
		console.log("jest")
	})
function myFunction() {

	//body.addEventListener("resize",resizeWindow );

	var mobileViewport = window.matchMedia("screen and (max-width: 780px)");
	console.log(mobileViewport.matches);
	if (mobileViewport.matches === true) {
		buttonMenu.style.display = "block";
	} else {
		buttonMenu.style.display = "none";
	}
}

myFunction();

// VUE ***


var appKurs1 = new Vue({
	el: "#app-kurs1",
	data: {
		heading: "Witaj, to jest mój kurs Vue",
		text: "Zdaję sobię sprawę, że dużo sie tu dzieję."
	},
	methods: {
		toUpperCase: function(value){
			return value.toUpperCase();
		}
	}
	
});
var app3 = new Vue({
	el: '#app-3',
	data: {
		seen: false,

	}
})
var app8 = new Vue({
	el: '#app8',
	data: {
		counter: 0,
		guests: ['Adam', 'Anna', 'Jan']
	},
	methods: {
		addCategory() {

			if (!(this.guestName === undefined || this.guestName === "")) {
				this.guests.push(this.guestName);
			} else {
				alert("Pole nie może byc puste")
			}
			this.guestName = '';
		}
	}
})

// Social media
var yScrollAxis = Math.floor(window.pageYOffset);

window.onscroll = function () {
	var yScrollAxis = Math.floor(window.pageYOffset);
	if (yScrollAxis > 300) {
		app3.seen = true;
	} else {
		app3.seen = false;
	}
}
