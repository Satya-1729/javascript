// let p ={
//     name :"satya",
//     age : "22"

// }
// console.log(p)


// let q = {
//     run:()=>{
//         alert("yohohoho")
//     }
// }

// p.__proto__ = q
// p.__proto__ =  {
//     name : "jimmy"
// }
// p.run()
// console.log(p.name())

// The mistake lies in your code where you're setting the prototype of `p` to different objects. Let's break down the code:

// javascript
let p ={
    name :"satya",
    age : "22"
}

console.log(p) // { name: "satya", age: "22" }

let q = {
    run:()=>{
        alert("yohohoho")
    }
}

p.__proto__ = q // Setting p's prototype to q

p.__proto__ =  {
    name : "jimmy" // Overriding p's prototype to a new object with just a 'name' property
}

p.run() // This will throw an error because 'p' no longer has the 'run' method from the 'q' object.

console.log(p.name()) // This will also throw an error because 'p' no longer has 'name' as a function.


// So, to fix this, you should set the properties and methods properly without overriding the prototype multiple times.