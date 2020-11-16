// Destructuring

// let a, b;
// [a ,b , ...arr] = [100 ,200 ,300 ,400 ,500];
// console.log(arr);

// ({a,c ,b , ...rest} = {a:100 ,b:200 ,c:300 ,d:400 , e:500}); //Order doesn't matter
// console.log(rest);


// Array Destructuring
// const arr = ['Rajesh' ,'Raja' ,'Pushpam'];
// [person1 ,person2 ,person3 ] = arr;
// console.log(person1);

// Using function
// const getNames = function(){
//     return ['Rajesh' ,'Raja' ,'Pushpam'];
// }
// let person1, person2 ,person3;
// [person1 ,person2 ,person3 ] = getNames();
// console.log(person2);

// Object Destructuring
const person ={
    name : 'Rajesh',
    age :21,
    gender : 'Male',
    sayHello: function(){
        return 'Hello'
    }
}

// Old method
const age = person.age;

const {name ,sayHello} = person;
console.log(sayHello());