const contentArea = document.querySelector("#contentArea");
const pOriginalTag = contentArea.querySelector("p");
const listArea = document.querySelector("#listArea");
const itemToReplace = listArea.children[2];

// Cloning Elements
const cloneP = pOriginalTag.cloneNode(true);
contentArea.append(cloneP);
cloneP.textContent = "This is a new text";

// Replacing Elements

itemToReplace.replaceWith(cloneP);
