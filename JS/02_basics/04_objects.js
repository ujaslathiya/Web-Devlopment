// const user1 = new Object() // Singleton object
// console.log(user1); // {}

// const user2 = {} // Non - Singleton Object
// console.log(user2); // {}


// user1.id = '1234';
// user1.name = "ujas";
// user1.isLogIn = false;

// console.log(user1);

// const user3 = {
//     email: "ujaslathiya@gmail.com",
//     fullname: {
//         userfullname: {
//             first_name: "Ujas",
//             middle_name: "Tulsibhai",
//             last_name: 'Lathiya'
//         }
//     }
// }

// console.log(user3.fullname);
// console.log(" ");
// console.log(user3.fullname.userfullname);
// console.log(" ");
// console.log(user3.fullname.userfullname.first_name);
// console.log(" ");

//  Combining object

// const obj1 = { 1 : 'abc', 2 : 'cde'};
// const obj2 = { 3 : 'fgh', 4 : 'ijk'};

// const obj3 = Object.assign({},obj1,obj2); // good to use {} represent target and other params are source

// // ------- Spread ----

// const obj4 = {...obj1, ...obj2};

// console.log(obj4);

// console.log(obj3);


// ------------------------------------------ From Database -----------------------------

// from database array of objects comes...

const data = [
    {                   // index 0
        id: '123',
        name: 'abc'
    }, 
    {                  // index 1
        id: '4565',
        name: 'ab2'
    },
    {                  // index 2
        id: '3421',
        name: 'ab122c'
    },
    {                  // index 3
        id: '1223',
        name: 'a2ebc'
    }
]

console.log(data[1].id); // id of user no 1 - 4565

let mySym = Symbol('key1');
const JsUser = {
    name : "Ujas",
    "full name" : "Ujas Lathiya",
    age : 19,
    [mySym] : 'mykey1', // Symbol data type key 
    location : "surat",
    email : 'ujaslathiya@gmail.com',
    isLogedIn : false,
    logInDays : ["moday","tuesday"]
}

console.log(Object.keys(JsUser)); // retrun array of keys of an object
console.log(Object.values(JsUser)); // retrun array of keys of an object
console.log(Object.entries(JsUser)); // retrun array of key-value pair of an object 2D array 

console.log(JsUser.hasOwnProperty('logInDays')); // whether object contain described property or not

const course = {
    coursename : "Js in Hindi",
    price : 999,
    courseInstructor : "Ujas"
}

// course.courseInstructor 

const {courseInstructor : Instructor} = course; // Destructoring of object in js by  { abc }

console.log(Instructor);

// usage of destructuring in react js

// const navbar = ({company})=> {

// }

// navbar(company = "Tata Moters");

//  API ------------

// API Responce in json formate
// {
//     "Name" : "Ujas Lathiya",
//     "coursename" : "js in hindi",
//     "price" : "999"
// }

// Sometimes API returns an array with contain objects

// [
//     {},
//     {},
//     {},
//     {}
// ]

//  JASON Formatter -- tool to understand api response