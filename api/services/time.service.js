"use strict";


exports.getCurrentTime = () => {
    var d = new Date();
    return d.toLocaleTimeString();
}

exports.getCurrentDate = () => {
    var d = new Date();
    return d.toLocaleDateString();
}

exports.getCurrentDateTime = () => {
    var d = new Date();
    return d.toLocaleString();
}