const url = 'https://jsonplaceholder.typicode.com/posts'

const lib= new library();

const posts = lib.get(url,function(err,posts){
    if(err){
        console.log(err);
    }
    else{
        console.log(posts);
    }
});
