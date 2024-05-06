// creating the animal class
class Animal{
    constructor(name , legs,eats){
        this.name= name
        this.legs= legs 
        this.eats= eats
    }
    
    eat(){
        console.log(`Animal name is ${this.name}.it has ${this.legs} legs and eats ${this.eats}`)
    }
}

class type_of_eat extends Animal{
    herbivore(){
        console.log("herbivore")
    }
    carnivore(){
        console.log('carnivore')
    }

    ominvorse(){
        console.log(' ominvorse')
    }
}

let  type_of_eat1 = new type_of_eat("ape",2,"veg")
type_of_eat1.eat();
type_of_eat1.herbivore();