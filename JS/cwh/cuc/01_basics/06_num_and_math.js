const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2));

const other_num = 23.1221;
console.log(other_num.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));


// --------------------------------- Math --------------------------------------------------


console.log(Math);

console.log(Math.abs(-4));

console.log(Math.round(4.6));

console.log(Math.ceil(4.9));

console.log(Math.floor(4.9));

let min = 10;
let max = 20;
console.log(Math.floor(Math.random()*(max-min+1) + min));