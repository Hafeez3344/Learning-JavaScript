let name = "Hafeez-khan"
const repoCount = 30

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('Hafeez-khan')

// console.log(gameName[1]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toLocaleUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('z'));


const newString = gameName.substring(0, 3)
console.log(newString);


const anoterString = gameName.slice(0, 4)
console.log(anoterString);


// const anoterString = gameName.slice(-8, 4)
// console.log(anoterString);


const newStringone = "   Hafeez     "
console.log(newStringone);
console.log(newStringone.trim());


const url = "https://hafeez.com/hafeez%40khan"

console.log(url.replace('%40', '-'));

console.log(url.includes('khan'));

console.log(url.includes('Rahman'));


console.log(gameName.split('-'));
