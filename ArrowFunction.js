let user = {
    username: "hafeez",
    price: 400,

    welcomeMessage: function(){
        // console.log(`${this.username}, Welcome to website`)
        // console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Khan"
// user.welcomeMessage()

// console.log(this);




// let greeting = function () {
//     let username = "hafeez"
//     console.log(this.username);
// }

// greeting()


// let Greeting = () => {
//     let username = "hafeez"
//     console.log(this.username);
// }

// Greeting()


// explecent return 

// let addTwo = (num1, num2) => {
// return    num1 + num2
// }

// console.log(addTwo(2, 4))





// implecent return 

let addTwo = (num1, num2) => num1 + num2
console.log(addTwo(10, 20));


// let addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(2, 4))
