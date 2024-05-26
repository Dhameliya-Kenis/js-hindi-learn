// singleton

// object literals
// Object.create -- it will make objects through constructor

const mySym = Symbol("key1")

const JsUser = {
    name: "Kenis",
    "full name": "Kenis Dhameliya",
//    mySym: "myKey1" // it won't be treated as symbol/key
    [mySym]: "myKey1", // correct syntax to define symbol in object
    age: 22,
    location: "surat",
    email: "kenisd@meditab.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "friday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]); // as you can see for full name you can't access with . operator

// console.log(JsUser.full name); // error
console.log(JsUser["full name"]);

console.log(JsUser[mySym]);

/*-----------------------------------------*/
JsUser.email = "kenis.d@gmail.com"

// Object.freeze(JsUser) // it won't allow to change the value

JsUser.email = "kenisdhameliya@gmail.com"
// console.log(JsUser);


////////////////////
JsUser.greeting = function(){
    console.log("hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());