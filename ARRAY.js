let a = ["satya","soni",56,34,54,5,null,false]
console.log(a)
for (let i =0;i<a.length;i++){
    console.log(a[i])
    
}
let a = ["satya", "soni", 56, 34, 54, 5, null, false];
for (let i = 0; i < a.length; i++) {
    if (typeof a[i] === 'string') {
        console.log(a[i].toUpperCase());
    } else {
        console.log(a[i]);
    }
}
a[8] = 54 //like this we can add anything in an array
a[1] = "AIML branch is so good"// we can also replace the elements of array
console.log(a)
console.log(typeof a)

// array methods
let d = a.toString()//this will convert the array to string
console.log(d,typeof d)
let e = a.join("is")
console.log(e,typeof e)
let f = a.pop()//this will return the popped element from the array 
console.log(a,f,a.length)
let g = a.push("ayush")//this will return the lenght of the array
console.log(a,g,a.length)
let h = a.shift()//return the popped element from the array same work as pop()function but it pop element from front
console.log(a,h,a.length)
let k = a.unshift(65)//same as push but push the element from front
console.log(a,k,a.length)

// some more array methods
let arr = [1,43,5434,655,7,234,67,892,45]
delete arr[5]// while using delete it delete the given element but doesnt change the length of the array
console.log(arr)
let new_arr = [34,23,123,5,78,89,34]
let b = arr.concat(arr)//doesnt change the new array or old array
console.log(b)

arr.sort()//The output may seem unexpected because sort() converts the elements to strings and then compares their UTF-16 code unit values. Therefore, the sorting might not be numerical.it sorts alphabatecially also.
console.log(arr)

const compare=(a,b)=>{
    // return b-a;//for decending order
    return a-b;//for ascending order
}
console.log(arr.sort(compare))
// after the application of sort function arr gets sorted and doesnt change to its old form

console.log(arr)
arr.splice(3,4,2002,2003,224,342,23434)//in this 3 is the position from where you want to delete the element from the arrray and 4 is the number of element gets deleted from the position 3,and the rest elements that are written above there are the elements that gets added to the array in the position where the elements gets deleted 
console.log(arr)
arr.reverse()
console.log(arr)
let u =arr.slice(3)
console.log(u)
let y = arr.slice(4,7)
console.log(y)

let myArray = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Alice', age: 35 }
];
console.log(myArray[0].name); // Output: John
console.log(myArray[1].age); // Output: 25
