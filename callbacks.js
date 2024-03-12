// // synchronous programming
// let a = prompt("what is your name: ")
// let b = prompt("what is your age: ")
// let c = prompt("what is your favourite color : ")
// console.log("I am " + a + "my age is " + b + "my favourite color is " + c)

// // asynchronous function
// console.log("start")
// setTimeout(function(){
//     console.log("hello ji")
// },3000)
// console.log("END")

// intro to caLLBACKS
function loadfn(src, callback){
    let script = document.createElement("script")
    script.src=src
    script.onload=()=>{
        console.log("script gets appended")
        callback(null , src);
    }
    script.onerror=()=>{
        console.log("error occured")
        callback(new Error('failed'))
    }

    document.body.appendChild(script)

}
function hello(error,  src){
    if (error){
        console.log("handles error")
        return;
    }
    alert("good morning" + src)
}
function bye(){
    alert("good night")
}
loadfn("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",hello)
