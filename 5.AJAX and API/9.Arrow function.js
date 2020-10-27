// const sayHello = function(){
//     console.log('Hello');
// }

// const sayHello = () => {
//     console.log('Hello');
// }

//One line function
//const sayHello = () => console.log('Hello');

//Online return function
//const sayHello = () => 'Hello'

// const sayHello = function(){
//     return 'Hello'
// }

// const sayHello = function(name){
//     console.log(name);
// }

//Single element doesn't need brackets
// const sayHello = name => {
//     console.log(name);
// }

// const sayHello = (firstName , lastName) => {
//     console.log(`Hello ${firstName} ${lastName}`);
// }

//Return object
//const sayHello = () => ({ name: "Rajesh"})

//console.log(sayHello());

const names = ['Rajesh' ,'Raja' ,'Bharathi'];

const length = names.map(function(name){
    return name.length;
});

console.log(length);