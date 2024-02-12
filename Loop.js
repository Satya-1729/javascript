// writing the program add natural numbers
sum = 0
let a = Number.parseInt(prompt("enter the number upto which u need additon"))
for (let i=1;i<=a;i++){
    console.log(i)
    sum +=i
    
}
console.log(sum)

// writing the program to calculate the factorial of the number
let a =1
let n = Number.parseInt(prompt("enter the value of n "))
for (i=1;i<=n;i++){
    console.log(i)
    a= a*i
}
console.log(a)

// for in loop 
const a = {
    satya :55,
    krishna:88,
    ajay:87,
    chitransh:75,
    dhreendra:70,
    ajay_gour:95
}
console.log(a["satya"])
console.table(a)
for (x in a){
    console.log(x + " marks " + a[x])
}

// for of loop
for(i of "satya"){
    console.log(i)
}
// while loop
let i=0;
while(i<10){
    console.log(i)
    i++;//this condition must be given to terminate the program or else it will crash your pc 
}
