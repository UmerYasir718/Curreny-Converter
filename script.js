let amountentertoconvert
let calculatedamount
let onconvert
let inconvert

function change() {
    onconvert = document.getElementById("amount").value
    document.getElementById("amount").placeholder = onconvert
}

function changeInto() {
    inconvert = document.getElementById("Second").value
    document.getElementById("Result").placeholder = inconvert
}

function swapamount() {
    onconvert = document.getElementById("first")
    inconvert = document.getElementById("Second")
    amountentertoconvert = document.getElementById("amount")
    calculatedamount = document.getElementById("amount")
    let s = onconvert.value
    onconvert.value = inconvert.value
    inconvert.value = s
    amountentertoconvert = document.getElementById("amount").placeholder =onconvert.value
    calculatedamount = document.getElementById("Result").placeholder =inconvert.value
}

function convert(){
    onconvert = document.getElementById("first").value
    inconvert = document.getElementById("Second").value
    fetch(`https://v6.exchangerate-api.com/v6/cbf538c7195d2d426b2c9f92/latest/${onconvert}`)
    .then((res)=>{
        return res.json()
    })
    .then((data) => {
        inconvert = document.getElementById("Second").value
        amountentertoconvert = document.getElementById("amount")
        calculatedamount = document.getElementById("Result")
        let conversion_rates= data.conversion_rates[inconvert]
        document.getElementById("exchangerate").innerHTML=conversion_rates
        calculatedamount.value= amountentertoconvert.value*conversion_rates
    })
}
// function showRate(){
//     document.getElementsById("exchangerate")=conversion_rates
// }
function time(){
    let date = new Date()
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
    let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    date=date.toLocaleDateString(undefined, options)
    document.getElementById('time').innerHTML=" Last update at" +" "+ time +" "+ "on"+" "+ date
}

const lastUpdate=time()
document.getElementById('time').innerHTML= lastUpdate()