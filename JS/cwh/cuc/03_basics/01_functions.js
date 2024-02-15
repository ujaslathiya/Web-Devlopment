

function sayMyName() {
    console.log('U');
    console.log('J');
    console.log('A');
    console.log('S');
}

sayMyName();

// function addTwoNumber(number1, number2) {
//     console.log(number1 + number2);
// }

function addTwoNumber(number1, number2) {
    return number1+number2;
}

const ans = addTwoNumber(10, 20);
console.log(ans);
console.log(typeof ans);

function  loginUserMessage(username) {
    if(username === undefined){
        console.log("Please enter username");
        return;
    }
    return `${username} just loged in`;
}

console.log(loginUserMessage("ujas"));
console.log(loginUserMessage());

// ... both spread and rest operator denoted by this


function calculateCartPrice(...num) {
    return num;
}

console.log(calculateCartPrice(200,300,400,500));

const user = {
    username : "ujas",
    price : 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user);

const myArray = [200,300,400,500,600];

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myArray));