// for of 

const arr = [1,2,3,4,5]

for (const num of arr) {

    //console.log(num);
    
}

// maps

const map = new Map()
map.set('IN', "India")
map.set('USA', 'united states of america')
map.set('FR', 'France')

//console.log(map);

for (const key of map) {
    console.log(key);
}

for (const [key, value] of map) {
    console.log(key, ':', value);
}


// const myObject = {
//     game1: 'COC',
//     game2: 'BGMI'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':', value);
// }