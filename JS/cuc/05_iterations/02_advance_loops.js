//  Maps -- unique values

const map = new Map();
map.set('IN',"India");
map.set('USA',"United States of America");
map.set('Fr',"France");

console.log(map);

for (const [key,value] of map) {
    console.log(`${key} : ${value}`);
}

// for of ---- array , map
// for in ---- object

const myObj = {
    js : "javascript",
    py : "python",
    rb : "ruby",
    html : "hyper text markup language"
}

for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`);
}

let myArray = ['ujas','mahek','menil','kenil']

for (const ele in myArray) {
  console.log(myArray[ele]); 
}

for (const key in map) {
    console.log(key);
}

// default functions included

myArray.forEach(function (item) {console.log(item)})