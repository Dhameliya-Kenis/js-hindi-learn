const user = {
    username : "kenisd",
    price : 99,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        //console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "aman"
// user.welcomeMessage()

// console.log(this);



// function chai(){
//     let username = "yash"
//     console.log(this.username);
// }
// chai()


// const chai = function(){
//     let username = "rajiv"
//     console.log(this.username);
// }


// const chai = () => {
//     let username = "jaydip"
//     console.log(this.username);
// }
// chai()

const addTwo = (num1, num2) => {
    return num1 + num2 // explicit return
}

console.log(addTwo(3,4));

const Addition = (num1, num2) => num1 + num2 // implicit return if function is of 1 line 
console.log(Addition(3,4));

const myfyn = () => ({username: "varun"}) // must use round bracket if you want to return object
console.log(myfyn());