import { API_KEY, generateUUID } from '../../secrets.js';

var createWallet = document.getElementById("create-wallet");
const des = document.getElementById("description").value;
var body = document.getElementById("main-box");
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
                data += "<h5> Wallet ID: "+details.data.walletId+"</h5>";
                data += "<h5> Entity ID: "+details.data.entityId+"</h5>";
                data += "<h5> type ID: "+details.data.type+"</h5>";
                data += "<h5> description ID: "+details.data.description+"</h5>";
                body.innerHTML = data;
            }
        )
}