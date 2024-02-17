const marvel_heros = [ "thor", "ironman", "captain_ameruica", "hulk", "spiderman"];
const dc_heros = ['batman', "flash", "superman"];

// marvel_heros.push(dc_heros); // add whole array as single element in array -- array in array 
// console.log(marvel_heros);

// const allheros = marvel_heros.concat(dc_heros); // -- no change in original array -- return new merged array
// console.log(allheros);

//  -------- Merging element by spread operator ---------------

// const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);

// --------- flat the array --------------

// const another_array = [1,2,3, [4,5,6], [7,8,[9,10,11]], 12 , 13];
// const flat_array = another_array.flat(Infinity);

// console.log("Before flat : ",another_array); // multidimentionalF
// console.log("After flat : ",flat_array); // only 1D

console.log(Array.from('ujas lathiya'));

