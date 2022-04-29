import {generateUUID,API_KEY} from "../../secrets.js";
let selectButton = document.getElementById("selectButton");
let idKey = "ba943ff1-ca16-49b2-ba55-1057e70ca5c7";




selectButton.onclick=()=>{
    let chainbutton = document.getElementById("selectChain");
    let currencyBtn = document.getElementById("selectCurrency");
    
    let options = {
        method : 'POST',
        headers : {
            'Accept' : 'application/json',
            'Authorization' : `Bearer ${API_KEY}`,
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            "idempotencyKey": idKey,
            "currency": currencyBtn.value,
            "chain": chainbutton.value
        })
    }
    console.log(options);
    let fetchResponse = fetch('https://api-sandbox.circle.com/v1/businessAccount/wallets/addresses/deposit',options);
    let body2 = ""
    fetchResponse.then(res=>
        res.json()).then(
            details=>{
                
            }
        )
    
}
