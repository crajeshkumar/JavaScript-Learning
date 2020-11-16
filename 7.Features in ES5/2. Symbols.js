// const sym1 = Symbol();
// const sym2 = Symbol('sym');
// console.log(sym1);
// alert(sym2)
// console.log(`${sym1.toString()}`);

// console.log(Symbol() === Symbol());
// console.log(Symbol('123') === Symbol('123'));
// console.log(typeof  sym1);

// Unique Object Keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const obj = {};
obj[KEY1] = 'Rajesh';
obj[KEY2] = 'Kumar';
obj.key3 = 'Thanga';
obj.key4 = 'Raja';

// console.log(obj[KEY2]);
// console.log(obj);

// Symbols are not enumberable over for .. in
// for(let i in obj)
// {
//     console.log(i,':',obj[i]);
// }

// Symbols are ignored by JSON.Stringigy()
// console.log(JSON.stringify({name:'Rajesh'}));
// console.log(JSON.stringify({[Symbol()]:'Value'}));
// console.log(JSON.stringify(obj));