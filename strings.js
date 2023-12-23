// its all about the strings
let a = "satya"
let b = 'ayush'
console.log(a[3])
console.log(a.length)

// template literal
let c = `b is friend of a`
console.log(c)
let d = `${b} is "friend" of ${a}`
console.log(d)

// escape sequence characters
let e = 'sat\'ya'
console.log(e)
console.log(e.length)
let f = 'my name is \n yo'
console.log(e,"\n","\t",f)
let g = "my name is \r is satya"
console.log(g)
// we will now learn about the strings method
let a = "Satya"
console.log(a.toUpperCase())
console.log(a.toLowerCase())
console.log(a.repeat(2))
console.log(a.length)
console.log(a.slice(1,3))
console.log(a.slice(2))

let b = "   satya brother"
let c = " is friend of krishna chitransh ajay dheerendra"
console.log(b.trim())
console.log(b.trim().replace("brother","Ajay gour "))
console.log(b.concat(c).trim())
console.log(escape(b))