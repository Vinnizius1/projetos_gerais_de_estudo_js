// super = Reference to the parent class (super class)
//         Very similar to "this" keyword
//         Can use a super classes: constructor, methods

// O super chama o constructor e método da classe pai

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  welcome() {
    console.log("Hello", this.name);
    console.log("You are", this.age, "years old.");
  }
}

class Student extends Person {
  constructor(name, age, gpa) {
    super(name, age);
    this.gpa = gpa;
  }
  hello() {
    this.welcome();
    console.log("Your gpa is", this.gpa);
  }
}

class Teacher extends Person {
  constructor(name, age, classSize) {
    super(name, age);
    this.classSize = classSize;
  }
  hello() {
    this.welcome();
    console.log("Your class size is", this.classSize);
  }
}

let student = new Student("Vinicius", 37, 4.5);
let teacher = new Teacher("Romualdo", 49, 60);

// console.log(student.name);
// console.log(student.age);
// console.log(student.gpa);
// Vinicius
// 37
// 4.5

// console.log(teacher.name);
// console.log(teacher.age);
// console.log(teacher.classSize);
// Romualdo
// 49
// 60

student.hello();
// Hello Vinicius
// You are 37 years old.
// Your gpa is 4.5

teacher.hello();
// Hello Romualdo
// You are 49 years old.
// Your class size is 60

/* fonte: https://www.youtube.com/watch?v=khuDeNwXkfI&ab_channel=BroCode */
