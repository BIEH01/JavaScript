// Local Scope
function greeting() {
  let userName = "Ana"; // Variable assign
  console.log(userName);

  if (userName === "Ana") {
    console.log(`Hello ${userName}`); // In the scope
  }
}

greeting();
console.log(userName); // Out of the scope
