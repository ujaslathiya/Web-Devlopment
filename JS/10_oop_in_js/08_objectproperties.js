const Descriptor = Object.getOwnPropertyDescriptor(Math,"PI");
// console.log(Descriptor);

let chai = {
    name : "ginger chai",
    price : 250,
    isAvailable : true
}

let chai_desc = Object.getOwnPropertyDescriptor(chai, 'name');
// console.log(chai_desc);

for( let [key,value] of Object.entries(chai)){
    console.log(`${key} : ${value}`);
}

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false,
})
Object.defineProperty(chai, 'price', {
    writable: false,
    enumerable: false,
})
Object.defineProperty(chai, 'isAvailable', {
    writable: false,
    enumerable: false,
})

for( let [key,value] of Object.entries(chai)){
    console.log(`${key} : ${value}`);
}

chai_desc = Object.getOwnPropertyDescriptor(chai, 'name');
// console.log(chai_desc);