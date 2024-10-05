fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=f30c6df67457499e8290345a3c700fe9").then((result) => {
   console.log(result)
    let mydate = result.json()
    return mydate; 
}).then((data) =>{
    console.log(data.rates["EGP"]);
    console.log(data.rates["SAR"]);
    let value = document.querySelector(".amount") ;
    let egpValue = document.querySelector(".egt") ;
    let saralue = document.querySelector(".sar") ;
    egpValue.innerHTML =Math.round( value.innerHTML * data.rates["EGP"]) ;
    saralue.innerHTML = Math.round(value.innerHTML * data.rates["SAR"] )


})