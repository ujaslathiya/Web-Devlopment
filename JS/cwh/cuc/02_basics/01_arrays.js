
// Array - resizeable
//       - multiple datadypes

let myArray = [0,1,2,3,4,5];

// console.log(myArray[3]);

// myArray.push(321,10,20,); // insert at last

// console.log(myArray);

// myArray.unshift(9); // Insert at first 
// myArray.unshift(90); // Insert at first 
// console.log(myArray);

// myArray.shift(); // Remove(only one) unshift inserted element from first
// console.log(myArray);


// console.log(myArray.includes(9)); // true
// console.log(myArray.indexOf(40)); // 5


// let new_array = myArray.join();

// console.log(new_array);
// console.log(typeof new_array); // String


// ----------- slice & splice ---------

console.log('A',myArray);

const myn1 = myArray.slice(1,3); // not include range and no change in original array
console.log(myn1);
console.log('B',myArray);

const myn2 = myArray.splice(1,3); // include range + also delete splice part from original array
console.log(myn2);
console.log('c',myArray);






