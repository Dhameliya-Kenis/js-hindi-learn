console.log("2" > 1);
console.log("02" > 1);

// not best practise
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// equality check will not convert the datatypes
// comparison operator will convert the datatypes and then try to compare 
// so in 1st and 3rd console.log it will convert the null into the number then compare