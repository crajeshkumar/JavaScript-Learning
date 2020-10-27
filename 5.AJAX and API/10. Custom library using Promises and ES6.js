// Use library2.js file
const http = new library();

// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

//Create new user
const user = {
    name: 'Rajesh kumar C',
    email : 'cp.rajesh01@gmail.com',
    phone : '9488963979'
}

// http.post('https://jsonplaceholder.typicode.com/users',user)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// http.put('https://jsonplaceholder.typicode.com/users',user)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

http.delete('https://jsonplaceholder.typicode.com/users/1')
    .then(data => console.log(data))
    .then(()=>{
        http.get('https://jsonplaceholder.typicode.com/users')
            .then(data => console.log(data))
            .catch(err => console.log(err));
    })
    .catch(err => console.log(err))

// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));