document.querySelector('#button1').addEventListener('click',loadCustomer);
document.querySelector('#button2').addEventListener('click',loadCustomers);

function loadCustomer(){
    
    const xhr = new XMLHttpRequest();

    xhr.open('GET','customer.json',true)
    xhr.onload = function(){
        if(this.status === 200)
        {
            const customer = JSON.parse(this.responseText);
            const output = `<ul>
            <li>ID: ${customer.id}</li>
            <li>Name: ${customer.name}</li>
            <li>Age: ${customer.age}</li>
            <li>Mobile Number: ${customer.mobileNo}</li>
            </ul>`;
            document.querySelector('#result1').innerHTML= output;
        }

    }
    xhr.send();
}

function loadCustomers(){
    
    const xhr = new XMLHttpRequest();

    xhr.open('GET','customers.json',true)
    xhr.onload = function(){
        if(this.status === 200)
        {
            const customers = JSON.parse(this.responseText);
            let output = '';
            customers.forEach(function(customer){
                output += `<ul>
                <li>ID: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                <li>Age: ${customer.age}</li>
                <li>Mobile Number: ${customer.mobileNo}</li>
                </ul>`;
            });
            console.log(output);
            
            document.querySelector('#result2').innerHTML= output;
        }
        
    }
    xhr.send();
}