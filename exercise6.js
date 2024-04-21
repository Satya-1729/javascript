// to create the the to do list
let fun = ()=>{

    let i = prompt("enter the value");
    i = Number.parseInt(i);
    t=0;
    while(t<i){
        var key = prompt("enter your key ");
        let value = prompt("enter your value");
        localStorage.setItem(key,value);
        console.log(`this is the key ${key} and this the is the value coressponding to the key ${localStorage.getItem(key)}`);
        t++;
    
    };

    let g = prompt("you want to delete the one of the todo then yes  or sort of delete all the todo and add new todos tell the answer in YES and if you want to add then ADD ");

    if(g === "yes"){
        
        let k = prompt("how much do you want to remove");
        k = Number.parseInt();
        let q = 0;
        while(q<k){
            localStorage.removeItem(key);
            
        }
    }
    else if(g === "YES"){
        localStorage.clear();
        fun();
    }
    else if(g ==="ADD"){
        fun();
    }
    else{
        alert('thank you')
    }
    
}
console.log("how much todo to add")
fun();



