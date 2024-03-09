alert("setTimeout")
let a = setTimeout(function(){
    alert("this is an example of set Interval")
} ,5000)
console.log(a)

let p = prompt("enter your answer of setting interval or not")
if("n"===p){
    clearTimeout(a)
}



let z = (a,b,c)=>{
    console.log("the addition of three numbers is ", a+b+c)
}
setTimeout(z,2000,1,2,7)