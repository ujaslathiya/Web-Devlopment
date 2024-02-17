// Premitive datatype ( call by value ) (Stack)

// 7 types
// String
// Number - BigInt
// Boolean
// null
// undefined
// Symbol

const score = 100;
const scoreval = 100.3

const islog = false;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id===anotherId);

const bigNumber = 135235341341242414n
console.log(typeof(bigNumber));

// Non-Primitive/refrenced ( Heap )

// Array
const heros = ['shaktiman','spiderman','ironman'];

let myObj = {
    name : 'ujas',
    surname : 'lathiya',
    age : 19
}

const myFunction = function(){
    console.log("Hello world");
}

myFunction();

// Object
// Functions


// Stack ( Primitive )
let var_1 = 'ujas lathiya';
console.log(var_1);
let var_2 = var_1;
console.log(var_2);

var_2 = 'hardik lathiya';

console.log(var_1);
console.log(var_2);


// Heap ( Non-Primitive )
let myObj_2 = {
    name : 'ujas',
    surname : 'lathiya',
    age : 19
}
console.log(myObj_2);

let var_3 = myObj_2;
console.log(var_3);

var_3.name = 'hardik';
var_3.age = 24;
console.log(var_3);

