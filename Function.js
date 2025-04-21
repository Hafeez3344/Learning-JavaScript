function myName() {
    console.log("H");
    console.log("a");
    console.log("f");
    console.log("e");
    console.log("e");
    console.log("z");
}

// myName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
    
// }


function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result

    return number1 + number2
}

let result = addTwoNumbers(5, 8)

// console.log("Result", result);



// function isLoginUser (username){
    function isLoginUser (username = "hafeez"){
    // if (username === undefined){
        if (!username){
        console.log("Please enter username please");
        return  
    }
    return `${username} just logged in `
}

// console.log(isLoginUser("hafeez"))
console.log(isLoginUser("khan"));

