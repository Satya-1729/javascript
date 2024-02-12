// // guessing the number
// let Random_number = Math.floor(Math.random()*101)
// let func = ()=>{
//     let Guessed_number = Number.parseInt(prompt("enter the number to be guessed : "))
//     for (let i = 0; i<100;i++){
//     if(Guessed_number !== Random_number){
//         if(Guessed_number > Random_number){
//             console.log("number is greater than Random_number ",Guessed_number-Random_number)
//         }
//         if(Guessed_number < Random_number){
//             console.log("number is smaller than Random number ",Random_number-Guessed_number)
//         }
//         return func();
        
//     }
//     else{
//         console.log("you guessed the correct number")
//         break;
//     }
        
//   }
// }
// func()
// solution2
let Random_number = Math.floor(Math.random() * 101);
let fun = ()=>{
    let Guessed_number ;
    while(true){
        Guessed_number = Number.parseInt(prompt("Enter the number to be guessed: "));
        if (!isNaN(Guessed_number) && Guessed_number >=1 && (Guessed_number) <=100){
            break;
        }
        else{
            console.log("you entered the invalid number please try again")
        }
    }
    console.log("you entered the number",Guessed_number)
    for (let i = 0; i < 100; i++) {
        if (Guessed_number !== Random_number) {
            if (Guessed_number > Random_number) {
                console.log("Number is greater than the random number",Guessed_number-Random_number);
            } else {
                console.log("Number is less than the random number",Random_number-Guessed_number);
            }
            // Guessed_number = Number.parseInt(prompt("Try again. Enter the number to be guessed: "));
            // // Guessed_number = Number.parseInt(prompt("Enter the number to be guessed: "));
            fun();
            return ;
    
        } else {
            console.log("Congratulations! You guessed the correct number:", Guessed_number);
            break;
    }
}
}
fun()
console.log("Game over."); // This line will be executed after the loop terminates