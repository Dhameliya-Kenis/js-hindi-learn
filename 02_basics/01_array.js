const myArr = [0,1,2,3,4,5]



const myArr2 = new Array(59,18,18,15,65,84)
//console.log(myArr2.length);


// array methods
//myArr.push(25)
//console.log(myArr);

//myArr.pop()
//console.log(myArr);

myArr.unshift(9) // to add value from the front
myArr.shift() // to remove value from the front 

const newArr = myArr.join()

//console.log(newArr);


// slice and splice

console.log("A: ", myArr);
const arr1 = myArr.slice(1,3);
console.log(arr1);
console.log("B: ", myArr);

const arr2 = myArr.splice(1,3)
console.log(arr2);
console.log("C: ", myArr);