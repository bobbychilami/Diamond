import { API_KEY, generateUUID,getJSessionId } from '../../secrets.js';
var createWallet = document.getElementById("create-btn");

createWallet.onclick = ()=>{
    var body = document.getElementById("main-box");
    let encryptData = document.getElementById("CVV").value + "" + document.getElementById("card-number").value;
    console.log(encryptData);
    // encryptData = btoa(unescape(encodeURIComponent(encryptData)));
    var base64 = {_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
    encryptData = base64.encode(encryptData);
    // encryptData = encryptData.toString("base64");
    console.log(encryptData);
    console.log(atob(decodeURIComponent("LS0tLS1CRUdJTiBQR1AgTUVTU0FHRS0tLS0tCgp3Y0JNQTBYV1NGbEZScFZoQVFmL2J2bVVkNG5LZ3dkbExKVTlEdEFEK0p5c0VOTUxuOUlRUWVGWnZJUWEKMGgzQklpRFNRU0RMZmI0NEs2SXZMeTZRbm54bmFLcWx0MjNUSmtPd2hGWFIrdnNSMU5IbnVHN0lUNWJECmZzeVdleXlNK1JLNUVHV0thZ3NmQ2tWamh2NGloY29xUnlTTGtJbWVmRzVaR0tMRkJTTTBsTFNPWFRURQpiMy91eU1zMVJNb3ZiclNvbXkxa3BybzUveWxabWVtV2ZsU1pWQlhNcTc1dGc1YjVSRVIraXM5ckc0cS8KMXl0M0FOYXA3UDhKekFhZVlyTnVNZGhGZFhvK0NFMC9CQnN3L0NIZXdhTDk4SmRVUEV0NjA5WFRHTG9kCjZtamY0YUtMQ01xd0RFMkNVb3dPdE8vMzVIMitnVDZKS3FoMmtjQUQyaXFlb3luNWcralRHaFNyd3NKWgpIdEphQWVZZXpGQUVOaFo3Q01IOGNsdnhZVWNORnJuNXlMRXVGTkwwZkczZy95S3loclhxQ0o3UFo5b3UKMFVxQjkzQURKWDlJZjRBeVQ2bU9MZm9wUytpT2lLall4bG1NLzhlVWc3OGp1OVJ5T1BXelhyTzdLWTNHClFSWm8KPXc1dEYKLS0tLS1FTkQgUEdQIE1FU1NBR0UtLS0tLQo")));
    let expMonth = document.getElementById("month").value;
    console.log(expMonth);
    let options = {
        method : 'POST',
        headers : {
            'Accept' : 'application/json',
            'Authorization' : `Bearer ${API_KEY}`,
            'Content-Type' : 'application/json'
        },
        body : {
            idempotencyKey : "ba943ff1-ca16-49b2-ba55-1057e70ca5c7",
            encryptedData : encryptData,
            billingDetails : {
                name : document.getElementById("name").value,
                city : document.getElementById("city").value,
                country : document.getElementById("country").value,
                district : document.getElementById("district").value,
                line1 : document.getElementById("address1").value,
                line2 : document.getElementById("address2").value,
                postCode : document.getElementById("postal-code").value,
            },
            expMonth : expMonth.substring(6,7),
            expYear : expMonth.substring(0,4),
            metadata : {
                email : document.getElementById("email").value,
                phoneNumber : document.getElementById("phone").value,
                sessionId : getJSessionId(),
                ipAddress : ""
            }
        }
    }
    fetch('https://api.ipify.org/?format=json')
    .then(response => response.json()).then(data=>{
        options.body.metadata.ipAddress = data.ip;
    })
     
    let fetchResponse = fetch('https://api-sandbox.circle.com/v1/cards',options);

    console.log(options);
    fetchResponse.then(res=>
        res.json()).then(
            details=>{
                let data = "";
                data += details.data;
                console.log(details.data);
                body.innerHTML = data;
                
            }
        )
}