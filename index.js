#!/usr/bin/env node

var axios = require('axios');
var contrList = require('country-list');
var date = new Date();
var year = date.getFullYear();
/* console.log(year); */
var countryCode = 'BE';

var URL = `https://date.nager.at/api/v2/publicholidays/ ${year}/${countryCode}`;
/* 
axios.get(URL).then(function (response) {
    console.log(response);
}); */



async function logFetch(url) {
    try {
        const response = await axios.get(URL);
        /* console.log(await response.data) */
        await response.data.forEach(element => {
            console.log(element.date);
        });
    } catch (err) {
        console.log('fetch failed', err);
    }
}
logFetch();