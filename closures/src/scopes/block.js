// Block Scope {InABlockScope}
function fruits() {
  if (true) {
    var fruit1 = "Apple"; // Function scope
    let fruit2 = "Kiwi"; // Block scope
    const fruit3 = "Banana"; // Block scope
    console.log(fruit3); // In the block
    console.log(fruit2); // In the block
  }

  console.log(fruit1); // Out of block
}
