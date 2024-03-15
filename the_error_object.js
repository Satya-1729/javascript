try {
    console.log(harry)
}

catch(err){
    console.log(err.name)
    console.log(err.message)
    // console.log(err.stack)
}

// throwing custom error
try{
    let age = 189
    
    if (age>150){
        throw new ReferenceError("invalid age please write valid age")
    }
}
catch(err){
    console.log(err.name)
}

// finally clause
function harry(){
    try{
        console.log("harry is gopod coder")
        console.log(harry)
        return true
    }
    catch(err){
        console.log(err)

    }
    finally{
        console.log("this will run in any ways")
        // exit the file
        // close the file
        // run other file

    }
}
console.log(harry())
console.log("end")