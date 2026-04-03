//How cookie is used to track session ID
//simulated server-side session store
const sessionStore={
    "abc123":{
    userID:101,
    userName:"Jeevan",
    role:"Student"          
    }
};
//simulated browser cookie value
const browserCookieSessionId="abc123";

const sessionData=sessionStore[browserCookieSessionId]
console.log("Server-side Sesion Data:",sessionData);
