//EVENT BUBBLING

// let elemt=document.querySelector('.card-title');
// elemt.addEventListener('click',()=>{
//     console.log('card title');
// })



// elemt=document.querySelector('.card');
// elemt.addEventListener('click',()=>{
//     console.log('card');
// })


// elemt=document.querySelector('.card-content');
// elemt.addEventListener('click',()=>{
//     console.log('card content');
// })


//The output will be...
//card title
//card content
//card
//first the inner element is touched. so the event will start from inner side to outer edge


//EVENT DELGATION  -  It starts from the outer to inner part
const submitbtn=document.querySelector('.card-content .btn');
submitbtn.addEventListener('click',(e)=>{
    const task=document.querySelector('#task').value;
    const outer=document.createElement('li');
    outer.className='collection-item';
    outer.append(document.createTextNode(task));
    //outer.innerText=task;
    const atag=document.createElement('a');
    atag.className='delete-item secondary-content';
    const itag=document.createElement('i');
    itag.className='fa fa-remove';
    atag.appendChild(itag);
    outer.appendChild(atag);
    document.querySelector('ul').appendChild(outer);
    console.log(outer);
    e.preventDefault();
});



document.body.addEventListener('click',(e)=>{
  if(e.target.classList.contains('fa-remove')){
      console.log('triggered');
      e.target.parentElement.parentElement.remove();

  }
})

document.querySelector('.clear-tasks').addEventListener('click',(e)=>{
    const alltasks=document.querySelectorAll('li');
    alltasks.forEach((item)=>{
        item.remove();
    });
});