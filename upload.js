//  // Nope. CSS is powerful.

// const buttons = document.querySelectorAll(".button--toggle");
// const checkbox = document.querySelector(".theme-toggle input");

// for (let button of buttons) {
// 	button.addEventListener("click", function () {
// 		button.classList.toggle("is-active");
// 	});
// }

// checkbox.addEventListener("keydown", function () {
// 	if (event.key === "Enter") {
// 		checkbox.checked = !checkbox.checked;
// 	}
// });
function setText(event){
    event.preventDefault();
    leftText.innerText = textsource.value.toUpperCase();
    rightText.innerText = textsource.value.toUpperCase();
  }
  var leftText = document.querySelector("#marquee div:first-of-type span");
  var rightText = document.querySelector("#marquee div:last-of-type span");
  var textsource = document.getElementById("textsource");
  setText();
  
