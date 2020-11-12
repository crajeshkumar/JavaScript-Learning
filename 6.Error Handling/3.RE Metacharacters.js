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

const str ='grey?';

const result = re.exec(str);
console.log(result);

function retest(re , str){
    if(re.test(str))    
        console.log(`${re.source} is presented in ${str}`);
    else   
        console.log(`${re.source} does not presented in ${str}`);
}

retest(re ,str);