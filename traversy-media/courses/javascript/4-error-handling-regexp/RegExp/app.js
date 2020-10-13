// // -------------------------- VIDEO 1 --------------------------

// let re;
// re = /hello/;
// re = /hello/i; // i = case insensitive
// re = /hello/g; // g = global search

// // Te muestra el valor de arriba, el literal. ------------------------------------------
// console.log(re);

// // Te muestra el valor de uso. ------------------------------------------
// console.log(re.source);

// // exec() - Return result in an array or null ------------------------------------------
// const result = re.exec('hello world');

// console.log(result);
// console.log(result.input);

// // test() - Returns true or false ------------------------------------------

// const result = re.test('Hello world');
// console.log(result);

// // match() - Returns result array  or falnullse  ------------------------------------------

// const str = 'Hello There';
// const result = str.match(re);

// console.log(result);

// // search() Retusn index of the first maatch if not found return -1  ---------------------------

// const str = ' Hello There';
// const result = str.search(re);
// console.log(result);

// // replace() - Return new string with some or all matches of a pattern ------------------------------------------
// const str = 'Hello There';
// const newStr = str.replace(re, 'Hi');
// console.log(newStr);

// // -------------------------- VIDEO 2 & 3 --------------------------

let re;
// Literal Characters
re = /hello/;
re = /hello/i; // i = case insentitive

// Metacharacter Symbols
re = /^h/i; // ^ = Must start with
re = /world$/i; // $ = Must end with
re = /^hello world$/i; // Must start with and end with

re = /h.llo/i; // . = Matches any ONE character (comodin) one time.
re = /h*llo/i; // * = Matches any ONE character 0 or more times. (heeello)

re = /gre?a?y/i; // ? = Optional character
re = /gre?a?y\?/i; // ? = Espace character with \ (grey? = gray? = gry?  = true)

// Brackers [] - Character Sets

re = /gr[ae]y/i; // Must be an a or e (cant be gry)
re = /[GF]ray/; // Must be an G or F
re = /[^GF]ray/; // Match anything except a G or F (xray = true)
re = /[A-Z]ray/; // Match any uppercase letter
re = /[a-z]ray/; // Match any lowercase letter
re = /[A-za-z]ray/; // Match any letter
re = /[0-9]ray/; // match any number;

// Braces {} - Quantifiers

re = /Hel{2}o/i; // Must occur exactly {x} times
re = /Hel{2,4}o/i; // Must occur between {x and y} times
re = /Hel{2,}o/i; // Must occur at least {x} times
re = /Hel{0,4}o/i; // Must occur no more than {y} times

// Parenthesis () - Grouping

re = /^([0-9]x){3}$/; // must start with "number"x, must do it 3 times, must finish with "number"x (3x3x3x = true)

// Shorthand Character Classes

re = /\w/; // letter, number or "_"
re = /\w+/; // + = one or more
re = /\W/; //  NOT a letter, number  or "_"
re = /\d/; //  Match any digit
re = /\D/; //  NOT a digit
re = /\s/; //  Match whitespace char
re = /\S/; //  NOT a whitespace char
re = /Hell\b/i; // b =  Word bonduary

// Assertions

re = /x(?=y)/; // Match X only if followed by Y
re = /x(?!y)/; // Match X only if NOT followed by Y

// String to match
const str = 'asdxf';

// Log Results
let result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does not match ${re.source}`);
  }
}

reTest(re, str);
