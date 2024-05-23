let score = "25abc"

console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber);

/*
"33" => 33
"33abc" => NaN - not a number
"true/false" => 1/0

*/

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

/*
1 => true 0=>false
""=> false
"kenis" => true
*/

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber);

//***********Operations */

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2); // based on datatypes of 1st argument it will convert all the other argument in the same data types: 
// output: 122 // "1" is string type so other argument will be converted into the string and it will concat
console.log(1+2+"2"); 
// output: 32