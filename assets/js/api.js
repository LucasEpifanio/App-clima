/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright lucasepifanio 2023 All rights reserved
 * @author codewithsadee <lucasepifaniodev@gmail.com>
 */

'use strict';

const api_key = "https://warped-water-501534.postman.co/workspace/My-Workspace~6ad89766-573d-4a47-80db-8e50cac7fd7a/request/28890624-1079ead3-7705-452d-bdc1-01c02536603c";

/**
 *  
  *@param {string} URL
  *@param {function} callback
  */

export const fetchData = function (URL, callback) {
    fetch(`${URL}&appid=${api_key}`)
        .then(res => res.json())
        .then(data => callback(data));
}

export const url = {
    currentWeather(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`
    },
    forecast(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`
    },
    airPollution(lat, lon) {
        return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`
    },
    reverseGeo(lat, lon) {
        return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
    },

    /** 
  *@param {string} query
  */

    geo(query) {
        return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
    }
}
