// Immediately Invoked Function Expressions (IIFE)

//normal function and call
// function chai(){
//     console.log("DB connected");
// }
// chai()

// global scope k polution se problem hoti hai uss issue ko overcome karne k liye IIFE use karte hai


// IIFE function and immediate execute
// example with named iife ex. chai1
(function chai1(){
    console.log("DB connected");
})();

// example without named iife
( (name) => {console.log(`another DB connected ${name}`);})("kenis");