const card= document.querySelector('.card');
const heading = document.querySelector('#task-title');

const newElement= document.createElement('h5');
newElement.className='clear-tasks btn black';
newElement.appendChild(document.createTextNode('Test'));
document.querySelector('.card-action').appendChild(newElement);
const clearTask = document.querySelector('h5.clear-tasks');

//CLICK
//clearTask.addEventListener('click',runEvent);

//DOUBLE CLICK
//clearTask.addEventListener('dblclick',runEvent);

//MOUSEDOWN  click-hold whill trigger
//clearTask.addEventListener('mousedown',runEvent);

//MOUSEUP click-hold-realise will trigger
//clearTask.addEventListener('mouseup',runEvent);

//MOUSEENTER trigger when you enter into selected element
//card.addEventListener('mouseenter',runEvent);

//MOUSELEAVE triggered when you leave from selected element
//card.addEventListener('mouseleave',runEvent);

//MOUSEOVER trigger event whenever hover any element which is inside selected element 
//card.addEventListener('mouseover',runEvent);

//MOUSEOUT trigger event whenever leave from any of element which is inside of selected element
//card.addEventListener('mouseout',runEvent);

//MOUSEMOVE triggered if mouse is moved
card.addEventListener('mousemove',runEvent);


//Event Hamdler
function runEvent(e){
    console.log(`Event Type:${e.type}`);
    heading.textContent= `MouseX:${e.offsetX} MouseY:${e.offsetY}`;
    document.body.style.backgroundColor=`rgb(${e.offsetX%255},${e.offsetY%255},40)`;
}

