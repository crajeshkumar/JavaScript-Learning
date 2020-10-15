const today=new Date();
let val=today;
const birthDay=new Date('02/16/2000 4:25');//month/date/year
val=birthDay;
let age=today.getFullYear()-birthDay.getFullYear();
console.log(age);


//To get values from Date object
let month=today.getMonth();
console.log(month);//return the month as integer from 0-11
var monthList=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEV'];
console.log(monthList[month]);//To get month
let todayDate=today.getDate();
console.log(todayDate);
let todayDay=today.getDay();
console.log(todayDay);//days start from 0-6 to represent sun-sat
console.clear();


//To set time or date OR change something in date object
birthDay.setDate(1);
birthDay.setMonth(0);
birthDay.setFullYear(2002);
console.log(val);
