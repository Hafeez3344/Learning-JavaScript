for (let i = 0; i <= 10; i++) {
    const element = i;

    if (element == 5) {
        // console.log("5 is best numbere");

    }
    // console.log(element);

}

// console.log(element);



for (let i = 0; i <= 10; i++) {
    // console.log(`Outer Loopp ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop ${j} and outer loop ${i}`);

    }
}



let myArray = ["Hafeez", "Mehfooz", "Irfan"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}



// Break and Continue 

for (let index = 0; index <= 20; index++) {
    if (index == 5 ){
        // console.log("Detected 5");
        break
    }
// console.log(`Value of i is ${index}`);
    
}


for (let index = 0; index <= 20; index++) {
    if (index == 5 ){
        console.log("Detected 5");
        continue
    }
console.log(`Value of i is ${index}`);
    
}