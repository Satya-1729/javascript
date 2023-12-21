let a = prompt("enter your name");
a = number.parseint(a)
console.log(typeof a)
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");
let a = prompt("hey whats your age ");
a = Number.parseInt(a) //converting string to number 
if (a<0){
    console.log("you are not verified user")
    
}
else if(a<10){
    console.log("you are still underage")
}
else if (a>18 && a<80){
    console.log("you can drive the car")
}
else{
    console.log("you are underage")
}
console.log(a)

// switching statment 
const b = prompt("enter your name ")
switch (b){
    case "krishna":
        console.log("this is my friend ")
        break
    case "ajay"&&"chitransh":
        console.log("these two are also my firend")
        break
    case "satya":
        console.log("you this is me ")
        break
    default:
        console.log("sorry we cannot find anyone with this name")
        break
        

}
// its all about ternary operator
let a = Number.parseInt(prompt("enter the value of a "))
console.log("you can ",a>0?"you are printable":"else you are not")