// overiding
class employee{
    constructor(name){
        this.name = name
        
    }
    login(){
        console.log(`employee ${this.name} is logged in`)
    }
    
    logout(){
        console.log(`employee ${this.name} is logged out`)
    }
    requestleaves(leaves){
        console.log(`employee wants ${leaves+1} leaves auto approval`)
    }
}

class programmer extends employee{
    requestcoffee(x){
        console.log(`employee has reqested ${x} coffee`)
    }
    // super keyword usage
    requestleaves(leaves){
        super.requestleaves(6)
        console.log(`One extra leave granted `)
    }
}


let employee1 = new programmer("satya")
employee1.login()
employee1.requestleaves(6)