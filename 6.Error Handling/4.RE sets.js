let re = /hello/;
re = /hello/i;  //  i- case insensitve

//Meta characters
re = /^hello/i;  // Must start with
re = /oNe$/i;    // Must end with
re = /^Hello$/i; // Must be the same
re = /h.llo/i;   // Matches any ONE character
re = /h*llo/i;   // Matched 0 or any number of charactes
re = /gre?a?y/;  // Says the character befor ? is optional
re = /gre?a?y\??$/; // Escape character


// Brackets[] - Character set 
re = /gr[ae]y/; //Either a or e but anyone shoud be
re = /[^GF]ray/i; //Accept anything except G or F
re = /[A-Z]ray/;   //Match any Upper case
re = /[a-z]ray/;   //Match any Lower case
re = /[A-Za-z]ray/;   //Match any Upper case or Lower case
re = /[A-Z]ray/;   //Match any Upper case
re = /[0-9]ray/;   //Match any number range in 0-9


// Braces {} - Counts 
re = /Hel{2}o/i;    // must occur {m} m time the letter befor braces
re = /Hel{2,4}o/i;    // must occur {m,n} m to n time the letter befor braces
re = /Hel{2,}o/i;    // must occur {m} atleast m time the letter befor braces


// Parantheses() - grouping
re = /([0-9][a-z]){3}/;  //It combines all together as group

const str ='3w3e4r';

const result = re.exec(str);
console.log(result);

function retest(re , str){
    if(re.test(str))    
        console.log(`${re.source} is presented in ${str}`);
    else   
        console.log(`${re.source} does not presented in ${str}`);
}

retest(re ,str);