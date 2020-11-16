// SETS - Only stores Unique values of ANY data type
const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('Some string');
set1.add({name: 'Rajesh'});
set1.add(true);
set1.add(100);        // It doesn't append again

// console.log(set1);
// console.log(set1.size);

// const set2 = new Set([100,'Some string', {age : 14},false,100]);
// console.log(set2);

// Check values
// console.log(set1.has(100));
// console.log(set1.has('Some string'));
// console.log(set1.has({name: 'Rajesh'}));  // Since object is reference we cannot match them
// console.log({name : 'Rajesh'} === {name: 'Rajesh'});  // Even it also return false
// console.log(JSON.stringify({name : 'Rajesh'}) === JSON.stringify({name: 'Rajesh'}));  // We can match strings
// console.log(set1.has(JSON.stringify({name: 'Rajesh'}))); // It also says false

// Delete from sets
// set1.delete(true)
// console.log(set1.size);

// Iteration through SETS

// for(let val of set1){
//     console.log(val);
// }

// for(let val of set1.keys()){
//     console.log(val);
// }

// for(let val of set1.values()){
//     console.log(val);
// }

// for(let val of set1.entries()){
//     console.log(val);
// }

// // ForEach loop
// set1.forEach(function(val){
//     console.log(val);
// })

// // Convert to Array
// const arr = Array.from(set1);
// console.log(arr);

// To find unique elements in array
// const givenArr = [100,300,200,500,30,500,400,400];
// const setCreated = new Set();
// givenArr.forEach(function(val){
//     setCreated.add(val);
// })
// const newArr = Array.from(setCreated)
// console.log(newArr);

// console.log(givenArr);