let names = ["hafeez", "irfan", "mehfooz"]
let NickNames = ["khan", "haq", "jani"]
let num = [1,4,6,2,7,8]

// names.push(NickNames)


// console.log(names);
// console.log(names[3][1]);



// let newNames = names.concat(NickNames)
// console.log(newNames);



// const all_in_one = [...names, ...NickNames, ...num]
// console.log(all_in_one);



// let another_array = [1,2,3, [4,5,6], 7, [8,9,[5,6]]]

// let real_another_array = another_array.flat(Infinity)

// console.log(real_another_array);



console.log(Array.isArray("Hafeez"))
console.log(Array.from("Hafeez"))
console.log(Array.from({name: "Hafeez"})) //intresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
