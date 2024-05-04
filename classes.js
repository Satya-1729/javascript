// classes and object
class Railway_Form{
    Submit(){
        alert(this.name + " Form submitted  for the train " + this.train_no)
    }
    cancel(){
        alert(this.name + " Form cancelled  for the train " + this.train_no)

    }
    fill(name, train_no){
        this.name = name,
        this.train_no = train_no

    }
}
// making the new form for harry
let Rohan = new Railway_Form()
// filling details for rohan
Rohan.fill("Rohan ", 123345) 
// making the new form
let harry = new Railway_Form()
// filling details for harry
harry.fill("harry" , 123343) 

Rohan.Submit()
harry.Submit()
harry.cancel()


