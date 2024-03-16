async function harry(){
    let delhi_weather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // console.log("run after 5 seconds")
            resolve(27)
        },5000)
    })
    let sagar_weather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // console.log("run after 3 seconds")
            resolve(24)
        },3000)
    })
    console.log("delhi weather")
    let delhiW = await delhi_weather
    console.log(delhiW)
    console.log("sagar weather")
    let sagarW = await sagar_weather
    console.log(sagarW)
    return  [delhiW,sagarW]

}
let cherry =async ()=>{
    console.log("hey i am  waiting for anyone here ")
}
// let cherry = ()=>{
//     console.log("hey i am not waiting for anyone here ")
// }
const main =async ()=>{
    console.log("welcome to weather control room")
    let a = await harry()
    let b = await cherry()
    // a.then((value)=>{
    //     console.log(value)
    // })
}
main()