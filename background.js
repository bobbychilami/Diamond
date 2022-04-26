chrome.runtime.onMessage.addListener((req,sender,cb)=>{
    window.open("chrome-extension://nihbaiopngbdfabojfdpacmhnjcfoj/src/index.html")
})