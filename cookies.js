console.log(document.cookies)
document.cookie = 'name = satya'
document.cookie = 'name2 = satyasoni'
console.log(document.cookie)
let key = prompt("enter your key ")
let value = prompt("enter your value ")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)
