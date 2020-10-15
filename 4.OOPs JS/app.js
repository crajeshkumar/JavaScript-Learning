class Person{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greeting(){
        return `Welcome ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person{
    constructor(firstName,lastName,phoneNo,city){
        super(firstName,lastName);
        this.phoneNo = phoneNo;
        this.city = city;
    }
    static membershipAmount(){
        return 300;
    }
}
const raj = new Customer('Rajesh','Kumar','467386437','cahfia');
//console.log(raj.membershipAmount());
console.log(Customer.membershipAmount());
