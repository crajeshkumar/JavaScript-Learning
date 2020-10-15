//WINDOW OBJECTS / METHODS / PROPERTIES

//Alert
//alert("Hello world");

//PROMPT
// const input = prompt("Message to showcase","Default message");
// console.log(input);

//Confirm

// if(confirm('Are you sure'))
// {
//     console.log('YES');
// }
// else{
//     console.log('No');
// }

let val;
//Outer
val = window.outerHeight;
val = window.outerWidth;
//Inner 
val = window.innerHeight;
val = window.innerWidth;

//Scroll points
// Y represent horizontal X for vertical
val = window.scrollY;
val = window.scrollX;

//Location object
val = window.location;
//val = window.location.ancestorOrigins;
val = window.location.protocol;
val = window.location.port;
val = window.location.hostname;
val = window.location.host;
val = window.location.href;
//val = window.location.search;
// Redirect 
//window.location.href="https://www.google.com/";

//Reload
//window.location.reload();

window.history.go(-1);
val=window.history;
//val=window.history.length;

//Navigator 

val = window.navigator;
val = window.navigator.appCodeName;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);