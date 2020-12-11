"use strict";


const API_URL = "http://localhost:8080/addresses/";

//returns an array of address objects based on user id;
export async function getAddressByUserId(userId) {
    console.log(API_URL + userId, ' fetch');
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
    var response = await fetch(API_URL + userId, requestOptions);
    var message = await response.json();
    return message;
}