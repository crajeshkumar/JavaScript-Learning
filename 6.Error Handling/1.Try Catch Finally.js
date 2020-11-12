const user ={
    name:"Rajesh kumar C",
    age:16,
    email:"cp.rajesh01@gmail.com"
}
try{
    console.log('try initial');
    console.log(user.mail);//It won't trigger error since it is undefined
    // if(!user.mail)
    //     throw new TypeError('No mail provided')
    null.myFunction();
    console.log('try end');//It won't displayed since already catch block is triggered
}
catch(err){
    // console.log(err);
    // console.log(err,name);
    // console.log(err.message);
    console.log(err);
}
finally{
    console.log('It\'s running till final block');
}

console.log('Execution continuous....');