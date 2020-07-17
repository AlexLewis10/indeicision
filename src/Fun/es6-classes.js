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
    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.` 
    }
    return description
  }
}

class Traveller extends Person {
  constructor(name, age, homeLocation) {
    super(name, age)
    this.homeLocation = homeLocation
  }

  hasHomeLocation() {
    return !this.homeLocation
  }

  getGreeting() {
    let greeting = super.getGreeting()
    if (this.homeLocation) {
      return greeting += ` I'm visiting from ${this.homeLocation}`
    }
    return greeting
  }
}



const me = new Student('Alex Lewis', 0, 'Geography')
console.log(me.getGreeting())

const someoneElse = new Traveller('Dave', 90, 'London')
console.log(someoneElse.getGreeting())

