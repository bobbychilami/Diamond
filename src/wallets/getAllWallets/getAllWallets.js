import {API_KEY} from '../../secrets.js';


let availableAmount = document.getElementById("wallets");

window.onload = ()=>{
    let options = {
        method : 'GET',
        headers : {
            'Accept' : 'application/json',
            'Authorization' : `Bearer ${API_KEY}`
        }
    };

    let fetchResponse = fetch("https://api-sandbox.circle.com/v1/wallets",options);

    let dataAv = "";

    fetchResponse.then(res=>
        res.json()).then(resData=>{
            console.log(resData);
            resData.data.forEach(details => {
                console.log(details);
                dataAv += `<div class="row gx-3">
                                <div class="col-12">
                                    <div class="d-flex flex-column">`
                dataAv += "<div class='available-amount-block'>";
                dataAv += `<h3>`+"Wallet ID: " + details.walletId +`</h3>`;
                dataAv += `<h3>`+"Entity ID: " + details.entityId +`</h3>`;
                dataAv += `<h3>`+"Type: " + details.type +`</h3>`;
                dataAv += `<h3>`+"Description: " + details.description +`</h3>`;
                if(details.balances[0] != null)
                dataAv += `<h3>`+"Balances: " + details.balances[0].amount +`USD</h3>`;

                dataAv += `</div>`;
                
                dataAv += ` </div>
                                </div>
                            </div>`;


                

            });
            availableAmount.innerHTML = dataAv;
        })

}

