const personPrototype = {
    greeting : function(){
        return `Hello ${this.firstName} ${this.lastName} there`;
    },
    getsMarried : function(newLastName){
        this.lastName = newLastName;
    }
};

//Normal way
const rajesh = Object.create(personPrototype);
rajesh.firstName = 'Rajesh';
rajesh.lastName = 'Kumar';
rajesh.age = 21;
rajesh.getsMarried('sdfsf');

//Different way
const kumar = Object.create(personPrototype,{
    firstName : {value:'Rajesh'},
    lastName : {value : 'Kumar'},
    age : {value : 21}
});

console.log(kumar);
