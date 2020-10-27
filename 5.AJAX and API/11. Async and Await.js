// async function myFunction(){
//     return 'Hello';
// }

// myFunction().then(res=>console.log(res));

// async function myFunction(){
//     const promise = new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve('Hello'),2000);
//     });
    
//     const err=true;
//     if(err){
//         await Promise.reject(new Error('Something went wrong'))
//     }
//     else{
//         const data = await promise;
//         return data;
//     }
   
// }
// myFunction().then(res => console.log(res))
//     .catch(err=>console.log(err))

async function getUsers(){
    
    const response =await  fetch('https://jsonplaceholder.typicode.com/users');

    const err = true;

    if(err){
        return Promise.reject(new Error(response.status));
    }
    else{
        const data = response.json();
        return data;
    }

}

getUsers()
    .then(res => console.log(res))
    .catch(err => console.log(err))