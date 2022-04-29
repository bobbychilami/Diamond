
// // chrome.runtime.sendMessage({"open": "website"},()=>{
// //     alert("Hey");
// // })
// chrome.browserAction.getPopup({
//     details : "nihbaiopngbdfabojfdpacmhnjcfoj"});


// "chrome-extension://nihbaiopngbdfabojfdpacmhnjcfoj/src/index.html"
// window.open("chrome-extension://nihbaiopngbdfabojfdpacmhnjcfoj/src/index.html");

let mainContent = document.getElementById("main");

let injectCode = `

<div id="diamond-body">
<div class="body1">
  <h5>Use Diamond for payments, payouts and recharge your circle wallet</h5>
  <ul class="ulClass">
    <li><a href="" class="active" id="li0">Transfer from wallet</a></li>
    <li class="li1"><a href="" >Recharge your wallet</a>
      <div class="body2">
        <div class="container p-0">
          <div class="card px-2">
              <p class="h8 py-3">Enter Details</p>
              <div class="row gx-3" id="payment-form">
                  <div class="col-12">
                      <div class="d-flex flex-column">
                          <p class="text mb-1">Email</p> <input class="form-control mb-3" id="email" type="email" placeholder="Email">
                      </div>
                  </div>
                  <div class="col-12">
                      <div class="d-flex flex-column">
                          <p class="text mb-1">Mobile</p> <input class="form-control mb-3" id="mobile" type="text" placeholder="1234 5678 435678">
                      </div>
                  </div>
                  <div class="col-6">
                      <div class="d-flex flex-column">
                          <p class="number mb-1">Amount</p> <input class="form-control mb-3" id="amount" type="number" placeholder="Enter Amount">
                      </div>
                  </div>
                  <div class="col-6">
                      <div class="d-flex flex-column">
                          <p class="number mb-1">Source ID</p> <input class="form-control mb-3" id="id" type="text" placeholder="Enter your unique ID">
                      </div>
                  </div>
                  <div class="col-12">
                        <div class="d-flex flex-column">
                            <p class="text mb-1">CVV</p> <input class="form-control mb-3" id="CVV" type="number" placeholder="CVV">
                        </div>
                    </div>
                  <div class="col-12">
                      <div id="payment-button" class="btn btn-primary mb-3"> <span class="ps-3">$ Pay</span> <span class="fas fa-arrow-right"></span> </div>
                  </div>
                </div>
              </div>
          </div>
      </div></li>
    <li><a href="" id="li2">Pay to a blockchain address</a></li>
  </ul>
</div>

</div>`;

mainContent.innerHTML = injectCode + mainContent.innerHTML;
const style = document.createElement('style');
style.innerHTML = `
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css');

.card {
    max-width: 500px;
    margin: auto;
    color: black;
    border-radius: 20 px
}


#diamond-body{
  background-color: rgba(0, 63, 136, 0.723);
  padding: 20px;
  color: white;
}
.body2{
  display: none;
}
.ulClass{
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.ulClass li {
  float: left;
}

.ulClass li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  box-shadow: 5px 5px 5px rgba(0,0,0,0.5);
  border-radius: 5px;
}

.ulClass li a:hover {
  background-color: white;
  color : rgba(0, 63, 136, 0.723);
}

.li1:hover .body2{
  display: block;
  transition : 0.2s;
}`;
document.head.appendChild(style);



// function gotPopup(popupURL) {
//     console.log(popupURL)
//   }

//   let gettingPopup = chrome.action.getPopup({});
//   gettingPopup.then(gotPopup);