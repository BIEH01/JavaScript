class Comment {
  constructor({ content, studentName, studentRole = "estudiante" }) {
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.likes = 0;
  }

  post() {
    console.log(`${this.studentName} (${this.studentRole})`);
    console.log(`${this.likes} likes`);
    console.log(`${this.content}`);
  }
}

function videoPlay(id) {
  const urlSecret = "https://platzi.com/videosecreto/" + id;
  console.log("Se esta reproduciendo desde la url " + urlSecret);
}

function videoPause(id) {
  const urlSecret = "https://platzi.com/videosecreto/" + id;
  console.log("Se esta pausando desde la url " + urlSecret);
}

// Module type for encapsuling the video's url with export
class PlatziClass {
  constructor({ name, videoId }) {
    this.name = name;
    this.videoId = videoId;
  }

  play() {
    videoPlay(this.videoId);
  }
  pause() {
    videoPause(this.videoId);
  }
}

class Course {
  constructor({ name, classes = [], isFree = false, lang = "Spanish" }) {
    this._name = name; // This _ is asking for no modification
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang;
  }

  // Encapsuling
  // Get is for getting the name without calling the function
  get name() {
    return this._name;
  }

  // Set is for setting the name without calling the function and we use if to encapsule it
  set name(newName) {
    if (newName === "Curso Malo de Programación Básica") {
      console.error("Ey... No");
    } else {
      this._name = newName;
    }
  }

  // Changing by method
  // changeName(newName) {
  //   this._name = newName;
  // }
}

// Encapsuling
// obtain name by Get
// courseProBasic.name = "";
// change name by Set
// courseProBasic.name = "";
// ChangeName method
// courseProBasic.changeName("")

const courseProBasic = new Course({
  name: "Curso Gratis de Programación Básica",
  isFree: true,
});

const courseDefHtmlCss = new Course({
  name: "Curso Definitivo de HTML",
});

const coursePraHtmlCss = new Course({
  name: "Curso Practico de HTML y CSS",
  lang: "English",
});

class learningPath {
  constructor({ name, courses = [] }) {
    this._name = name;
    this.courses = courses;
  }
}

const escuelaWeb = new learningPath({
  name: "Escuela de Desarrollo Web",
  courses: [courseProBasic, courseDefHtmlCss, coursePraHtmlCss],
});

const escuelaData = new learningPath({
  name: "Escuela de Data Science",
  courses: ["Curso DataBusiness", "Curso DataViz"],
});

const escuelaDeVideojuegos = new learningPath({
  name: "Escuela de Videojuegos",
  courses: [
    "Curso de Introducción a la Producción de Videojuegos",
    "Curso de Unreal Engine",
  ],
});

class Student {
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

  postComment(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
    });
    comment.post();
  }
}

// Inheritance for classes with extends, props and super
class FreeStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if (newCourse.isFree) {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(
        `Lo sentimos, ${this.name} solo puedes tomar cursos abiertos`
      );
    }
  }
}

class BasicStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if (newCourse.lang !== "english") {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(
        `Lo sentimos, ${this.name} solo puedes tomar cursos abiertos`
      );
    }
  }
}

class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}

class TeacherStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }

  postComment(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: "Profesor",
    });
    comment.post();
  }
}

const juan2 = new FreeStudent({
  name: "Juan",
  username: "juandc",
  email: "juan@email.com",
  twitter: "fjuandc",
  learningPaths: [escuelaWeb, escuelaDeVideojuegos],
});

const miguel2 = new BasicStudent({
  name: "Miguel",
  username: "migueldc",
  email: "miguel@email.com",
  instagram: "fmigueldc",
  learningPaths: [escuelaWeb, escuelaData],
});

const freddy = new TeacherStudent({
  name: "Freddy Vega",
  username: "Freddier",
  email: "freddy@email.com",
  instagram: "Freddiervega",
});
