export const API_KEY = "QVBJX0tFWTpiNDEyOTlmNjliMjJlMWY5ZmQ3MDkwNjMxZTJkZDVhMDpmOTJhMWMwYTQ0MDI4MTE5NzZhYWJjNjhjOWRkY2NkMA==";

export function generateUUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

export function getJSessionId(){
    
    return '_' + Math.random().toString(36).substr(2, 9);;
}