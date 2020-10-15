//Declaration

function person(firstName='Rajesh', secondName='Kumar')
{
    //BACKIN ES5
    // if(typeof firstName=='undefined'){
    //     firstName='Rajesh';
    // }
    // if(typeof secondName == 'undefined'){
    //     secondName='kumar'
    // }
    console.log(`${firstName} ${secondName} is my name`);
    let check=test();
    console.log(check);
}
person();
function test(){
    return "Hii";
}

//FUNCTION EXPRESSION

const squre=function(x=3){
    return x*x;
}
console.log(squre())


//IMMEDIATELY INVOKABLE FUNCTION EXPRESSION
// (function()
// {
//     console.log('working fine');
// })();
//(function(){console.log('Working');})();//works on console


//PROPERTY METHOD
const todo={
    add:function(){
        console.log('Create todo..');
    },
    edit:function(id){
        console.log(`Edition in id ${id}`);
    }
}
//FUNCTION EXPRESSION
todo.delele=function(){
    console.log('Deletion todo...');
}

todo.add();
todo.edit(23);
todo.delele();
console.log(todo)