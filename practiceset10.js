// // let url = "https://animechan.xyz/api/quotes/character?name=saitama"
// // let response = fetch(url)
// // response.then((value)=>{
// //     return value.json()
// // }).then((value1)=>{
// //     ihtml="";
// //     for(let item in value1){
// //         ihtml +=` 
// //             <div class="card" style="width: 22rem;">
// //             <img src="..." class="card-img-top" alt="...">
// //             <div class="card-body">
// //               <h5 class="card-title">${value1[item].anime}</h5>
// //               <p class="card-text">${value1[item].quote}</p>
// //               <a href="#" class="btn btn-primary">Go somewhere</a>
// //             </div>
// //         `;
        
// //     }''
// //     card-container.innerHTML = ihtml 
// // })

// let url = "https://animechan.xyz/api/quotes/character?name=saitama";
// let response = fetch(url);
// response.then((value) => {
//     return value.json();
// }).then((value1) => {
//     let ihtml = "";
//     for (let item in value1) {
//         ihtml +=` 
//             <div class="card" style="width: 22rem;">
//             <img src="..." class="card-img-top" alt="...">
//             <div class="card-body">
//               <h5 class="card-title">${value1[item].anime}</h5>
//               <p class="card-text">${value1[item].quote}</p>
//               <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//         `;
        
//     }
//     // card-containerinnerHTML == ihtml;
// });
let a = prompt("what is your note")
localStorage.setItem("note",a)
 
let p= localStorage.getItem("note")
console.log(p)
let q = setTimeout((value)=>{
    localStorage.removeItem("note")

},3000)
console.log(q)
