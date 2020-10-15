//Creating a array
const arr1=[1,2,3,4,5];
const arr2=new Array(123,34,12,563,54,678,34);
const arr3=["apple",'orange','Mango','banana'];
const arr4=['hello',23,null,true,[1,3],{a:'Evf',b:'fj'},undefined,"false"];

let val;
//length of an array
val=arr2.length;
//To check if it is array
val=Array.isArray(arr4);
//Accessing array element
arr4.forEach(element => {
    console.log(element);
});
console.clear()

//Adding element in the last of array
arr1.push(6);
//Adding element in the front
arr1.unshift(0);
//Deleting from the last
arr1.pop();
//Deleting from the beginning
arr1.shift();

//Splice - deleting part of an array
arr1.splice(1,2);
// reverse the arrat
arr4.reverse();
//sorting an array-It's based on the first value (or first digit) ascii value so Capital case M will go befor 'apple'
arr3.sort();
arr2.sort();
//prvides 12,123,34,34,54,563,678
arr2.sort(function(x,y){
    return x-y;
})
//provides sorted order


arr2.sort(function(x,y)
{
    return y-x;
});
//It provides reverse sorted order



console.log(arr2);
console.log(typeof arr1);
console.log(typeof arr2);
console.log(val);