// getters and setters method
class employee{
    constructor(name,empId){
        this._name = name
        this._empId = empId
    }

    About(){
        alert(`${this.name} is employee of my company and its employee Id is ${this.empId}`)
    }

    get name(){
        return this._name
    }

    get empId(){
        return this._empId
    }

    set name(New_name){
        this._name = New_name
    }

    set empId(New_id){
        this._empId = New_id
    }
}

let emp1 = new employee("rishi sahu","ninetylakhninetythousandninehundredninentynine")
emp1.name = "rishi sahu"
emp1.empId = "nnetyonelakh"
emp1.About()
console.log(emp1.name)

console.log(emp1 instanceof employee )