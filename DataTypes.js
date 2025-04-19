// Primitive Data types 

// 7 types  : String, Number, Boolean, null, undefined, Symbol, BigInt

const name = "Hafeez"
const score = 200
const scoreValue = 20.5

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);

const bigNumber = 234232423423423423423n
// console.log(bigNumber);





// Non Primitive (Refrence)

// Array , Objecys, Functions

const names = ["Hafeez", "Mehfooz", "Irfan"]
console.log(names);


let myObj = {
    name: "Hafeez",
    age: 24
}

console.log(myObj);

let myFunction = function() {
    console.log("Hello Hafeez");
    
}
myFunction()


console.log(typeof bigNumber );

