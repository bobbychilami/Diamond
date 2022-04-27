import { API_KEY, generateUUID } from '../../secrets.js';
var createWallet = document.getElementById("create-btn");

createWallet.onclick = ()=>{
var body = document.getElementById("main-box");
let encryptData = document.getElementById("CVV").value + "" + document.getElementById("card-number").value;
console.log(encryptData);
encryptData = btoa(unescape(encodeURIComponent(encryptData)));
// encryptData = encryptData.toString("base64");
console.log(encryptData);

let expMonth = document.getElementById("month").value;
console.log(expMonth);
    let options = {
        method : 'POST',
        headers : {
            'Accept' : 'application/json',
            'Authorization' : `Bearer ${API_KEY}`
        },
        body : {
            idempotencyKey : generateUUID(),
            encryptedData : encryptData,
            billingDetails : {
                name : document.getElementById("name").value,
                city : document.getElementById("city").value,
                country : document.getElementById("country").value,
                district : document.getElementById("district").value,
                line1 : document.getElementById("address1").value,
                line2 : document.getElementById("address2").value,
                postCode : document.getElementById("postal-code").value,
            },
            expMonth : expMonth
        }
    }

    // let fetchResponse = fetch('https://api-sandbox.circle.com/v1/wallets',options);

    console.log(options);
    // fetchResponse.then(res=>
    //     res.json()).then(
    //         details=>{
    //             let data = "";
    //             data += details.data;
    //             body.innerHTML = data;
    //         }
    //     )
}