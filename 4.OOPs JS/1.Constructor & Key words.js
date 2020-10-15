//ES2015 format

// class person {
//     constructor() {
//         this.name = 'Rajesh';
//     }
// }
function calculateAge(obj){
    const diff = Date.now() - obj.dob.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
function Person(name , dob){
    this.name = name;
    this.dob = new Date(dob);
    this.age = calculateAge(this);
}
//Note : In this method we are assuming our date of birth as 1-1-1970 then calculated spended year from that moment
const raj = new Person('Rajesh','2-14-2000');

console.log(raj.age)