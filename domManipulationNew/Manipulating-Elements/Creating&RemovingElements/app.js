// CREATING ELEMENTS
const contentArea = document.getElementById("contentArea");
const listArea = document.getElementById("listArea");

// InnerHTML
contentArea.innerHTML = "<p>This is a new paragraph</p>";
listArea.innerHTML += "<li>item 5</li>";

// InsertAdjacentElement
/* Positions:
    beforebegin
    beforeend
    afterbegin
    afterend
*/
contentArea.insertAdjacentHTML("beforeend", "<p>This is another paragraph</p>");
listArea.insertAdjacentHTML("beforeend", "<li>item 6</li>");

// CreateElement
/* Positions:
    prepend
    before
    after
    append
*/
const newParagraph = document.createElement("p");
newParagraph.textContent = "Created by CreateElement";
contentArea.append(newParagraph);

const newItem = document.createElement("li");
newItem.textContent = "item 7";
listArea.prepend(newItem);
listArea.before(newItem);
listArea.after(newItem);
listArea.append(newItem);

// REMOVING ELEMENTS

// Remove
const firstItem = document.querySelector("li");
firstItem.remove();

newParagraph.remove();

// RemoveChild
const list = document.querySelector("ul");
list.removeChild(list.firstElementChild);

listArea.removeChild(listArea.firstElementChild);
