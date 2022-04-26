import {API_KEY} from '../../secrets.js';


let availableAmount = document.getElementById("available-amount");
let unsettled = document.getElementById("unsettled-amount");

window.onload = ()=>{
    let options = {
        method : 'GET',
        headers : {
            'Accept' : 'application/json',
            'Authorization' : `Bearer ${API_KEY}`
        }
    };

    let fetchResponse = fetch("https://api-sandbox.circle.com/v1/businessAccount/balances",options);

    let dataAv = "";

    fetchResponse.then(res=>
        res.json()).then(resData=>{
            console.log(resData);
            resData.data.available.forEach(details => {

                dataAv += `<div class="row gx-3">
                                <div class="col-12">
                                    <div class="d-flex flex-column">`
                dataAv += "<div class='available-amount-block'>";
                dataAv += `<h3>` + details.amount + " " + details.currency +`</h3>`;
                dataAv += `</div>`;
                
                dataAv += ` </div>
                                </div>
                            </div>`;


                

            });
            availableAmount.innerHTML = dataAv;
        })

}

