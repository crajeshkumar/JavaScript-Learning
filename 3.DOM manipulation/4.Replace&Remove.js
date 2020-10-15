// REPLACE ELEMENT

//Get old heading
const oldHeading=document.querySelector('h5#task-title');

// Create new Element
const newHeading=document.createElement('h4');

//Add id
newHeading.id='task-title';
//Append text node

newHeading.appendChild(document.createTextNode('Tasks'));

//create parent element
const par = document.querySelector('div.card-action');
//replace
par.replaceChild(newHeading,oldHeading);

//Remove

let lis = document.querySelectorAll('li.collection-item');
let list = document.querySelector('ul');

//To remove all
// lis.forEach(function(li){
//     li.remove();
// });

//To remove by index
lis[0].remove();

//To remove child element
list.removeChild(lis[1]);

//To remove x from child
const selectItem= document.querySelector('li:nth-child(1)');
const linkpresent=selectItem.children[0];
selectItem.removeChild(linkpresent);

// CLASSES & ATTRIBUTES
const firstchild= document.querySelector('li:first-child');
const link=firstchild.children[0];


