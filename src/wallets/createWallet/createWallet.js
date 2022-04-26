import { API_KEY, generateUUID } from '../../secrets.js';

var createWallet = document.getElementById("create-wallet");
const des = document.getElementById("description").value;
var body = document.getElementById("main-body");
createWallet.onclick = ()=>{
    let options = {
        method : 'GET',
        headers : {
            'Accept' : 'application/json',
            'Authorization' : `Bearer ${API_KEY}`
        },
        body : {
            idempotencyKey : generateUUID(),
            description : des
        }
    }

    let fetchResponse = fetch('https://api-sandbox.circle.com/v1/wallets',options);

    fetchResponse.then(res=>
        res.json()).then(
            details=>{
                let data = "";
                
            }
        )
}