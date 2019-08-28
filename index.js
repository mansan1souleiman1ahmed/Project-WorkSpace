#!/usr/bin/env node

var prompt = require('prompt');
prompt.start();
var axios = require('axios');
const {
    getCode,
    getName
} = require('country-list');
//Getting the right year!
var date = new Date();
var year = date.getFullYear();

//Getting the name!
async function holidates(para1, para2) {
    para1 = process.argv[2];
    para2 = process.argv[3];

    ////////////////////////////////////////////////////////////////////////////


    if (para2 == undefined) {

        var countryCode = getCode(para1);

        switch (para1.toLowerCase()) {
            case 'uk':
                countryCode = "GB";

                break;
            case 'usa':
                countryCode = "US";
        }


        var URL = `https://date.nager.at/api/v2/publicholidays/ ${year}/${countryCode}`;


        //Fetching from the API! And sending back the response if promise resolved and writting a error message if there is an error!


        try {
            const response = await axios.get(URL);

            await response.data.forEach(element => {
                console.log(element.date + " ===> " + element.localName.toLowerCase());
            });

        } catch (err) {
            console.log("aaaaWe apologize, but we don't have the holidays for that country!");
        }


        /////////////////////////////////////////////////////////////////////////////


    } else if (para1.toLowerCase() == "united") {


        switch (para2.toLowerCase()) {
            case 'kingdom':
                countryCode = "GB";

                break;
            case 'states':
                countryCode = "US";

        }


        URL = `https://date.nager.at/api/v2/publicholidays/ ${year}/${countryCode}`;

        try {
            const response = await axios.get(URL);
            await response.data.forEach(element => {
                console.log(element.date + " ===> " + element.localName);
            });
        } catch (err) {
            console.log("We apologize, but we don't have the holidays for that country!");
        }
    } else {
        console.log("We apologize, but we don't have the holidays for that country!");
    }
}

holidates();