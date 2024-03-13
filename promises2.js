let p1 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("resolved after 2 sec")
        resolve(45)
    },2000)
})
p1.then((value)=>{
    console.log(value)
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("resolved after 2 sec")
            resolve(65)
        },2000)
    })
}).then((value)=>{
    console.log("done",value)
})
