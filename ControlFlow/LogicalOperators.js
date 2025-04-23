let userLoggedIn = true
let debitCard = true
let loggedInFromGoogle = false
let loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3){
    console.log("Allow to Book Appoinment");
}

if(loggedInFromGoogle || loggedInFromEmail){
   console.log("User Login Successful")
}