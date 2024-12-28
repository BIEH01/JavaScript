// Variables

var a; // Declaring
var b = "b"; // Declaring and Assigning
b = "bb"; // Re Assigning
var a = "aa"; // Re Declaring

// Global scope
var fruit = "Apple"; // Global variable
console.log(fruit);

function bestFruit() {
  console.log(fruit);
}

bestFruit();

// More examples
function countries() {
  country = "Colombia"; // Assigning GLobal variable without const, let, var
  console.log(country);
}

countries();
console.log(country);
