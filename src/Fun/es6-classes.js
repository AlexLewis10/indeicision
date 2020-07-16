class Person {
  constructor(name = "No name", age = 0) {
    this.name = name
    this.age = age
  }
  getGreeting() {
    return `Hello ${this.name}`
  }

  getDescription() {
    return `Hello ${this.name} is ${this.age}`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age) 
    this.major = major
  }
  hasMajor() {
    return !!this.major
  }

  getDescription() {
    let description = super.getDescription()
  }
}

const me = new Student('Alex Lewis', 0, 'Geography')
console.log(me)
