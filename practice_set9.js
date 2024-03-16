/*write a program to load a javascript file in a browser using promises.
use then to display an alert when the load is complete*/
let src ="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
async function loadscript(src){
    return new Promise((resolve,reject)=>{
    let script = document.createElement("script")
    script.src=src
    script.onload =()=>{
        resolve(src)
    }
    document.body.appendChild(script)
})
}
const main_ = async()=>{
    console.log(new Date().getMilliseconds());
    let a = await loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");
    console.log(a);
    console.log(new Date().getMilliseconds())
}
main_()

// problem2
async function harry (){
        return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("in this we will throw an error")
            reject(new Error('failed to load'))
        },3000)
    })
}
try{
    let r = await harry()
    console.log(r)
}

catch(error){
    console.log('this error has beeen handled')
}

// problem 3
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
    // let a = await p1();//this will fetch data in 1sec
    // let b = await p2();//this will fetch data in 2sec
    // let c = await p3();//this will fetch data in 3sec
    // console.log(a,b,c)

    let a = p1();
    let b = p2();
    let c = p3();
    let abc = await Promise.all([p1,p2,p3])
    console.log(abc)
    console.log(new Date().getMilliseconds())
}
main12()


