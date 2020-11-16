//Iterators Example - Iterate index by index
// function nameIterator(names){
//     let nextIndex = 0;
//     return {
//         next : function(){
//             return nextIndex < names.length ?
//             {value :names[nextIndex++],done :false} :
//             {done: true}
//         }
//     }
// }

// const namesArr = ["Rajesh" ,"Raja" ,"Bharathi"];
// //Initiate iterator
// const name = nameIterator(namesArr);

// console.log(name.next().value); //->Rajesh
// console.log(name.next().value); //->Raja
// console.log(name.next().value); //->Bharathi
// console.log(name.next()); //-> {done : true}

// //Generator Example
// function* Generator(){
//     yield 'Rajesh';
//     yield 'Raja';
//     yield 'Bharathi';
// }

// // Initiate Generator
// const name = Generator();

// console.log(name.next());
// console.log(name.next());
// console.log(name.next());
// console.log(name.next());

function* setId(){
    let id = 0;
    while(true){
        yield id++;
    }
}

const ids = setId();
console.log(ids.next().value);
console.log(ids.next().value);
console.log(ids.next().value);
console.log(ids.next().value);
console.log(ids.next().value);
console.log(ids.next().value);
console.log(ids.next().value);
console.log(ids.next().value);