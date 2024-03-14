let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("1 promise to be done")
        resolve(1)
    },1000)
})
let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("2 promise to be done")
        reject(new Error("error"))
    },2000)
})
let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("3 promise to be done")
        resolve(3)
    },3000)
})
// let promise_all = Promise.all([p1,p2,p3])
// let promise_all = Promise.allSettled([p1,p2,p3])
// let promise_all = Promise.race([p1,p2,p3])
let promise_all = Promise.any([p1,p2,p3])
promise_all.then((value)=>{
    console.log(value)
})