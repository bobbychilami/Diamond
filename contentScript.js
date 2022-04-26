
// // chrome.runtime.sendMessage({"open": "website"},()=>{
// //     alert("Hey");
// // })
// chrome.browserAction.getPopup({
//     details : "nihbaiopngbdfabojfdpacmhnjcfoj"});


// "chrome-extension://nihbaiopngbdfabojfdpacmhnjcfoj/src/index.html"
// window.open("chrome-extension://nihbaiopngbdfabojfdpacmhnjcfoj/src/index.html");

const mainContent = document.getElementById("main");


mainContent.innerHTML = `<div id="transducer-body">
  <div class="things">
    <div class="content">
      <div class="arrow">
        <div class="curve"></div>
        <div class="point"></div>
      </div>
    </div> 
    <div class="content">
      <h1>Curved Arrow</h1>
    </div>
  </div>
</div>` + mainContent.innerHTML;

const style = document.createElement('style');
style.innerHTML = `
      .things > .content {
    float: left;
    width: 50%;
    height: 500px;
    -webkit-box-sizing: border-box; 
      -moz-box-sizing: border-box;    
      box-sizing: border-box;
    position: relative;
  }
  
  .things > .content h1 {
    font-family: 'Arial', sans-serif;
    text-transform: uppercase;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    position: absolute;
    height: 150px;
    color: #89323B;
  }
  
  /* Arrow */
  
  .arrow {
      position: relative;
    margin: 0 auto;
    width: 100px;
  }
  
  .arrow .curve {
      border: 2px solid #BE5F4B;
      border-color: transparent transparent transparent #BE5F4B;
      height: 360px;
      width: 1200px;
      border-radius: 230px 0 0 150px;
  }
  
  .arrow .point {
      position: absolute;
      left: 40px;
      top: 315px;
  }
  
  .arrow .point:before, .arrow .point:after {
      border: 1px solid #BE5F4B;
      height: 25px;
      content: "";
      position: absolute;
  }
  
  .arrow .point:before {
      top: -11px;
      left: -11px;
      transform:rotate(-74deg);
      -webkit-transform:rotate(-74deg);
    -moz-transform:rotate(-74deg);
    -ms-transform: rotate(-74deg);
  }
  
  .arrow .point:after {
    top: -20px;
      left: 5px;
      transform:rotate(90deg);
      -webkit-transform: rotate(90deg);
    -moz-transform:rotate(90deg);
    -ms-transform: rotate(90deg);
  }
    `;
document.head.appendChild(style);



// function gotPopup(popupURL) {
//     console.log(popupURL)
//   }

//   let gettingPopup = chrome.action.getPopup({});
//   gettingPopup.then(gotPopup);