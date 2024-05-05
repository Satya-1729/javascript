let p1 = async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(54)
        },1000)
    })
}
let p2 = async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(55)
        },2000)
    })
}
let p3 = async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(23)
        },3000)
    })
}
const main12 = async ()=>{
    let a = await p1();
    let b = await p2();
    let c = await p3();
}
console.log(main12())

let q = Promise.allSettled([p1,p2,p3])
console.log(q)