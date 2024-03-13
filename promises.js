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