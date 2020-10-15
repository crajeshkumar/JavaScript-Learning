//FOR LOOP

// for(let i=0;i<10;i++)
// {
//     // if(i==7)
//     // {
//     //     console.log(`${i} is my favourate number`);
//     //     continue;//It won't allows to run following codes in this iteration
//     // }
//     if(i==5)
//     {
//         break;
//     }
//     console.log(`Number is ${i}`);
// }

//WHILE LOOP

// let i=0;
// while(i<10)
// {
//     console.log(`Number is ${i}`);
//     i++;
// }

//DO WHILE

// let i=100;
// do{
//     console.log(`Number is ${i}`);
//     i++;
// }
// while(i<10)

// const names=['Rajesh','Prakash','Ramanathan','Ramanan'];
//ARRAY WITH LOOPS

// for(let i=0;i<names.length;i++)
// {
//     console.log(names[i]);
// }

//Aero function

// names.forEach(element => {
//     console.log(element);
// });

//FOR EACH

// names.forEach(function(name,index,array){
//     console.log(`${index}:${name}`);
//     console.log(`${array}`);
// });

//MAP

const users=[
    {name:"Rajesh",age:20},
    {name:"Raja",age:25},
    {name:"Prakash",age:17}
];

const ages=users.map(function(user){
    return user.age;
});
console.log(ages);