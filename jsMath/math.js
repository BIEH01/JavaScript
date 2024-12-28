// Function to calculate squares
// Method to group piece of code from group to groupEnd
// With ** we make an exponential operation or Math.pow and for PI there is a Math.PI function with .toFixed
// to trunk it

console.group("Squares");
function calcSquare(side) {
  return {
    perimeter: side * 4,
    area: side ** 2,
  };
}
console.groupEnd("Squares");

// Function to calculate triangles
console.group("Triangle");
function calcTriangle(side1, side2, base, height) {
  return {
    perimeter: side1 + side2 + base,
    area: (base + height) / 2,
  };
}

// The height of an isosceles triangle
function calcHeightTriangle(sides, base) {
  if (sides == base) {
    console.warn("Este no es un triangulo isosceles");
  } else {
    return Math.sqrt(sides ** 2 - base ** 2 / 4);
  }
}

console.groupEnd("Triangle");

// Function to calculate circles
console.group("Circle");

function calcCircle(radio) {
  const diameter = radio * 2;
  const radiusSquared = Math.pow(radio, 2);

  return {
    circumference: diameter * Math.PI,
    area: radiusSquared * Math.PI,
  };
}

console.groupEnd("Circle");

// Exercise of the playground for a high of a triangle
function solution(lado1, lado2, lado3) {
  if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
    return false;
  }

  const S = (lado1 + lado2 + lado3) / 2;
  const S1 = S - lado1;
  const S2 = S - lado2;
  const S3 = S - lado3;

  const H = (2 / lado1) * Math.sqrt(S * S1 * S2 * S3);
  const result = Math.floor(H);

  return result;
}

// Percentages for prices and more
function discounts(price, discount) {
  return (price * (100 - discount)) / 100;
}
discounts(150, 50);
