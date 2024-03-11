let x = function(e){
    alert("hello world1")
}
let y = function(e){
    alert("hello world2")
}
// this will create one object to remove the the event handler
btn.addEventListener("click",x)
btn.addEventListener("click",y)
let p = prompt("enter the number for which you have to remove")
if(p=="2"){
    btn.removeEventListener("click",y)
}
// btn.addEventListener("click",function(e){
//     alert("hello world1")
// });
// btn.addEventListener("click",function(e){
//     alert("hello world2")
// });
