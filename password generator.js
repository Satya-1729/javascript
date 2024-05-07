/*create a javascript program capable of generating a password which contain atleast one lowercase,
one uppercase and one special characters create a password*/

class password{
    constructor(_password ){
        this._password  = _password;
    }

    character(){
        let letter = []
        for(let i =33; i<=122; i++){
            letter.push(String.fromCharCode(i))
        }
        let special = letter.slice(0,32)
        let capital = letter.slice(32,58)
        let small = letter.slice(64,97)
        console.log(capital,"\n")
        console.log(small,"\n\n\n")
        console.log(special,"\n\n\n")
        let passarray = Array.from(this.password)
        console.log(passarray)
        for(let i = 0; i<=passarray.length;i++){
            for(let j =0 ; j<=special.length;j++){
                if(passarray[i] == special[j]){
                    console.log("yes")
            }
            }
            for(let k =0 ; k<=special.length;k++){
                if(passarray[i] == special[k]){
                    console.log("yes")
                }
                
            }
            for(let l =0 ; l<=special.length;l++){
                if(passarray[i] == special[l]){
                    console.log('yes')
                }
                
        }
        
    }
}
let p1 = new password("satya")
p1.character()