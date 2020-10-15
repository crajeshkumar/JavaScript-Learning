//Primitive data type with built in object

//String 
const str1 = 'Rajesh';
const str2 = new String('Rajesh');
//type of str2 is Object

//console.log(typeof str2);  -->Object
// if(str1 === str2){
//     console.log("It's same");
// }
// else{
//     console.log("It's differ")
// }

//Number

const num1 = 12;
const num2 = new Number(12);


//Boolean
const bool1 = true;
const bool2 = new Boolean(true);

//console.log(typeof bool2);


//Function

const sum1 = function(x,y){
    return x+y;
}

const sum2 = new Function('x','y','return x+y');


//Objects

const obj1 ={
    name : 'Rajesh',
    age : 18,
    dob : new Date('Feb 2 2000')
}

const obj2 = new Object({
    name : 'Rajesh',
    age : 18,
    dob : new Date('02-16-2000')
})

// console.log(obj1);
// console.log(obj2);


//Array

const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

//Regular Expression

const re1 = /\w+/;          //  --> If we use '\w+' will provide w+
const re2 = new RegExp('\\w+');  // Here we miss \ if we provide '\w+' as input so we need to add one more \ whenever we use this method
console.log(re1);
console.log(re2);