// Style
const title = document.querySelector("h1");
title.style.color = "Red";

const menu = document.querySelector("menu");
menu.style.backgroundColor = "Red";
menu.style.fontSize = "25px0";

// ClassName
menu.className = "main-menu";

// ClassList
const button = document.querySelector("button");
button.addEventListener("click", () => {
	menu.classList.toggle("invisible");
});
// menu.classList.add("invisible");
// menu.classList.remove("invisible");
// menu.classList.contains("invisible");
