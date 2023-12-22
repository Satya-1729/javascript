// write a program to print the marks of a students in an object using for loop
const mrk={
    ajay : 85,
    satya : 99,
    chitransh : 88,
    ajay_gour : 98,
    krishna : 86,
    dheerendra : 84
}
// for in loop
for (x in mrk){
    //no you cant use for of loop for objects The for...of loop is used to iterate over the elements of an iterable object, such as an array, a string, or a map. However, an object in JavaScript is not an iterable object, so you cannot use a for...of loop to iterate over its properties.
    console.log("the marks of ",x,"is ",mrk[x])
}
// for loop
console.log(Object.keys(mrk))
console.log(Object.keys(mrk).length)
console.log(Object.keys(mrk)[5])
for(let i=0;i<Object.keys(mrk).length;i++){
    console.log("the marks of ",Object.keys(mrk)[i],"is ",mrk[Object.keys(mrk)[i]])
    
}
// write the program in which print "try again" if users doesnt put the correct number
let fn =()=>{
    let t = Number.parseInt(prompt("enter the number "))
    
    if (t==5){
        console.log("you entered the correct number")
    }
    else{
        console.log("try again")
        fn()
    }
    return 
}
console.log(fn())
// now solution by code with harry
let n=4
let i
while(i!=n){
     i = Number.parseInt(prompt("enter the number"))
    console.log("try again")
}
console.log("you entered the correct number")

// write a code to print the mean of 5 numbers
const fn=(p,q,r,s,t)=>{
    
    return (p+q+r+s+t)/5
}
console.log(fn(5,5,5,5,5))

// write a function to print the mean of 5 number
const fn = () => {
    let p = Number.parseInt(prompt("enter the value of p "));
    let q = Number.parseInt(prompt("enter the value of q "));
    let r = Number.parseInt(prompt("enter the value of r "));
    let s = Number.parseInt(prompt("enter the value of s "));
    let t = Number.parseInt(prompt("enter the value of t "));
    
    return (p + q + r + s + t) / 5;
};

console.log(fn());