// use logical operator to find out whether the age of a person  lies between 10 & 20 
let a = Number.parseInt(prompt("whats your age: "))
if (a<0){
    console.log("you have entered the invalid age")
    
}
else {
    if (a<10){
        console.log("ok you are still a kid to learn to drive the car ")
        
    }
    else if (a>=10 && a<=20){
        console.log("you can learn to drive the car and make yourself a girlfriend that can make your day special")
    }
    else {
        console.log("you are married and have fun with your wife :)")
    }
}       
// the code that was correct is this and i made the mistake that is i used more knowledge of mine to create the program just i have to create the program that must tell if your age lies between 10 and 20 so remember this how much question given to you u must obey  that okk 
let b = Number.parseInt(prompt("whats your age buddy: "))
if (b>=10 && b<20){
    console.log("your age lies between 10 & 20 yrs ")
}
else{
    if (a<0){
        console.log("you've entered the invalid age that is not to be mentioned here you fool!! ")
        
    }
    else{
        console.log("you are not in this age group ")
    }
}
// demonstrate the switch case statements 
const a = prompt("Enter your favourite fruit name ")
switch (a){
    case "papaya":
        console.log("your favourite fruit helps your skin to nourish")
        break
    case "mango":
        console.log("your favourite fruit is favourite of most of the peoples around you ,it comes in summer season usually in BHARAT")
        break
    case "banana":
        console.log("your favourite fruit suggests that you are gym freak and you are health conscious!!")
        break
    case "guava":
        console.log("this fruit is not favourite for manyones but it is rich in iron that is very good for health ")
        break
    default:
        console.log("your favourite fruit is not mentioned here")
        
    
}