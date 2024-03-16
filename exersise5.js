// the hacker man
async function hacker(){
    let p1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Intializing hack program...........")
            resolve(55)
        },1000)
    })
    let p2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Hacking Ashish's ID ......")
            resolve(67)
        },2000)
    })
    let p3 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Username found username ashish_123...........")
            resolve(68)
        },3000)
    })
    let p4 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("conncecting to facebook.......")
            resolve(69)
        },4000)
    })
    let p5 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("BAlle bAlle.....")
            resolve(70)
        },5000)
    })
    let a = p1;
    let b = p2;
    let c = p3;
    let d = p4;
    let e = p5;
    let abcde = await Promise.all([p1,p2,p3,p4,p5])
    console.log(abcde)

}
hacker()