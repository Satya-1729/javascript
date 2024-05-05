// constructor 
class RailwayForm{
    constructor(name, trainno, Destaddress){
        this.name= name;
        this.trainno = trainno;
        this.address = Destaddress;
        console.log("Yeahh We did it!!")

    }
    Submit()
    {
        alert(this.name + " your railway form for destination  " +this.address+ "  is sumitted for train no : " + this.trainno  )
        
    }
    Cancel(){
        alert(`${this.name} your railway form for destination ${this.address} is cancelled for train no ${this.trainno}`  )

    }
}

// creating the form for Dev
let RailwayForm1 = new RailwayForm("Dev",21312,"blackhole , gali no.666666 mariana trence,475686")
// creating the form for Dhruv
let RailwayForm2 = new RailwayForm("Dhruv",21345,"wormhole , gali no.69696969696 antartica,471111")


RailwayForm1.Submit()
RailwayForm2.Submit()
RailwayForm1.Cancel()