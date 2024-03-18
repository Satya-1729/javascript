let key = prompt("enter the key")
let value = prompt("enter the value")
sessionStorage.setItem(key,value)

console.log(`the value at ${key} is ${sessionStorage.getItem(key)}`)

if (key === 'red' || key === 'yellow'){
    sessionStorage.removeItem(key)
}

if (key == 0){
    sessionStorage.clear();
}
console.log(sessionStorage.length)
console.log(sessionStorage.key(1))


window.onstorage = (e)=>{
    alert("changed")
    console.log(e)
}