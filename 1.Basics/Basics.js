
//Console 

console.log("Hoooo");
console.log(123);
console.time('test');
console.log([1,2,3,4]);
console.table([1,2,3,4]);
console.table(123);
console.log({1:1,2:2});
//console.clear();
console.table({1:1,2:2});
console.error('There is a error message');
//console.clear();
console.warn('There is a warning statement');
//console.clear();
console.timeEnd('test');
console.clear()
// var,let,const

var person={
    name:'Rajesh',
    age:18
}
person.name1="Raj"
console.log(person);
const arr=[6,7,8,9,10];
const number=[1,2,3,4,5];
number.reverse();
console.log(number);
console.clear();



//Data type conversion

let val;
val=555;
val=String(new Date());
console.log(val);
console.log(val.length);
console.log(typeof val);
console.clear();

const val1='5';
const val2=6;
const sum=val1+val2;
console.log(sum)
console.log(typeof val2);
console.log(Math.sqrt(8));
//Random generater
let random=Math.floor(Math.random()*20+1);
console.log(random);
console.clear()

//String operations
//To print quotes
console.log('Hi I\'m Rajesh'); // Escape sequence can be written using \
let temp='Rajesh Ku2mar C';
console.log(temp.length);
var test=temp.concat(' ',);
console.log(test);
val= test.indexOf('2');
val=test.charAt('2');
console.log(val);

test="Hello I'm Rajesh";
test=test.replace('Rajesh','Rajesh kumar');
console.log(test);