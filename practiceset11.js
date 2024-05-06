/*create a javascript class to create a complex number create a 
constructor to set the real and the complex part*/
class complex{
    constructor(real,imag){
        this._real=real
        this._imag=imag
    }
    complex_number(){
        alert(`${this.real} + i ${this.imag}`)
    }
    add(num){
        this.real = this.real + num.real
        this.imag = this.imag + num.imag
    }

    get real(){
        return this._real

    }
    get imag(){
        return this._imag
    }
    set real(new_real){
        this._real = new_real

    }
    set imag(new_imag){
        this._imag = new_imag

    }

}

let comp1 = new complex(4,5)
comp1.complex_number()
comp1.real = 10;
comp1.imag = 7;
comp1.complex_number()
let comp2 = new complex(20,30)
comp1.add(comp2)
comp1.complex_number()

/*create a class student from a class human overide a method
&see changes*/

class human{
    constructor(_name,gender,favfood){
        this._name = _name
        this.gender = gender
        this.favfood = favfood
    }

    Walk(){
        alert(`my name is ${this._name} and gender is ${this.gender}`)
    }

    Run(){
        alert(`${this._name} is running for his favourite food that is ${this.favfood}`)
    }

}

class student extends human{
    constructor( _name,  gender,favfood,enrol_no , favsub, hobby ){
        super( _name,  gender,favfood)
        this.enrol_no=enrol_no
        this.favsub=favsub
        this.hobby=hobby
    }
    Walk(){
        alert(`my name is ${this._name} and my gender is ${this.gender}. My enrollment number is ${this.enrol_no}, my favourite subject is ${this.favsub}`);
    }

   
    

}

let stu1=  new student("puranjay","male","hotdog","31","machinelearning","poking nose")
stu1.Run()


stu1.Walk()