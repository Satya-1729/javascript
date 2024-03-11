document.getElementById("google").addEventListener('click',function(e){
    let url = "https://www.google.com"
    window.location.href = "https://google.com"
    win.focus();
})


// create a bulb that usses toggle
setInterval(async function(e){
    document.querySelector(".bulb").classList.toggle("bulbcontainer")
},300)