let myNumber = [1,2,3,4,5,6,7,8,9,10]

// let newNumbers = myNumber.map((num) => num + 10)

// with scope add return 
// let newNumbers = myNumber.map((num) => {return num + 10})

let newNumbers = myNumber
             .map((num) => num * 10)
             .map((num) => num + 1)
             .filter((num) => num >=30 )

console.log(newNumbers);
