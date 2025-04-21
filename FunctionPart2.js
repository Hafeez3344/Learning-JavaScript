// function calculateCartPrice (...num1){
function calculateCartPrice (value1, value2, ...num1){

return num1;

}

// console.log(calculateCartPrice(200,66,777,88,99, 44));

let user = {
    username: "hafeez",
    price: 300
}

function handleObject(anyObj){
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);
    
}

handleObject(user)



let mynewArray = [200, 300, 400, 500]

function returnSecondalue(getArray){
        return getArray[2]
}

console.log(returnSecondalue(mynewArray));
