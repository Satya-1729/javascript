// create a letiable of type string and try to add a number to it 
let a = "satya is"
let b = a + 47;
let c = 33
let t = a+c
console.log(b)
console.log(a+c)

// use typeof of operator to know about the data type used in the last question
console.log(typeof (a+b))
console.log(typeof t)

// create a const object in javascript can you change it to hold a number later ?
const z = {
    name : "satya",
    year : 2,
    branch : "AIML"

}
// z = 65 we cannot assign any other number ot an array to the object it is constant 
// z={} we cannot even assign the object inside the object 
console.log(z["branch"])

// try to add a new key to the const object in problem 3 were you able to do it?
z['friend'] = "dhruv"
z['name'] = "Ajay"
console.log(z)

// creating a dictonary
const dict ={
    Suave : "smooth, polite, and a little bit cool",
    Atrocious : "very cruel, evil, brutal, terrible, offensive",
    Stupendous : "amazing, astonishing or overwhelming",
    Flummox : "to confuse someone so much that they don’t know what to do",
    Inveterate : "habitual"
} 
console.log(dict.Inveterate)