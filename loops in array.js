let arr = [12,24,54,67,89]
for(let i =0;i<arr.length ; i++){
    console.log(arr[i])
}
//for each
arr.forEach((element)=>{
    console.log(element*element)
})
// array from it creates array of the string
let name ="harry is the teacher"
let a = Array.from(name)
console.log(a)

// for of loop
for (let item of a){
    console.log(item) //it prints the data leaving the keys 
}

// for in
for (let item_1 in a){
    console.log(item_1)//it prints all the keys 
}


