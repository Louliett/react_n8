"use strict";

export function validateEmail(email) {
    const email_pattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email_pattern.test(email)) {
        return null;
    } else if (email.trim() === "") {
        return "Email required.";
    } else {
        return "Invalid email.";
    }

}

export function validatePassword(password, registration) {
    //a password between 7 to 15 characters which contain at least one numeric digit and a special character
    const pass_pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;


    if(registration) {
        if (pass_pattern.test(password)) {
            return null;
        } else if (password.trim() === "") {
            return "Password required.";
        } else {
            return "The password must be between 7 to 15 characters and \n contain at least one numeric digit and a special character.";
        }
    } else {
        if (password.trim() !== "") {
            return null;
        } else {
            return "Password required.";
        }
    }
}

export function passwordsMatch(pass1, pass2) {
    pass1 = pass1.trim();
    pass2 = pass2.trim();

    if (pass1 === pass2) {
        return true;
    } else {
        return "Passwords don't match.";
    }
}

