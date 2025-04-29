async function consumePromise() {
    try {
        let response = await promisefive
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}

// consumePromise()


// with aysnc await method 

// async function getUserData() {
//     try {
//         let response = await fetch('https://jsonplaceholder.typicode.com/users')
//         let data = await response.json()
//         console.log(data)
//     }catch(error){
//         console.log(`Error`)
//     }
// }

// getUserData()




// with .then method 

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => {
//     return response.json()
// })

// .then((data) => {
//     console.log(data);

// })
// .catch((error) => console.log(error))






        
        
async function getUserData(){
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await response.json();
        console.log(data);
        
    }catch(error){
        console.log(error);
        
    }
}

getUserData()