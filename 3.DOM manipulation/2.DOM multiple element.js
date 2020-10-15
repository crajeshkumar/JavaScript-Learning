let lis=document.querySelectorAll('.collection-item');
// let liArray=Array.from(lis);
// liArray.reverse();
// liArray[1].style.color="red";

// document.querySelector('ul').getElementsByClassName('collection-item');
lis.forEach(function(li,index){
    li.textContent=`${index}`
})
liodd=document.querySelectorAll('li:nth-child(odd)');
liodd.forEach((li)=>{
    li.style.color='red';
    
})