const a = {
    satya :55,
    krishna:88,
    ajay:87,
    chitransh:75,
    dhreendra:70,
    ajay_gour:95
}
console.log(a["satya"])
console.table(a)//it reflects objects in a tabular form 
console.assert(55>5)//this will not throw any error
console.assert(5>55)//this will throw an error
// console.warn("it shows warning")
console.error("it will show the error")//this all will show in browser console
console.info("this will show info")
console.time("for loop time")
for(let i=0;i<100;i++){
    console.log(200+i)
}
console.timeEnd("for loop time")

console.time("while loop time")
let i=0
while(i<101){
    console.log(200+i)
    i++;

}
console.timeEnd("while loop time")

