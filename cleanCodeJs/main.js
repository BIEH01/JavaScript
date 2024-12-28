// JavaScript is a static language

// Before ES6, Usage

{
	// Var
	var name = "Bryan";
	var age = 28;

	{
		console.log("value in block", age); //> 28
		var age = 29;
	}

	console.log("value out of block", age); //> 29
	age = age * 2;
	console.log("new value", age); //> 58
}

// After ES6, Usage

{
	// Let
	let name = "Mariana";
	let age = 28;

	{
		console.log("value in block", age); //> error
		let age = 29;
	}

	console.log("value out of block", age); //> 28
	age = age * 2;
	console.log("new value", age); //> 56
}
{
	// Cons}
	const pi = 3.14159;
	pi = 3.1416;
	console.log(pi); //> error
}

// Rules of Nomenclature

{
	// No recommended
	const yyyymmdstr = moment().format("YYYY/MM/DD");

	let arrayNames = ["Alex", "Mariana", "Cande"];

	getUserInfo();
	getClientData();
	getCustomerRecord();

	// Recommended
	const currentDay = moment().format("YYYY/MM/DD");

	let nameList = ["Alex", "Mariana", "Cande"];

	getUser();
}

// Nomenclature for Type of Data

{
	// Arrays

	// No recommended
	const user = ["Alex", "Mariana", "Cande"];

	// Regular
	const userList = ["Alex", "Mariana", "Cande"];

	// Good
	const users = ["Alex", "Mariana", "Cande"];

	// Excellent
	const userNames = ["Alex", "Mariana", "Cande"];
}
{
	// Booleans

	// No recommended
	const valid = true;
	const read = false;
	const color = true;

	// Recommended
	const isValid = true;
	const canRead = false;
	const hasColor = true;
}
{
	// Numbers

	// No recommended
	const users = 15;

	// Recommended
	const maxUsers = 50;
	const minUsers = 10;
	const totalUsers = 15;
}
{
	// Functions

	// No recommended
	createUserIfNotExist();
	updateUserIfNotEmpty();
	sendEmailIfIsValid();

	// Recommended
	createUser();
	updateUser();
	sendEmail();
	getUser();
	setUser();
	isValidUser();
}
{
	// Classes

	// No recommended
	class Data {}
	class Manager {}
	class Info {}

	// Recommended
	class User {}
	class userProfile {}
	class Account {}
}

/*
    More examples

    Arreglos
    
    const numbers = [1, 2, 3, 4, 5]
    const names = ['Cande', 'Alex', 'Mariana']
    const colors = ['red', 'green', 'blue']
    
    Booleanos
    
    const isActive = true
    const isCorrect = false
    const canWrite = true
    const hasUserName = false

    Números
    
    let result = 3543
    const y = 20
    const PI = 3.14159

    Funciones
    
    sendAlert()
    createNewObject()
    setPassword()
    getResults()

    Clases
    
    class School {}
    class Service {}
    class Account {}
*/

// Scopes

{
	// Global scope
	let greeting = "Hello world!";

	function greet() {
		console.log(greeting);
	}
	greet(); //> Hello world!
}
{
	// Local scope
	function greet() {
		let greeting = "Hello world!";
		console.log(greeting);
	}

	greet(); //> Hello world!
	console.log(greeting); //> error
}
{
	// Block scope
	{
		const greeting = "Hello world!";
		var lang = "English";
		console.log(greeting);
	}
	console.log(lang); //> English
	console.log(greeting); //> Error
}
{
	// Static scope
	const age = 28;

	function printAge() {
		console.log(age);
	}

	function mainApp() {
		const age = 26;
		printAge();
	}
	mainApp(); //> 28
}

// Hoisting

{
	// Function example
	greet(); //> Hoisting

	function greet() {
		let greeting = "Hello world!";
		console.log(greeting); //> Hello world!
	}
}
{
	// Variable example
	var greet = "Hello";
	(function () {
		var greet; //> Hoisting
		console.log(greet); //> Undefined
		var greet = "Hi";
		console.log(greet); //> Hi
	})();
}

