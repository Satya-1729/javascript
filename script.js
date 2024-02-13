alert("this is the alert, Write the value of a")
let a = prompt("write here the value of a : ","54")//here the 54 is default value taken by the user
a = Number.parseInt()
alert("type of a : " + (typeof a))
let Write = confirm("do you want to write to this page")

if(Write ){
    document.write(a)

}else{
    document.write("please allow me to write the value")
}
// alert("this is the alert, Write the value of a");
// let a = prompt("write here the value of a:", "54"); // here the 54 is the default value taken by the user
// a = Number.parseInt(a); // Parse the input value

// alert("type of a: " + (typeof a));

// let Write = confirm("do you want to write to this page");

// if (Write) {
//     document.write(a);
// } else {
//     document.write("please allow me to write the value");
// }
