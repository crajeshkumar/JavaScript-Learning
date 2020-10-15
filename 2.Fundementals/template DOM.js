const name='Rajesh';
const age=18;
const married='No';

//Normal DOM
let html='<ul><li>Name:'+name+'</li><li>Age:'+age+'</li></ul>';

//Formating DOM
html='<ul>'+
        '<li>Name:'+name+'</li>'+
        '<li>Age:'+age+'</li>'+
    '</ul>';

//With template string
function sayHello()
{
    return 'hello';
}

html=`
<ul>
<li>Name:${name}</li>
<li>Age:${age}</li>
<li>Married:${married}</li>
<li>Any Message:${sayHello()}</li>
<li>Operation addition:${5+7}</li>
<li>Conditional:${12>45?"a":"b"}</li>
</ul>
`;


document.body.innerHTML=html;