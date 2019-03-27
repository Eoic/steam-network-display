const request = require('request');
const { API_KEY } = require('./config');
const HOST = "http://api.steampowered.com"

const REQUEST_TYPE = {
    FRIENDS: 'ISteamUser/GetFriendList/v0001/',
    PROFILE: 'ISteamUser/GetPlayerSummaries/v0002/',
    LEVEL: 'IPlayerService/GetSteamLevel/v1/'
}

function getFriendsList(userId) {
    return new Promise((resolve, reject) => {
        request.get(buildRequestString(userId, REQUEST_TYPE.FRIENDS, false), (error, _response, body) => {
            if(error) { 
                return reject(error);
            }
            
            try {
                resolve(JSON.parse(body))
            } catch (err) {
                reject(err)
            }
        });
    })

}

function getUserLevel(userId, callback) {
    request.get(buildRequestString(userId, REQUEST_TYPE.LEVEL, false), (error, _response, body) => {
        handleResponse(error, body, callback);
    })
}

function getUserProfile(userId, callback) {
    request.get(buildRequestString(userId, REQUEST_TYPE.PROFILE, true), (error, _response, body) => {
        handleResponse(error, body, callback);
    })
}

function buildRequestString(userId, requestType, pluralIds) {
    let append = (pluralIds) ? 's' : '';
    return `${HOST}/${requestType}?key=${API_KEY}&steamid${append}=${userId}`;
}

function handleResponse(error, body, callback) {
    if (error) {
        console.error("An error occoured: " + error);
        callback({});
    }
    else callback(body);
}

module.exports = {
    getFriendsList,
    getUserLevel,
    getUserProfile
}