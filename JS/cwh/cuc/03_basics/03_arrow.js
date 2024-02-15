const user = {
    username : 'ujas',
    price : 99,

    welcomeMessage :  function name() {
        console.log(`${this.username} , Welcome to Website....`);
    }

}

user.welcomeMessage();
user.username = "hardik";
user.welcomeMessage();

// this not work in function

// function chai() {
//     const username = "ujas"
//     console.log(this.username);
// }
// chai(); // undefined

const chai = () => {
    const username = "ujas"
    console.log(this.username);
}

chai(); // undefined

// const addTwo = (number1,number2) => {
//     return number1+number2;
// }

// const addTwo = (number1,number2) => number1+number2;
// const addTwo = (number1,number2) => (number1+number2); // when use () not required return 
const addTwo = (number1,number2) => ({username : "ujas"});  

 
console.log(addTwo(10,20));

