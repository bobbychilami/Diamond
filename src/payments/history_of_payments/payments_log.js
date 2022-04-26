import {API_KEY} from '../../secrets.js';

window.onload = ()=>{

    let payments_data = document.getElementById("get-payments-log");

    let options = {
        method : 'GET',
        headers : {
            'Accept' : 'application/json',
            'Authorization' : `Bearer ${API_KEY}`
        }
    };
    let fetchResponse = fetch("https://api-sandbox.circle.com/v1/payments",options);

    let data = "";
    
    
    fetchResponse.then(res=>
        res.json()).then(d=>{
            console.log(d.data);
            d.data.forEach(details => {
                data += '<div class = "payment-body">'
                data += `<h5>Payment ID: `+ details.id + `</h5>`;

                data += `<h5>Amount : `+ details.amount.amount +` `+ details.amount.currency + `</h5>`;
                if(details.fees)
                data += `<h5>Fees : `+ details.fees.amount +` `+ details.fees.currency + `</h5>`;

                data += `<h5>Status : ` + details.status +`</h5>`;
                data += "</div>";
            });
            
            payments_data.innerHTML = data;
        }
    );    
}