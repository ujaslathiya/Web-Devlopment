// Singleton 

// Object litterals
const mySym = Symbol('key1');

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

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

// JsUser.email = "ujas@gmail.com";
// console.log(JsUser);
// Object.freeze(JsUser);
// JsUser.email = "hardik@gmail.com";
// console.log(JsUser);

// --------------------- Functions in js --------------------------

JsUser.greeting = function(){
    console.log("Hello js users.. this is js function");
}

JsUser.greeting();
console.log(JsUser.greeting); // return type is function

JsUser.greetingtwo = function(){
    console.log(`Hello js user this is ${this.name}`);
}

JsUser.greetingtwo();

