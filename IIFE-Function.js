// Immediatly invoke function 

// the first () is function defenition and the () one is Execution 

let chai =  (function() {
    console.log(`DB CONNECTED`)
})();

( (name) => {
    console.log(`DB CONNECTED SUCSSECFULLY ${name}`);
    
}) ("MongoDB")
