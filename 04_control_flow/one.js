// if

// if(true){

// }

// 2 == "2" -- true
// 2 === "2" -- false -- === also check the type of both parameter as well


// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Febuary");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    
    default:
        console.log("error");
        break;
}


const userEmail = "kenis@gmail.com"
if(userEmail){
    console.log("got user email");
}
else{
    console.log("don't have user email");
}

const userEmail1 = ""
if(userEmail1){
    console.log("got user email");
}
else{
    console.log("don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

const TestArry = []
if(TestArry.length === 0){
    console.log("empty array");
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}

// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
val1 = null ?? undefined ?? 15

console.log(val1);

// Terniary operator
// condition ? true : false

const price = 100
price > 80 ? console.log("price greater than 80") : console.log("price less than 80");;