// Function Usage

{
	// Functions Declaration
	function getResult() {
		return "results";
	}

	getResult(); //> results
}
{
	// Function expression
	const getResult = function () {
		return "results";
	};

	getResult();
}

// Arguments and Parameters

{
	// number is the parameter
	function getDouble(number) {
		return number * 2;
	}
	// 10 is the argument
	getDouble(); //> undefined
	getDouble(10); //> 20
}
{
	// Default parameter
	function greet(person = "strange") {
		console.log("Hello ", person);
	}
	greet(); //> Hello strange
	greet("Alex"); //> Hello Alex
}

// Spread Operator

{
	// Without rest
	function add(x, y) {
		return x + y;
	}
	add(1, 2, 3, 4); //> 3
}
{
	// With rest
	function add(...args) {
		return args.reduce((prev, current) => prev + current, 0);
	}
	add(1, 2, 3, 4); //> 10
}
{
	// Spread in objects
	const course = {
		title: "JavaScript",
		content: "All you need to know",
	};
	const courseCloned = Object.assign({}, course);
	const spreadCourseCloned = { ...course };

	console.log(spreadCourseCloned); //> { title: "JavaScript", content: "All you need to know" };
}
{
	// Spread in arrays
	const numbersA = [1, 2, 3];
	const clonedNumbers = numbers.slice();
	const SpreadClonedNumbers = [...numbers];

	console.log(SpreadClonedNumbers); //> [1, 2, 3];

	const numbersB = [4, 5, 6];
	const newNumbers = [...numbersA, ...numbersB];
	console.log(newNumbers); //> [1, 2, 3, 4, 5, 6]
}

// Arrow Functions and This

{
	// Lambda expression
	const getResult = () => "Results";
	console.log(getResult()); //> Results
}
{
	// Without arrow function
	[1, 2, 3].map(function (n) {
		return n * 2;
	});
}
{
	//With arrow function
	[1, 2, 3].map((n) => n * 2);
}
{
	// This and arrow function
	const counter = {
		number: 0,
		increase() {
			setInterval(() => console.log(++this.number), 1000);
		},
	};
	counter.increase(); //> 1, 2, 3...
}
{
	// This and normal function
	const counter = {
		number: 0,
		increase() {
			setInterval(function () {
				console.log(++this.number);
			}, 1000);
		},
	};
	counter.increase(); //> NaN
}
{
	// This and normal function with bind
	const counter = {
		number: 0,
		increase() {
			setInterval(
				function () {
					console.log(++this.number);
				}.bind(this),
				1000
			);
		},
	};
	counter.increase(); //> 1, 2, 3...
}

// Classes and Constructor

{
	// Constructor before ES6
	function Person(name) {
		this.name = name;
	}
	var person = new Person("Bryan");
	console.log(person.name); //> Bryan

	// Method
	Person.prototype.greet = function () {
		return `Hello ${this.name}`; //> Bryan
	};
	console.log(person.greet()); //> Bryan
}
{
	// Constructor after ES6
	class Person {
		constructor(name) {
			this.name = name;
		}
		// Method
		greet() {
			return `Hello ${this.name}`; //> Bryan
		}
	}
	const person = new Person("Bryan");
	console.log(person.name);
	console.log(person.greet()); //> Bryan
}

// Class Inheritance

