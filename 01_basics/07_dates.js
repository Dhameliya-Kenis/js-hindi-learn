let myDate = new Date()

//console.log(myDate);
//console.log(myDate.toString());
//console.log(myDate.toISOString());
//console.log(myDate.toJSON());
//console.log(myDate.toLocaleDateString());
//console.log(myDate.toLocaleString());
//console.log(myDate.toLocaleTimeString());

//console.log(typeof myDate);

//let newDate = new Date(2023, 0 , 23, 11 , 30); // (year, month (in js month starts from 0), date, hour, minutes)
let newDate = new Date("2023-01-23")
// console.log(newDate.toString());
console.log(newDate.getMonth()+1);
console.log(newDate.getDate())

let myTimestamp = Date.now();
//console.log(myTimestamp); // displays mili second
//console.log(newDate.getTime());

console.log(Math.floor(Date.now()/1000)); // to get only second