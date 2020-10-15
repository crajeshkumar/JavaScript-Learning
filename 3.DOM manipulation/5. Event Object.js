document.querySelector('.clear-tasks').addEventListener('click',(e)=>{

    // e.preventDefault();  To remove loading simply we can add # in href

    let val;
    val=e;
    val=e.target;
    val=e.target.className;
    val=e.target.classList;
  
    val=e.clientX;
    val=e.clientY;

    val = e.offsetX;
    val = e.offsetY;

    console.log(val);
    e.preventDefault();
});