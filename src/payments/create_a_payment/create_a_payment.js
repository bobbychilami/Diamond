import { API_KEY, generateUUID,getJSessionId } from '../../secrets.js';

const btn = document.getElementById("payment-button");
// const form = document.getElementById("payment-form");
let userData = {
    idempotencyKey : "ba943ff1-ca16-49b2-ba55-1057e70ca5c7",
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
    verificationSuccessUrl: "https://www.example.com/3ds/verificationsuccessful",
    verificationFailureUrl: "https://www.example.com/3ds/verificationfailure",
    source : {
        id : "b8627ae8-732b-4d25-b947-1df8f4007a29",
        type : "card"
    },
    description : "Payment",
    encryptedData : ""
}



btn.addEventListener('click',()=>{
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let amount = document.getElementById("amount").value;

    userData.amount.amount = amount;
    userData.metadata.email = "satoshi@circle.com";
    userData.metadata.phoneNumber = mobile;
    fetch('https://api.ipify.org/?format=json')
    .then(response => response.json()).then(data=>{
        userData.metadata.ipAddress = data.ip;
    })
    userData.encryptedData = "UHVibGljS2V5QmFzZTY0RW5jb2RlZA=="
    userData.metadata.sessionId = "DE6FA86F60BB47B379307F851E238617";
        let options = {
        method : 'POST',
        headers : {
            'Accept' : 'application/json',
            'Authorization' : `Bearer ${API_KEY}`,
            'Content-Type' : 'application/json',
        },
        body : userData
    };
    console.log(options);
    let fetchResponse = fetch('https://api-sandbox.circle.com/v1/payments',options);

    fetchResponse.then(res=>
        res.json()).then(details=>{
            console.log(details.data);
        });
})

