"use strict";

import store from 'store';

const API_URL = "http://localhost:8080/users/";

export async function login(user) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(user);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    let response = await fetch(API_URL + "login", requestOptions);
    let message = await response.json();
    return message;
}

export function setAuthenticated(value) {
    store.set("authenticated", value);
}

export function isAuthenticated() {
    return store.get("authenticated");
}

export function logout() {
    store.remove("user");
    store.remove('authenticated');
};

export function setCurrentUser(info) {
    store.set("user", info);
}

export function getCurrentUser() {
    return store.get('user');
}

export function forgotPassword() {

}