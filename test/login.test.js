const fetch = require('node-fetch2');

it ("Should test validity of token", async ()=>{
    let token = "";

    const options = {
        method: 'POST',
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
            userName: "name43@gmail",
            password:"P@ssw0rd"
        })
    };
    const response = await fetch('https://dev.stedi.me/login',options);
    token = await response.text();
    expect(token.length).toBe(36);
});


it ("Should show failed password", async ()=>{
    let token = "";

    const options = {
        method: 'POST',
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
            userName: "name43@gmail",
            password:"P@ssw0rd1"
        })
    };
    const response = await fetch('https://dev.stedi.me/login',options);
    token = await response.text();
    expect(token.length).toBe(0);
});

it ("Should show incorrect username", async ()=>{
    let token = "";

    const options = {
        method: 'POST',
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
            userName: "doug",
            password:"P@ssw0rd1"
        })
    };
    const response = await fetch('https://dev.stedi.me/login',options);
    token = await response.text();
    expect(token.length).toBe(60);
});
