/*write a program using prompt function to take input of age 
as value from the user and use the alert to tell him if he can drive1
*/
let func = () => {
    let age = Number.parseInt(prompt("enter your age"))
    if (age<0){
        console.error("you entered invalid age")
        func();
    }
    if(age<4){
        location.href = "https://google.com"

    }
    else{
        alert(age>18? "you can drive the car ": "you cannot drive the car ")

    }
}
func()
let watch = confirm("do you want to watch the prompt again")
if (watch){
    func()
}
else{
    alert("see you")
}

let color = prompt("enter the color of your choice")
document.body.style.background = color

