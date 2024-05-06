// overiding contuctor
class employee{
    constructor(name){
        this.name = name
        console.log(`employee- ${name} contructor has been detected`)
    }
    login(){
        console.log(`employee ${this.name} is logged in`)
    }
    
    logout(){
        console.log(`employee ${this.name} is logged out`)
    }
    requestleaves(leaves){
        console.log(`employee wants ${leaves} leaves`)
    }
}

class programmer extends employee{
    /* //auto generated when we don't write the constructor
    // constructor(...args){
    //     super(...args)
    }*/ 

    /*constructor(name){
        this.name
        super(name)
    }  this throws this error:  Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    at new programmer*/

    constructor(name){
        super(name)
        console.log("yeahh its been fun")
    }

    requestcoffee(x){
        console.log(`employee has reqested ${x} coffee`)
    }
    // overiding the object
    requestleaves(leaves){
        console.log(`employee wants ${leaves+1} leaves`)
    }
}


let employee1 = new programmer("satya")
employee1.login()
employee1.requestleaves(6)