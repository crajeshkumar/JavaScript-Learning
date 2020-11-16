// MAPS - key-value pain -  can use ANY type as a key or value

const map1 = new Map();

// Set keys
const key1 = 'Some string',
    key2 = {},
    key3 = function(){};

// Set map values by key
map1.set(key1, 'Value of key1')
map1.set(key2, 'Value of key2')
map1.set(key3, 'Value of key3')

// Get value by Map-keys
// console.log(map1.get(key1) ,map1.get(key2) ,map1.get(key3));

// console.log(map1.size);

// Loop through maps
// for(let [key,val] of map1){
//     console.log(`${key} : ${val}`);
// }

// Iterate with keys
// for(let key of map1.keys()){
//     console.log(key);
// }

// // Iterate with values
// for(let value of map1.values()){
//     console.log(value);
// }

// Loop with forEach
map1.forEach(function(key,val){
    console.log(`${key} : ${val}`);
})

console.log(map1);

const arr = Array.from(map1);
console.log(arr);

const valArr = Array.from(map1.values());
console.log(valArr);

const keyArr = Array.from(map1.keys());
console.log(keyArr);