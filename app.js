//saving in local storage - saves permantly until we delete manually
//  localStorage.setItem('name','Rajesh');
//  localStorage.setItem('age','23')

//saving in session storage - saves only in session. once we close the window this storage will be deleted
//sessionStorage.setItem('name','Bharathi');

//To clear by key
//localStorage.removeItem('name');

//To delete entire localstorage
//localStorage.clear();

document.querySelector('form').addEventListener('submit',()=>{
const task=document.querySelector('#task').value;
document.querySelector('#task').value='';
let tasks;
if(localStorage.getItem('tasks')===null){
    tasks=[];
}
else{
    tasks=JSON.parse(localStorage.getItem('tasks'));
}
tasks.push(task);
localStorage.setItem('tasks', JSON.stringify(tasks));
console.clear();
tasks=JSON.parse(localStorage.getItem('tasks'));
tasks.forEach((task)=>{
    console.log(task)
})

})
