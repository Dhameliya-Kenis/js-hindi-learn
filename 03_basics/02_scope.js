// let a = 10
// const b = 20
// var c = 30

if(true){
    let a = 1
const b = 2
var c = 3
}

// console.log(a);
// console.log(b);
console.log(c);



function one(){
    const username = "kenis"
    function two(){
        const website = "youtube"
        console.log(username);
    }

    //console.log(website);
    two()
}
one()


// interesting topic - hoisting

console.log(addone(5));

function addone(num){
    return num+1
}

// addtwo(6)
// addtwo is name of function as well as varible so we can't call such function before declaration
const addtwo = function(num){
    return num+2
}

console.log(addtwo(6))