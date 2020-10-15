console.clear();
const form=document.querySelector('form');
const inputbtn=document.querySelector('#task');

function runEvent(e){
    console.log(`Event type:${e.type}`);
    console.log(e.target.value);
    inputbtn.value='';
    // e.preventDefault();
}
//Submit
//form.addEventListener('submit',runEvent);

//keydown - when key is pressed
//inputbtn.addEventListener('keydown',runEvent);

//keyup - when key is leaved after pressing
//inputbtn.addEventListener('keyup',runEvent);

//keypress - similer to keydown
//inputbtn.addEventListener('keypress',runEvent);

//focus
//inputbtn.addEventListener('focus',runEvent);

//blur
//inputbtn.addEventListener('blur',runEvent);

//cut
//inputbtn.addEventListener('cut',runEvent);

//copy
//inputbtn.addEventListener('copy',runEvent);

//paste
//inputbtn.addEventListener('paste',runEvent);

//change
// const select_tag=document.querySelector('select');
// select_tag.addEventListener('change',runEvent);
