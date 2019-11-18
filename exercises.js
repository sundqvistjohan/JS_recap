// #1.1
const numberArray = [3, 5, 8]
// #1.2
console.log(numberArray[1]) 
// #1.3
typeof(123/12) // Number
typeof('Things in quotes!') // String
typeof(undefined) // Undefined
typeof(Math) // object
typeof(Symbol('hej')) // Symbol
typeof(true) // Boolean

// #1.4 if statement(s) that return true
if (true) {
  true;
}
if (true) true
if (true) { true; }
true && true 
true ? true : false // if true then true, else false

// #1.5
const myArray = ['Johan', 'Erik', 'Karl']
const emptyArray = []

for (let i = 0; i < myArray.length; i++) {
  //emptyArray.push(myArray[i])
  emptyArray[i] = myArray[i]
}
console.log(emptyArray)

// #2.1
// `this` references the current instance. Equivalent to `self` in ruby.

// #2.2, ES2015
class anotherPerson { 
  constructor(first, last) {
    this.first = first
    this.last = last
  }
  fullName() {
    return `${this.first} ${this.last}`;
  }
}

let johan = new anotherPerson('Johan', 'Sundqvist')
johan.fullName()