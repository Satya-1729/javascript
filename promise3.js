// multiple handlers
let p1 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("hurray my promise is running with multiple handlers")
        resolve(true)
    },4000)

})
p1.then(()=>{
    console.log("handler1")
})

p1.then(()=>{
    setTimeout(()=>{
        console.log("handler2")
    },3000)
})