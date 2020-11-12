let re = 'He';

// re = 'Hello'
// console.log(re);//return regular expression
// console.log(re.source);//return source of re

//exec() - return result in array or null if not present
//result array will be['search string','index in which they gone similer','input string']
// const res = re.exec('hello Hello world');
// console.log(res[0]);
// console.log(res.index);
// console.log(res.input);

// test() - return boolean true if present
// const result = re.test('hello world');
// console.log(result);

// match() - similer to exec - works with string too
// const str = 'Hello world';
// const result = str.match('world');
// const result = str.match(re);
// const result = str.match(/world/);
// console.log(result);

// search() -return the index in which the string match starts -1 if not present - works with string too
// const str = 'Hey Hell world';
// const res = str.search(re);
// console.log(res);

// replace() -  replace the string with re or string first match only replaced - worts with string too
// const str = 'Hey Hello......';
// let newStr = str.replace(re,'Hi');
// console.log(newStr);


