//const NewUser = new Object()
const NewUser = {}

NewUser.id = "123abc"
NewUser.name = "KenisD"
NewUser.isLoggedIn = false

// console.log(NewUser);
// console.log(Object.keys(NewUser)); // will use in development
// console.log(Object.values(NewUser));
// console.log(Object.entries(NewUser));
// console.log(NewUser.hasOwnProperty('name'));


const regularUser = {
    email: "regularuser@gmail.com",
    fullname:{
        regularFullName:{
            fname:"kenis",
            lname:"dhameliya"
        }
    }
}

// console.log(regularUser.fullname.regularFullName.fname);


const obj1 = {1: "a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

//const obj3 = {obj1, obj2}
//console.log(obj3);

//const obj3 = Object.assign(obj1, obj2) // it will add obj2 in obj1 then assign it to the obj3 // it will modify the obj1
//console.log(obj3);
//console.log(obj1);

//solution of above problem
const obj3 = Object.assign({}, obj1, obj2) // it will add obj1 and obj2 in an empty object // it won't modify the obj1
// console.log(obj3);
// console.log(obj1);

// another way to merge objects
const obj4 = {...obj1, ...obj2}
// console.log(obj4);


//--------------
const ArrObj = [
    {
        id: "1",
        name: "a"
    },
    {
        id: "2",
        name: "b"
    },
    {
        id: "3",
        name: "c"
    }
]

//console.log(ArrObj[1].name);

// destructure-----

const course = {
    id: "abc",
    email: "test@gmail.com",
    courseInstructor: "kenis"
}

const {courseInstructor} = course

console.log(courseInstructor);

const {courseInstructor: CoIns} = course
console.log(CoIns);