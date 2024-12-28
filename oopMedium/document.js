// Simple object of data structure
const juan = {
  name: "Juan",
  age: 18,
  approvedCourses: ["Curso 1"],
  addCourse(newCourse) {
    console.log("This", this);
    console.log("This.approvedCourses", this.approvedCourses);
    this.approvedCourses.push(newCourse);
  },
};

// Object statics properties
console.log(Object.keys(juan));
console.log(Object.getOwnPropertyNames(juan));
console.log(Object.entries(juan));
console.log(Object.getOwnPropertyDescriptors(juan)); // Best to use

// Console devTools
Object.entries(juan)[3][1]("Curso 2"); // Function does not work

// Ways to assign
juan.name = "Name";
juan["name"] = "Name";

// Do not do
const juan = {
  name: "Juan",
  age: 18,
  approvedCourses: ["Curso 1"],
};

const miles = juan; // Your assign two pointers to the same object and modifications will affect both

// Way to delete unless it is configurable false
delete juan.name;

// Adding properties with Object static property
Object.defineProperty(juan, "name", {
  value: "Name",
  enumerable: true,
  writable: true,
  configurable: true,
});

// Examples
Object.defineProperty(juan, "name", {
  value: "Name",
  enumerable: true,
  writable: true,
  configurable: true,
});

Object.defineProperty(juan, "project", {
  value: "First App",
  enumerable: false, // Avoid getting the key in Array but getOwnPropertyName
  writable: false, // Inmutable and unchangeable
  configurable: false, // It cannot be deleted
});

Object.defineProperty(juan, "navigator", {
  value: "Chrome",
  enumerable: false, // Avoid getting the key in Array but getOwnPropertyName
  writable: true,
  configurable: true,
});

Object.defineProperty(juan, "editor", {
  value: "VS code",
  enumerable: true,
  writable: false, // Inmutable and unchangeable
  configurable: true,
});

Object.defineProperty(juan, "terminal", {
  value: "WSL",
  enumerable: true,
  writable: true,
  configurable: false, // It cannot be deleted
});

Object.getOwnPropertyDescriptors(juan); // Best to use

// Getting the properties in an Array even enumerable false
Object.getOwnPropertyNames(juan);

// Others
Object.seal(juan); // Configurable true for all key
Object.freeze(juan); // Configurable and writable true for all key

// Shallow copy in Js to copy the key of another object but when theres another object in it fails
const obj1 = {
  a: "a",
  b: "b",
  c: {
    d: "d",
    e: "e",
  },
};

const obj2 = {};

for (prop in obj1) {
  obj2[prop] = obj1[prop];
}

const obj3 = Object.assign({}, obj1);
const obj4 = Object.create(obj1);

// JSON.stringify JSON.parse for copies of objects without pointer problems only with methods
const obj5 = JSON.stringify(obj1);
const obj6 = JSON.parse(obj5);

// Recursive
// function recursive() {
//     if (Validation) {
//         Recursive calls
//     } else {
//         Normal calls
//     }
// }

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let number = 0;
for (let index = 0; index < numbers.length; index++) {
  number = numbers[index];
  console.log({ index, numbers });
}

function recursive(numbers) {
  if (numbers.length != 0) {
    const firstNum = numbers[0];
    console.log(firstNum);
    numbers.shift();
    recursive(numbers);
  }
}

// DeepCopy and DeepFreeze with recursion
function deepFreeze(obj) {
  Object.keys(obj).forEach((prop) => {
    if (typeof obj[prop] === "object") deepFreeze(obj[prop]);
  });
  return Object.freeze(obj);
}

