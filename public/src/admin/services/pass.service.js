"use strict";


const API_URL = "http://localhost:8080/users/";

export async function sendPassRequest(email) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"email": email});

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    var response = await fetch(API_URL + "email", requestOptions);
    var message = await response.json();
    return message;
}

export async function resetPassword(id, password) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
        id: id,
        password: password
    });
    
    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    var response = await fetch(API_URL + "reset-password", requestOptions);
    var message = await response.json();
    return message;
}