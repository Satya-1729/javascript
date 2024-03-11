// to create snake water and gun game

let alpha = ["S","W","G"]
let R = Math.floor(Math.random()*3)
let U = Number.parseInt(prompt("Enter the integer value between 0 to 2"))
alert(alpha[U])
alert(alpha[R])
if(alpha[U] == alpha[R])
{
    alert("draw")
}
else{
    if (alpha[0]>alpha[1] || alpha[2]>alpha[0] || alpha[1]>alpha[0]){
        alert("you Win")

    }
    else{
        alert("you lost")
    }
}