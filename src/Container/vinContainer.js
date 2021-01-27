import vinDecoder from 'vin-decode';
import React, {useState} from "react";
var unirest = require("unirest");


let bad=vinDecoder('JF1BPELUA4G0068660'); // will return false (currently checks only the length of VIN)
let split=vinDecoder('JF1BPELUA4G006866').split(); // will return object of codes from VIN
let decoded=vinDecoder('JF1BPELUA4G006866').decode();
console.log(bad, split, decoded, 'VIN SHIT')
export const VinContainer=()=> {
    let [number, setNumber] = useState(<td>none</td>)

    let onChange = (e) => {
        let value = e.target.value
        if (vinDecoder(value)) {
            let decoded = vinDecoder(value).decode()
            setNumber(decoded)
            let key=Object.keys(decoded)
            console.log(key)
            setNumber(key.map((name, i) => (
                <p style={{display:'inline'}} key={i}>
                      {name}:{decoded[name]} //
                </p>
            )))
        }else{
            console.log('error')
        }
    }

    var req = unirest("GET", "https://vindecoder.p.rapidapi.com/v1.1/decode_vin");

    req.query({
        "vin": "{JF1BPELUA4G006866}"
    });

    req.headers({
        "x-rapidapi-key": "ab4aa05647mshb4095111b4f0804p16f0e3jsn9ca9552cb589",
        "x-rapidapi-host": "vindecoder.p.rapidapi.com",
        "useQueryString": true
    });


    req.end(function (res) {
        if (res.error) throw new Error(res.error);

        console.log(res.body);
    });



    return (
        <div style={{marginTop:78}}>
            <input type='text' onChange={onChange} defaultValue='vin shit'/>
            {number}
        </div>
    )
}