{
	// Before ES6
	// Parent class
	function Person(name) {
		this.name = name;
	}

	Person.prototype.greet = function () {
		return `Hello ${this.name}`; //> Bryan
	};

	// Child class
	function Developer(name) {
		this.name = name;
	}

	Developer.prototype = Object.create(Person.prototype);
	Developer.prototype.writeCode = function (coffee) {
		if (coffee) console.log("I am working in a new feature");
		else console.log("I need coffee, please!");
	};
	var dev = new Developer("Bryan");
	dev.greet(); //> Hello Bryan
	dev.writeCode(); //> I need coffee, please!
}
{
	// After ES6
	// Parent class
	class Person {
		constructor(name) {
			this.name = name;
		}
		// Method
		greet() {
			console.log(`Hello ${this.name}`); //> Bryan
		}
	}

	// Child class
	class Developer extends Person {
		constructor(name) {
			super(name);
		}
		writeCode(coffee) {
			coffee
				? console.log("I am working in a new feature")
				: console.log("I need coffee, please!");
		}
	}

	const dev = new Developer("Bryan");
	dev.greet(); //> Hello Bryan
	dev.writeCode(); //> I need coffee, please!
}

// Reduced Size, Single Responsibility

{
	class UserAuth {
		constructor(user) {
			this.user = user;
		}
		verifyCredentials() {
			return false;
		}
	}

	class UserSettings extends UserAuth {
		constructor(user, settings) {
			super(user);
			this.settings = settings;
		}
		changeSettings(settings) {
			if (this.verifyCredentials()) {
				console.log("You can modify settings");
			} else {
				console.log("You have no access to settings");
			}
		}
	}

	const newAccess = new UserSettings("Alex", "Dark Mode");
	newAccess.changeSettings();
}

// Don't Repeat Yourself. DRY

{
	const juanAverage = (30 + 50 + 70) / 3;
	const alexAverage = (80 + 90 + 70 + 80) / 4;
	const candeAverage = (40 + 100) / 2;

	function getAverage(...grades) {
		return grades.reduce((prev, current) => prev + current, 0) / grades.length;
	}

	const juanAverage2 = getAverage(30, 50, 70);
	const alexAverage2 = getAverage(80, 90, 70, 80);
	const candeAverage2 = getAverage(40, 100);
}

// Notación big O

{
	//Algoritmo de tiempo constante: O(1)
	const getLast = (items) => items[items.length - 1];
	getLast(["a", "b", "c", "d"]); //> d(1 iteración)
	getLast(["a", "b", "c", "d", "e", "f", "g"]); //> g(1 iteración)
}
{
	//Algoritmo de tiempo lineal: O(N)
	const findIndex = (items, match) => {
		for (let i = 0, total = items.length; i < total; i++)
			if (items[i] == match) return i;
		return -1;
	};

	const array = ["a", "b", "c", "d"];
	findIndex(array, "a"); // 0  (1 iteración)
	findIndex(array, "d"); // 3  (4 iteraciones)
	findIndex(array, "e"); // -1 (4 iteraciones)
}
{
	//Algoritmo de tiempo cuadrático: O(N²)
	const buildSquareMatrix = (items) => {
		let matrix = [];
		for (let i = 0, total = items.length; i < total; i++) {
			matrix[i] = [];
			for (let j = 0, total = items.length; j < total; j++)
				matrix[i].push(items[j]);
		}
		return matrix;
	};

	buildSquareMatrix(["a", "b", "c"]);

	/* 9 iteraciones para 3 elementos, retorna:
        [
            ['a', 'b', 'c'],
            ['a', 'b', 'c'],
            ['a', 'b', 'c']
        ]
    */
}
{
	//Algoritmo de tiempo logarítmico: O(n log n)
	const quickSort = (list) => {
		if (list.length < 2) return list;
		let pivot = list[0];
		let left = [];
		let right = [];
		for (let i = 1, total = list.length; i < total; i++) {
			if (list[i] < pivot) left.push(list[i]);
			else right.push(list[i]);
		}
		return [...quickSort(left), pivot, ...quickSort(right)];
	};

	quickSort(["q", "a", "z", "w", "s", "x", "e", "d", "c", "r"]);
	// ["a", "c", "d", "e", "q", "r", "s", "w", "x", "z"]
}
