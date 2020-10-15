class Person{
    constructor(firstName,lastName,dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    greeting(){
        return `Welcome ${this.firstName} ${this.lastName}`;
    }
    getsMarried(newLastName){
        this.lastName = newLastName;
    }
    calculateAge(){
        const diff = Date.now() - this.dob.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    static addNumber(x,y){
        return x+y;
    }
}

const raj = new Person('Rajesh','Kumar','02-16-2000');
raj.getsMarried('efgg');

//static methods or stand alone method will not be a function of created object
//console.log(raj.addNumber(2,3));

console.log(Person.addNumber(2,4));