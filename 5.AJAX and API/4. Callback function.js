const posts =[
    {title:"Post One" , body:"This is post one"},
    {title:"Post Two" , body:"This is post Two"}
];

//Here post is displayed before it get created
// function createPost(title,body){
//     setTimeout(function(){
//         const post = {title:title, body:body};
//         posts.push(post);
//     },2000);
// }

// function getPost(){
//     let output ='';
//     setTimeout(function(){
//         posts.forEach(function(post){
//             output += `<li>${post.title}</li>`
//         });
//         document.body.innerHTML = output;
//     },1000);
// }

// createPost('Post Three','This is post Three');
// getPost();


//Here we did it asynchronously
function createPost(title,body,callback){
        setTimeout(function(){
            const post = {title:title, body:body};
            posts.push(post);
            callback();
        },2000);
    } 
    
    function getPost(){
        let output ='';
        setTimeout(function(){
            posts.forEach(function(post){
                output += `<li>${post.title}</li>`
            });
            document.body.innerHTML = output;
        });
    }

    createPost('Post Three','This is post Three',getPost);