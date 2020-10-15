//Object.prototype   --> Whole doc
//Person.prototype   --> Person object

//Person constructor
function Person(firstName , lastName ,date, newLastname){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(date);
    // this.getMarried = function(){
    //     this.lastName = newLastname;
    // }
    // this.fname = getMarried(newLastname,this);
}

//Note : Method wont execute while creating the object. you need to execute them seperately

//Note : Using prototype doesn't need to share instance of an construtor -->(No need to share obj in for of 'this' as argument in function)
//Prototype method

Person.prototype.calculateAge=function(){
    const diff = Date.now() - this.dob.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

Person.prototype.getFullname = function(){
    return (`${this.firstName} ${this.lastName}`)
}

//prototype which change other key values

Person.prototype.getMarried = function(newLastName){
    this.lastName = newLastName;
}

//While try to change prototype into a method

// function getMarried(newLastName,obj){
//     obj.lastName = newLastName;
// }


const rajesh = new Person('Rajesh','kumar','Feb 16 2000');
console.log(rajesh.calculateAge());
//rajesh.getMarried('xyz')
console.log(rajesh.getFullname('xyz'));


//console.log(rajesh.hasOwnProperty('dob'));   -->true
//console.log(rajesh.hasOwnProperty('calculateAge'));  -->false
//console.log(rajesh.__proto__.hasOwnProperty('calculateAge'));  -->true