function isObject(subject) {
  return typeof subject == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function deepCopy() {
  let copySubject;
  const subjectIsObject = isObject(subject);
  const subjectIsArray = isArray(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for (key in subject) {
    const keyIsObject = isObject(subject[key]);

    if (keyIsObject) {
      copySubject[key] = deepCopy(subject);
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }
  return copySubject;
}

// Factory pattern and RORO
// How to required param
function requiredParam(param) {
  throw new Error(`${param} es obligatorio`);
}

// Duck typing in JavaScript
function createLearningPath({ name = requiredParam(name), courses = [] }) {
  (this.name = name), (this.courses = courses);
  // const private = {
  //   _name: name,
  //   _courses: courses,
  // };
  // const public = {
  //   get name() {
  //     return private["_name"];
  //   },
  //   set name(newName) {
  //     if (newName.length != 0) {
  //       private["_name"] = newName;
  //     } else {
  //       console.warn("Tu nombre debe ser mas de 1 character");
  //     }
  //   },
  //   get courses() {
  //     return private["_courses"];
  //   },
  // };
  // return public;
}

function createStudent({
  name = requiredParam(name),
  age = requiredParam(age),
  email = requiredParam(email),
  twitter,
  approvedCourses = [], // Assigning default properties
  learningPaths = [], // Assigning default properties
} = {
  /*Empty object as an answer if no params*/
}) {
  (this.name = name),
    (this.email = email),
    (this.age = age),
    (this.approvedCourses = approvedCourses),
    (this.socialMedia = {
      twitter,
      instagram,
      facebook,
    });

  const private = {
    _learningPats: [],
  };

  // Private attributes and methods in prototypes
  Object.defineProperty(this, "learningPaths", {
    get() {
      return private["_learningPaths"];
    },
    set(newLearningPaths) {
      if (newLearningPaths instanceof learningPaths) {
        private["_learningPaths"].push(newLearningPaths);
      } else {
        console.warn("El learningPath no es instancia del prototipo");
      }
    },
    configurable: false,
  });
  // Student.prototype.learningPaths;

  // InstanceOf

  for (learningPathIndex in learningPaths) {
    this.learningPaths = learningPaths[learningPathIndex];
  }
  // const id = undefined;
  // const private = {
  //   _name: name,
  //   _learningPaths: learningPaths,
  // };
  // const public = {
  //   id,
  //   age,
  //   email,
  //   approvedCourses,
  //   socialMedia: {
  //     twitter,
  //     instagram,
  //     facebook,
  //   },
  //   get name() {
  //     return private["_name"];
  //   },
  //   set name(newName) {
  //     if (newName.length != 0) {
  //       private["_name"] = newName;
  //     } else {
  //       console.warn("Tu nombre debe ser mas de 1 character");
  //     }
  //   },
  //   get learningPaths() {
  //     return private["_learningPaths"];
  //   },
  //   set learningPaths(newLearningPaths) {
  //     // Duck typing in JavaScript
  //     if (!newLearningPaths) {
  //       console.warn("Tu LearningPath no tiene nombre");
  //       return;
  //     }
  //     if (!isArray(newLearningPaths.courses)) {
  //       console.warn("Tu LearningPath no tiene cursos");
  //       return;
  //     }
  //     private["_learningPaths"].push(newLearningPaths);
  //   },
  // Methods
  // readName() {
  //   return private["_name"];
  // },
  // changeName(newName) {
  //   private["_name"] = newName;
  // },
  // };
  // Object.defineProperty(public, "readName", {
  //   configurable: false,
  //   writable: false,
  // });
  // return public;
}

// const juan = createStudent({
//   name: "name",
//   age: 18,
//   email: "juan@email.com",
//   twitter: "JuanDC",
//   instagram: "JuanDC",
//   facebook: "JuanDC",
// });

// InstanceOf
const escuelaWeb = new learningPath({ name: "Escuela de Desarrollo Web" });
const escuelaData = new learningPath({ name: "Escuela de Data Science" });
const juan = new Student({
  name: "name",
  age: 18,
  email: "juan@email.com",
  learningPath: [
    escuelaWeb,
    escuelaData,
    { name: "Escuela del impostor", courses: [] },
  ],
});

juan instanceof Student; // true
miles instanceof Student; // Miles is fake so output is false

juan.learningPaths = "Nueva ruta de aprendizaje";

// Memories in Js are Stack for all data structure except objects and their memory is heap
// Abstraction with objects of data structure and DeepCopy
const studentBase = {
  name: undefined,
  email: undefined,
  age: undefined,
  approvedCourses: undefined,
  learningPaths: undefined,
  socialMedia: {
    twitter: undefined,
    instagram: undefined,
    facebook: undefined,
  },
};

const juan = deepCopy(studentBase);
Object.seal(juan); // Change configurable false
Object.isSealed(juan); // Check if configurable false
Object.freeze(juan); // Change writable false
Object.isFrozen(juan); // Check if writable false

// Creating static methods
// Class
// class SuperObject {
//   static isObject(subject) {
//     return typeof subject == "object";
//   }

//   static deepCopy() {
//     let copySubject;
//     const subjectIsObject = isObject(subject);
//     const subjectIsArray = isArray(subject);

//     if (subjectIsArray) {
//       copySubject = [];
//     } else if (subjectIsObject) {
//       copySubject = {};
//     } else {
//       return subject;
//     }

//     for (key in subject) {
//       const keyIsObject = isObject(subject[key]);

//       if (keyIsObject) {
//         copySubject[key] = deepCopy(subject);
//       } else {
//         if (subjectIsArray) {
//           copySubject.push(subject[key]);
//         } else {
//           copySubject[key] = subject[key];
//         }
//       }
//     }
//     return copySubject;
//   }
// }

// Prototype
function SuperObjectPro() {}
SuperObjectPro.isObject = function (subject) {
  return typeof subject == "object";
};
SuperObjectPro.deepCopy = function (subject) {
  {
    let copySubject;
    const subjectIsObject = isObject(subject);
    const subjectIsArray = isArray(subject);

    if (subjectIsArray) {
      copySubject = [];
    } else if (subjectIsObject) {
      copySubject = {};
    } else {
      return subject;
    }

    for (key in subject) {
      const keyIsObject = isObject(subject[key]);

      if (keyIsObject) {
        copySubject[key] = deepCopy(subject);
      } else {
        if (subjectIsArray) {
          copySubject.push(subject[key]);
        } else {
          copySubject[key] = subject[key];
        }
      }
    }
  }
};
