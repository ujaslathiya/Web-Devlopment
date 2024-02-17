// Immediately invoked function expression

(function dbConnection() { // named iide becuse function has name dbConnection
   console.log("DB Connected"); 
})(); // this semicolun is important otherwise sometime gets error

((name) => { // unnamed iife
    console.log(`DB Connected Two ${name}`);
})('Ujas');

//  (...1...)(..2..) -- in 1 function defination -- 2 only () -- for function call(execution)
// ()() -- used to remove global scope polution problem
