class library{
    get(url){
        return new Promise((resolve,reject)=>{
            fetch(url)
            .then(data => data.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        });
    }
    post(url,user){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method : 'POST',
                headers : {
                    'Content-type' : 'application/json'
                },
                body : JSON.stringify(user)
            })      
            .then(data => data.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        });
    }
    put(url , user){
        return new Promise(
            (resolve ,reject) => {
                fetch(url ,{
                    method : 'PUT',
                    headers : {
                        'Content-type' : 'application/json'
                    },
                    body : JSON.stringify(user)
                })
                .then(data => data.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
            }
        );
    }
    delete(url){
        return new Promise((resolve ,reject) => {
            fetch(url ,{
                method : 'DELETE',
                headers : {
                    'Content-type' : 'application/json'
                }
            })
                .then(data => data.json())
                .then(data => resolve('Resource Deleted...'))
                .catch(err => reject(err))
        });
    }
}