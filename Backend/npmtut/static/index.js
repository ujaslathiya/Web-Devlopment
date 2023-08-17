var greet = 'Hello'
var y = 'ujas'
var greeting = 'Good morning'

console.log( greet + y + greeting)
console.log(`${greet} ${y} ${greeting}`);

var str = "hello this is javascript"
console.log(str);

console.log(str.indexOf('is'));

console.log(str.substring(1,7));

console.log(str.substr(3,4));

console.log(str.replace('javascript','js'));

console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.concat(' tutorial'));

var str2 = "             this is        js  tutorial ";
console.log(str2);
console.log(str2.trim());

console.log(str.charAt(6));
console.log(str.charCodeAt(6));

let obj = {
    name: 'ujas',
    age: 34,
    gender: 'male',
    dept: 'computer'
}

console.log(obj);

let arr = [12, 3, 45, 78]
arr.sort();
console.log(arr);

let age = 5;

if(age < 18){
    console.log("You can't drink alcohol");
} else if(age => 18){
    console.log('You can drink alcohol');
}

function greeting(name, greettext) {
    
    console.log(greettext + " " + name);
}


let greettext = 'Good Morning';
let name1 = 'ujas';
let name2 = 'hardik';
let name3 = 'mahek';
let name4 = 'divyesh';

greeting(name1, greettext);

let a = 10;
let b = 20;
let c = 30;

function avg(a,b,c) {
    return ((a+b+c)/3);
}

let ans = avg(a,b,c);
console.log(ans);
