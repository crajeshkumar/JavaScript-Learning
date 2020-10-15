//add event
document.querySelector('#btn').addEventListener('click',loadEvent);

function loadEvent(){

    //Create instance of XML object
    const xhr =new XMLHttpRequest();
    // console.log(xhr.readyState);  --> Will provide 0 state 

    //Open
    xhr.open('GET','data.txt',true);


    // console.log(xhr.readyState);   --> will provide state 1 bcoz it stated from the first state

    //onload function invoke only in ReadyState 4. So this is optimal
    xhr.onload = function(){
       if(this.status ===200){
        document.getElementById('result').innerHTML=`<h1>Fetched data is:<br>${xhr.responseText}</h1>`
       }
    }

    //Old method
    // xhr.onreadystatechange = function(){
    //     if(this.readyState === 4 && this.status === 200)
    //     {
    //         document.getElementById('result').innerHTML=`<h1>${xhr.responseText}</h1>`;
    //     }
    // }

    //This invoke only in readyState 3(processing request)
    // xhr.onprogress = function(){
    //     console.log(this.readyState);
    // }


    xhr.onerror = function(){
        console.log('Request error');
    }


    // xhr.onreadystatechange = function(){
    //     console.log(xhr.readyState);
    // }   
    //--> There will go to all 4 stage except 0 state

    //Send

    xhr.send();


    //HTTP status
    //200: Ok
    //403: Forbidden
    //404: Not Found



    //readyState Values
    // 0: request not initialized 
    // 1: server connnection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready

}