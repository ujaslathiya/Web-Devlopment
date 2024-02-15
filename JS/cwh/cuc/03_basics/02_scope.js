// global scope
let a = 10;
const b = 20;
var c = 30;

// { } block scope 
if(true){
    let a = 100;
    const b = 200;
    var c = 300; // scope problems so not recommmended to use
}

console.log(a);
console.log(b);
console.log(c);


// nested scope

// function one(){

//     const username = 'ujas';

//     function two(){
//         const website = 'www.google.com';
//         console.log(username);
//     }

//     // console.log(website); // scope error

//     two();
// }

// // one();

// if(true){
//     const username = "ujas";
//     if ( username === "ujas"){
//         const website = " www.google.com";
//         console.log(username + website);
//     }
//     console.log(website); // scope error
// }

// console.log(username); // scope error

//  ---------------------------------------- Interesting -----------------------------------------------

// Normal case
// function addOne(num) {
//     return num+1;
// }

// console.log(addOne(5));

// const addTwo = function(num){
//     return num+2;
// }

// console.log(addTwo(5));

// Special case

console.log(addOne(5)); // Declare function
function addOne(num) {
    return num+1;
}


console.log(addTwo(5)); // Error -- Declare and store in variable
const addTwo = function(num){
    return num+2;
}



