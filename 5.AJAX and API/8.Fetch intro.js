document.querySelector('#button1').addEventListener('click',getText);
document.querySelector('#button2').addEventListener('click',getJSON);
document.querySelector('#button3').addEventListener('click',getAPI);

function getText(){
    fetch('text.txt')
    .then(res => res.text())
    .then(res => document.querySelector('.res').innerHTML=res)
    .catch(() => console.log('There is some error presented'));
}

function getJSON(){
    fetch('data.json')
    .then(res => res.json())
    .then(function(data){
        let output = '';
        data.forEach(function(obj){
            output += `<li>${obj.name}</li>`
        })
        document.querySelector('.res').innerHTML=output;
    })
    .catch(function(){
        console.log('There is some error presented');
    });
}

function getAPI(){
    fetch('https://api.github.com/users')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        let output = '';
        data.forEach(function(obj){
            output += `<li>${obj.login}</li>`
        })
        document.querySelector('.res').innerHTML=output;
        console.log(data);
    })
    .catch(function(){
        console.log('There is some error presented');
    });
}