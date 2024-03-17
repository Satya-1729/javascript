const createtodo = async ()=>{
    let options = {
        method : 'post',
        headers : {
            'Content-type' : 'application/json'
        },
        body : JSON.stringify({
        title : 'harry2',
        body : 'bhai2',
        userId : 1100,
    })
        
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts',options)
    let response =await p.json()
    return response
}

const main_Func = async ()=>{
    
    let todor = await createtodo()
    console.log(todor)


}
main_Func()

      