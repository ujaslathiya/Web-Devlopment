const coding = ['js', 'py', 'css', 'html']

// foreach loop not return anything
const value = coding.forEach(item => {
    return item;
});

// filter 
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const filtered_array = myArray.filter((num) => {
    if (num > 4) {
        return num;
    }
});

let filtered_array_2 = [];

myArray.forEach(ele => {
    if (ele > 4) {
        filtered_array_2.push(ele);
    }
});

console.log(filtered_array_2);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// const userbook = books.filter((bk)=> bk.genre == 'History');

// const userbook = books.filter((bk) => {
//     if (bk.publish > 2000) {
//         return bk
//     }
// });

// const userbook = books.filter( (bk) => {
//     if ( bk.publish >= 1995 && bk.genre == 'History'){
//         return bk;
//     }
// })

// console.log(userbook);

//--------------------- Map -------------------------

const myNumbers = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNumbers.map( (num) => num+10);
// console.log(newNums);

// Chaining of map and filter --> map().map().filter().map()

const newNums = myNumbers.map( (num) => num*10 ).map( (num) => num+1);
console.log(newNums);

// -------------------- Reduce ------------------------

const myNumbers1 = [1,2,3];

const myTotal = myNumbers1.reduce( function (acc, curr){
    console.log(`acc : ${acc} and current_value : ${curr}`);
    return acc + curr;
},0)

console.log(myTotal);