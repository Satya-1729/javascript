// // create an array of numbers and take inputs from user to add numbers to this array
// let n = Number.parseInt(prompt("enter the numbers to be added to array"))
// let a = []
// for (let i =0;i<n;i++){
//     a[i] = Number.parseInt(prompt("enter the data that you want to put "))
//     console.log (a[i])
// }
// console.log(a)
// let g = a.reduce((p,q)=>{
//     return p+q
// })
// console.log (g)

// // by harry
// let arr = [1,2,3,4,5,6,7,8,9]
// let a = Number.parseInt(prompt("enter the number "))
// arr.push(a)
// console.log(arr)

// // keep adding numbers to array until 0 is added to the array
// let n = Number.parseInt(prompt("enter the number upto which loop has to be executed "))
// let arr = [1,2,3,4,5,6,7,8,9]
// for(let i = 0; i<n; i++){ 
//     let a = Number.parseInt(prompt("enter the number "))
//     if (a!==0){
//         arr.push(a)
//     } 
//     else{
//         break;
//     }
    
// }
// console.log(arr)

// // filter for numbers divisible by 10 from a given array 
// let d = [20,40,60,4,32,867,89,90,54,]
// let m = d.filter((element)=>{
//     return element%10==0
// })
// console.log(d)
// console.log(m)

// create an array of square if given numbers
let arr1 = [1,2,3,4,5,6,7,8,9]
let m = arr1.map((element1)=>{
    return element1*element1
})
console.log(m)