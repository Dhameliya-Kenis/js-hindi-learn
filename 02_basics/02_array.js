const marvel_heros = ['thor', 'ironman' , 'spiderman']
const dc_heros = ['superman' , 'flash', 'batman']

//marvel_heros.push(dc_heros)
//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

//const herosArr = marvel_heros.concat(dc_heros)
//console.log(herosArr);

//another method to concat
const NewHero = [...marvel_heros, ...dc_heros]
console.log(NewHero);

const another_array = [3,5,6,[4,5,6],9,[8,7,[1,2]]]
const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);


console.log(Array.isArray("kenis"));
console.log(Array.from("kenis"));
console.log(Array.from({name : "kenis"})); //intresting might be ask in interview


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));