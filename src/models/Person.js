class Person {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    let str = "I am class Person, My name is " + this.name
    console.log("I am class Person, My name is " + this.name);
    return str
  }
}

export default Person;
