let modal1 = document.getElementById("hidden-text");
let button1 = document.getElementById("button-text");

button1.onclick = () => {
	modal1.style.visibility = "visible";
};

let modal2 = document.getElementById("hidden-image");
let button2 = document.getElementById("button-image");

button2.onclick = () => {
  modal2.style.visibility = "visible";
  button2.style.visibility = "false";
};