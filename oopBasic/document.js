//POO
// Data structure called Object
const natalia = {
  name: "Natalia Ruby",
  age: 20,
  approvedCourses: ["Curso Definitivo de HTML", "Curso Practico de HTML y CSS"],
  approveCourse(newCourse) {
    this.approveCourse.push(newCourse);
  },
};

// Function to approve courses
natalia.approvedCourses.push("Curso de Responsive Design");

// Prototype
function Student(name, age, approvedCourses) {
  this.name = name;
  this.age = age;
  this.approvedCourses = approvedCourses;
  // Below theres a method
  //   this.approveCourse = function (newCourse) {
  //     this.approveCourse.push(newCourse);
  //   };
}

// Below theres a method
Student.prototype.approveCourse = function (newCourse) {
  this.approveCourse.push(newCourse);
};

// Creating an instance
const juana = new Student("Juana Alejandra", 15, [
  "Curso de Introducción a la producción de videojuegos",
  "Curso de Creación de Personajes",
  "Curso de Unreal Engine",
]);

// Prototype with Class syntax ES6
class Student2 {
  constructor({ name, age, email, approvedCourses = [] }) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.approvedCourses = approvedCourses;
    // Below theres a method
    //   this.approveCourse = function (newCourse) {
    //     this.approveCourse.push(newCourse);
    //   };
  }
  // Below theres a method
  approveCourse2(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}

const miguel = new Student2({
  email: "miguel@email.com",
  name: "Miguel Angel",
  age: 28,
});

// Example of working with data structure of an object with out prototype or class
const juan1 = {
  name: "Juan",
  username: "juandc",
  points: 100,
  socialMedia: {
    twitter: "fjuandc",
    instagram: "fjuandc",
    facebook: undefined,
  },
  approvedCourses: ["Curso Definitivo de HTML", "Curso Practico de HTML y CSS"],
  learnPaths: [
    {
      name: "Escuela de Desarrollo Web",
      courses: [
        "Curso Definitivo de HTML",
        "Curso Practico de HTML y CSS",
        "Curso de Responsive Design",
      ],
    },
    {
      name: "Escuela de Videojuegos",
      courses: [
        "Curso de Introducción a la Producción de Videojuegos",
        "Curso de Unreal Engine",
        "Curso de Unity 3D",
      ],
    },
  ],
};

const miguel1 = {
  name: "Miguel",
  username: "miguelAC",
  points: 1000,
  socialMedia: {
    twitter: "miguelAC",
    instagram: "miguelAC",
    facebook: undefined,
  },
  approvedCourses: ["Curso Definitivo de HTML", "Curso Practico de HTML y CSS"],
  learnPaths: [
    {
      name: "Escuela de Desarrollo Web",
      courses: [
        "Curso Definitivo de HTML",
        "Curso Practico de HTML y CSS",
        "Curso de Responsive Design",
      ],
    },
    {
      name: "Escuela de Videojuegos",
      courses: [
        "Curso de Introducción a la Producción de Videojuegos",
        "Curso de Unreal Engine",
        "Curso de Unity 3D",
      ],
    },
  ],
};

// Example of working with class
class Student3 {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

const juan2 = new Student3({
  name: "Juan",
  username: "juandc",
  email: "juan@email.com",
  twitter: "fjuandc",
});

const miguel2 = new Student3({
  name: "Miguel",
  username: "migueldc",
  email: "miguel@email.com",
  instagram: "fmigueldc",
});
