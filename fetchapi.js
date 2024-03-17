let p = fetch("http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json")
p.then((value1)=>{
    console.log(value1.status)
    console.log(value1.ok)
    return value1.json()
}).then((value)=>{
    console.log(value)
})