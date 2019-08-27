const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/16a296a45113ec4c37ede71ba64ef45c/' + latitude + ',' + longitude
    request({uri: url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather cerveza!', undefined)
        } else if (body.error, undefined) {
            callback('Unable to find location')
        } else{
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature +' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast