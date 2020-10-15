//Our task is to add one task on the end

{/* <li class="collection-item">
    List Item
    <a href="#" class="delete-item secondary-content">
        <i class="fa fa-remove"></i>
    </a>
</li>  */}


// Create an element li
const li = document.createElement('li');

//Add class
li.className='collection-item';

//Add Content - Text node
li.appendChild(document.createTextNode('Hello Test'));

//create x symbol
const link= document.createElement('a');
link.className='delete-item secondary-content';
link.innerHTML=' <i class="fa fa-remove"></i>';

//Append it with li
li.appendChild(link);

//Add li with the ul in Tasks
document.querySelector('ul.collection').appendChild(li);
