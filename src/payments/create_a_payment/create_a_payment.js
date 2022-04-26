import { API_KEY, generateUUID } from '../../secrets.js';

const btn = document.getElementById("payment-button");
// const form = document.getElementById("payment-form");
let userData = {
    idempotencyKey : generateUUID(),
    keyId : "key1",
    metadata : {
        sessionId : "",
        ipAddress : "",
        email : "",
        phoneNumber : ""
    },
    amount : {
        amount : "",
        currency : "USD"
    },
    autoCapture : true,
    verification : "none",
    verificationSuccessUrl : "",
    verificationFailureUrl : "",
    source : {
        id : "",
        type : "card"
    },
    description : "Payment",
    channel : ""
}

let options = {
    method : 'POST',
    headers : {
        'Accept' : 'application/json',
        'Authorization' : `Bearer ${API_KEY}`,
        'Content-Type' : 'application/json',
    },
    body : ""
}

btn.addEventListener('click',()=>{
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let amount = document.getElementById("amount").value;

    userData.amount.amount = amount;
    userData.metadata.email = email;
    userData.metadata.phoneNumber = mobile;

    options.body = JSON.stringify(userData);

    console.log(userData);
    let fetchResponse = fetch('https://api-sandbox.circle.com/v1/payments',options);

    fetchResponse.then(res=>
        res.json()).then(details=>{
            console.log(details.data);
        });
})

