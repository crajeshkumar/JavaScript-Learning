function library(){
    this.http = new XMLHttpRequest();
}

//Get post from URL
library.prototype.get = function(url,callback){
    this.http.open('GET',url,true);

    //Inside a function this-keyword points the current object which is (this.http). So you can point it as this.status or else assign value of this to another variable outside of function
    // this.http.onload = function(){
    //     if(this.http.status === 200){
    //         console.log(this.http.responseText);
    //     }
    // }
    


    //Method 1
    // const self = this;
    // this.http.onload = function(){
    //     if(self.http.status === 200){
    //         console.log(self.http.responseText);
    //     }
    // }


    //Method 2
    this.http.onload = function(){
        if(this.status === 200){
            callback(null,this.responseText);
        }
        else{
            callback(`Error: ${this.status}`)
        }
    }    
    
    this.http.send();
}


//Post data in URL
library.prototype.post = function(url, data, callback){
    this.http.open('POST',url,true);
    
    this.http.setRequestHeader('Content-type','application/json');
    
    this.http.onload = function(){
        callback(null,this.responseText);
    }
    
    this.http.send(JSON.stringify(data));

    
}


//Put data in URL
library.prototype.put = function(url, data, callback){
    this.http.open('PUT',url,true);
    
    this.http.setRequestHeader('Content-type','application/json');
    
    this.http.onload = function(){
        callback(null,this.responseText);
    }
    
    this.http.send(JSON.stringify(data));
}


//Delete data in URL
library.prototype.delete = function(url, callback){
    this.http.open('DELETE',url,true);
    
    this.http.setRequestHeader('Content-type','application/json');
    
    this.http.onload = function(){
       if(this.status === 200){
            callback(null,`Post Deleted`);
       }
       else{
           callback(`Error in deletion : ${this.readyState}`);
       }
    }

    this.http.send();
}

