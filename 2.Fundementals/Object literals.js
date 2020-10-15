const person={
    firstName:"Rajesh",
    lastName:"Kumar",
    age:20,
    hobbies:['Sleeping','Eating'],
    address:{
        city:'Tirunelveli',
        state:'Tamilnadu'
    },
    getBirthYear:function(){
        return 2020-this.age;
    }

}
let val;
//Total object
val=person;
//Specific value
val=person.firstName;
val=person['firstName']; 
val=person.hobbies[0];
val=person.address.city;
val=person.getBirthYear();

const emp=[
    {name:"Rajesh",age:20},
    {name:"XYZ",age:17},
    {name:"Raja"}
]

for(i=0;i!=emp.length;i++)
console.log(emp[i].age)