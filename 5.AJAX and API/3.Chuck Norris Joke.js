document.querySelector('#button').addEventListener('click',getJokes);
function getJokes(e){
    const number = document.querySelector('#joke-count').value;
    const xhr = new XMLHttpRequest();
    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);
    xhr.onload = function(){
        if(this.status === 200){
            const jokes = JSON.parse(this.responseText);
            let output ='';
            jokes.value.forEach(function(joke){
                output += `<li>${joke.joke}</li>`;
            });
            document.getElementById('joke-list').innerHTML = output;
        }
    }
    xhr.send();
    e.preventDefault();
}