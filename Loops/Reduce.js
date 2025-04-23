let numbers = [1,2,3]

// let subTotel = numbers.reduce(function (acc, curval){
// console.log(`acc: ${acc} and curval: ${curval}`);
// return acc + curval
// } , 0);


// with arrow function 

let subTotel = numbers.reduce((acc, curval) => acc + curval , 0)


console.log(subTotel);




// shopping cart example 

let shoppingCart = [
    { itemName: "Wireless Mouse", price: 15.99 },
    { itemName: "Bluetooth Headphones", price: 249.99 },
    { itemName: "USB-C Charger", price: 18.50 },
    { itemName: "Notebook", price: 5.25 },
    { itemName: "Mechanical Keyboard", price: 3389.00 },
    { itemName: "Smartphone Case", price: 4412.75 },
    { itemName: "LED Monitor", price: 55199.99 },
    { itemName: "External Hard Drive", price: 74.95 },
    { itemName: "Desk Lamp", price: 22.40 },
    { itemName: "Water Bottle", price: 6669.99 }
  ];
  
let totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0)
  console.log(totalPrice);
  