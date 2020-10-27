const posts = [
    {name:"post one", body: "This is post one"},
    {name:"post two", body: "This is post two"}
];

function addPost(post,callback){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            const error = false;
            posts.push(post);
            if(error){
                reject(`There is some error`);
            }
            else{
                resolve();
            }
        },2000);
    });
}

function getPost(){
    setTimeout(function(){
        let output ='';
        posts.forEach(function(post){
            output += `<li>${post.body}</li>`;
        })
        document.body.innerHTML = output;
    },1000)
}

addPost({name:"post  three",body:"This is third post"}).then(getPost)
.catch(function(msg){
    console.log(msg);
});
