let promise = new Promise(function(resolve,reject){
    alert("hello gets executed")
    resolve(56)

})
console.log("we are learning about promises")
setTimeout(function(){
    console.log("just using this not for a purpose")
},2000)
console.log("promises is all about promise of doing something rejected or resolved")
console.log(promise)

let p1= new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("hi my code gets run")
        resolve(true)
    },3000)

})
let p2= new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("hi my code didn't run")
        reject(new Error('failed to load'))
    },3000)

})

p1.then((value)=>{
    console.log(value)

},(error)=>{
    console.log(value)
})
// p2.catch((value)=>{
//     console.log(value)
// })


let src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"

let pro = new Promise (function(resolve,reject){
    let script = document.createElement("script")
    script.src = src
    script.onload=()=>{
        console.log("script loaded ")
        resolve(true)
    }
    script.onerror=()=>{
        console.log("error has been occured")
        reject(new Error("failed to load"))
    }
    document.body.appendChild(script)
    
})

function goodmorning(src){
    console.log("SRC ",src)
}

function goodnight(src){
    console.log("SRC ",src)
}

pro.then(goodmorning).catch(goodnight)
   




