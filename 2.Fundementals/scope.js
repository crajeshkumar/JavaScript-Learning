//SCOPE
//GLOBAL SCOPE
//  var a=1;
//  let b=2;
//  const c=3;

//Function scope
// function test(){
//     //It creates new variables. So it doesn't change the scope of variable
//     var a=4;
//     let b=5;
//     const c=6;
//     console.log(`Function scobe is ${a} ${b} ${c}`);
// }
// test();

//BLOCK SCOPE

// if(true)
// {   
//     //IT affects only var
//     var a=4;
//     let b=5;
//     const c=6;
//     console.log(`IF scobe is ${a} ${b} ${c}`);
// }


var a=1;
 for(let a=0;a<10;a++)
 {
     console.log('loop no:',a);
 }
 console.log(a);

 console.log(`Global scobe is ${a}`);