let anySym = Symbol("Key1")

let User = { 
    name: "Hafeez",
    [anySym]: "Mykey1",
    age: 24,
    location: "Lahore",
    email: "hafeez@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Sunday", "Friday"]
}

// User.email = "hafeezkhan@gmai.com"
// Object.freeze(User)
// User.email = "hafeez123@gmail.com"

User.greeting = function(){
    console.log("Hello Js User")
}

User.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
    
}


// console.log(User);
// console.log(User.name);
// console.log(typeof User["name"]);
// console.log(User[anySym])

console.log(User.greeting())
console.log(User.greetingTwo());
