// static method
class Animal{
    constructor(name,legs,color){
        this.name = Animal.capitalize(name) //this works in capitalizing the first character and rest lower
        this.legs = legs
        this.color = color
    }
    Walk(){
        alert(`${this.name} walks on ${this.legs} legs and its common color found is ${Animal.capitalize(this.color)}`)
        // alert(`${Animal.capitalize(this.name)} walks on ${this.legs}`) \\this also works different method to use the capitalize object
    }

    static capitalize(name){
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    }
}

//this also works in capitalizing the first character and rest lower
// let Animal1 = new Animal(Animal.capitalize("horse"),4,"milK WhITe") 
let Animal2 = new Animal("apE",4,"brown") 
// Animal1.Walk()
Animal2.Walk()