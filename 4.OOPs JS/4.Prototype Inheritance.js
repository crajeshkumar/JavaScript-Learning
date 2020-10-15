function Person(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.greeting = function(){
    return `Hello ${this.firstName} ${this.lastName}\nWelcome!!!`;
}

const rajesh = new Person('Rajesh','Kumar');

//console.log(rajesh.greeting());

function Customer(firstName, lastName, phoneNo, city){
    //Invoke another object and creates those keys but doesn't create that prototype
    Person.call(this,firstName,lastName);
    this.phoneNo = phoneNo;
    this.city = city;
}

//Over loading prototype
Customer.prototype.greeting = function(){
    return `Hello ${this.firstName} ${this.lastName}\nWelcome to our company!!!`;
}

const x = new Customer('Rajesh','Kumar',2141232,'faffsf');

console.log(x.greeting());
//To make use of prototype
Customer.prototype = Object.create(Person.prototype);

//To direct the constructor
//Customer.prototype.constructor = Customer;

const y = new Customer('Rajesh','Kumar',2141232,'faffsf');

console.log(y);