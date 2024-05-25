const score = 100

const newScore = new Number(200)
//console.log(score);
//console.log(newScore);

//console.log(newScore.toString());
//console.log(newScore.toString().length);
//console.log(newScore.toFixed());


const newNumber = 596.21658
//console.log(newNumber.toPrecision(4));
//console.log(newNumber.toPrecision(3));

const hundred = 1000000
//console.log(hundred.toLocaleString());
//console.log(hundred.toLocaleString('en-IN'));




//////////////////////---- math ---- //////////////////////////////
/*
console.log(Math.abs(-25));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.6));
console.log(Math.min(2,6,9,1));
console.log(Math.max(6,9,4,0));
*/


//console.log(Math.floor((Math.random()*10)) + 1);

// dice problem - we need only 1 to 6 on dice

const min = 1;
const max = 6;

console.log(Math.floor(Math.random() * (max-min+1) ) + min ) // now it will value between 1 to 6
