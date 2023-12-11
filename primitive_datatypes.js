//primitive data types are of seven types namely :
// nn ss bb u
let a = null 
let b = 321
let c = Symbol("this is the one of the datatype")
let d = "satya"
let e = true;//or either it can be false boolean 
let f = BigInt("04552") + BigInt("03");
let g = undefined 
console.log(a,"\n",b,"\n",c,"\n",d,"\n",e,"\n",f,"\n",g,"\n")
console.log(typeof d )

// now non primitive data type i.e., objects 
// these are in the key pair 
const item ={
    "Dev" : true,
    "Ajay": "chutiya",
    "satya": 47,
    "dhruv": "chatur"
}
console.log(item["satya"])