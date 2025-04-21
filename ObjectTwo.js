let User = {}

User.id = "738abc"
User.name = "Hafeez"
User.isLoggedIn = false

// console.log(User);

let regularUser = {
    email: "hafeez@gami.com",
    fullName: {
        userfullName: {
            firstName: "Hafeez",
            lastName: "Khan"
        }
    }
}

// console.log(regularUser?.fullName?.userfullName?.firstName);


// merge object in one 

let obj1 = {1: "a", 2: "b"}
let obj2 = {3: "c", 4: "d"}
let obj3 = {5: "e", 6: "f"}

// let obj4 = Object.assign({}, obj1, obj2, obj3)
let obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);


// this is use when value comes from database 

let users = [
    {
        id: 1,
        email: "hafeez@gmail.com"
    },
    {
        id: 1,
        email: "hafeez@gmail.com"
    },
    {
        id: 1,
        email: "hafeez@gmail.com"
    },
    {
        id: 1,
        email: "hafeez@gmail.com"
    }
]

users[1].email
// console.log(User);

// console.log(Object.keys(User));
// console.log(Object.values(User));
// console.log(Object.entries(User));

// console.log(User.hasOwnProperty('isLoggedIn'));






// object destructing 

let course = {
    coursename: "javascript",
    price: 300,
    courseLearner: "Hafeez"
}

// course.courseLearner

let {courseLearner: learner} = course

console.log(learner);

