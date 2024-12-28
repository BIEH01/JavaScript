// Hoisting
var nameOfDog; // Undefined

// nameOfDog is not assigned before for hoisting just declared
console.log(nameOfDog);
var nameOfDog = "Elmo";
console.log(nameOfDog); // Now it has a value

var elmo; // undefined
nameOfPet();

function nameOfPet() {
  console.log(`El mejor perrito es ${elmo}`);
}

var elmo = "Elmito";
