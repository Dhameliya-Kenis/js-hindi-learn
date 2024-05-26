function sayMyName(){
    console.log("k");
    console.log("e");
    console.log("n");
    console.log("i");
    console.log("s");
}

//sayMyName()

// function addNum(number1, number2){
//     console.log(number1 + number2);
// }

// const result = addNum(4, 7) // it won't assign value in result as function is not returning anything

function addNum(number1, number2){
    let result = number1 + number2
    return result
    console.log("kenis"); // it wont be printed as value is already returned
}

const result = addNum(4,7)
console.log("Result: ", result);


function loginUserMessage(username = "BotUser"){
    return `${username} just logged in`
}

console.log(loginUserMessage("kenis"))
console.log(loginUserMessage())