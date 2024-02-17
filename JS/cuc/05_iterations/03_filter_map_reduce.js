const coding = ['js','py','css','html']

// foreach loop not return anything
const value = coding.forEach(item => {
    return item;
});

// filter 
const myArray = [1,2,3,4,5,6,7,8,9];
const filtered_array = myArray.filter( (num)=> {
    if(num>4){
        return num;
    }   
});

let filtered_array_2 = [];

myArray.forEach(ele => {
    if(ele>4){
        filtered_array_2.push(ele);
    }
});

console.log(filtered_array_2);