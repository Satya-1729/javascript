// higher order array methods
// map forms a new array and for each loop doesn't
let Arr = [23,54,56,7,false,"konichiwa","satya"]
let b =Arr.map((value,index,array)=>{
    console.log(value,index,array)
    return value,index,array
})
console.log(b)

// filter also returns the array
let Arr2 = [1,4,54,2,254,34]
let g = Arr2.filter((p)=>{
    return p>10
})
console.log(g)

// reduce function doesn't return necessarily an array
let Arr3 = [1,2,3,4,5,6,7,8,9,10]
let q = Arr3.reduce((p,q)=>{
    return p+q
})
console.log(q)