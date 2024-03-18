console.log(document.cookies)
document.cookie = 'name = satya'//these are set calls
document.cookie = 'name2 = satyasoni'//these are set calls
console.log(document.cookie)
let key = prompt("enter your key ")
let value = prompt("enter your value ")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`//these are set calls
console.log(document.cookie)
decodeURIComponent('satya%3B%3B%3B%3D%3D')
document.cookie = 'user=bhai; path = /a; expires = Sunday, 17 March 2024, 16:59:58 GMT'