const request = require('request')
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibWFuZHJldyIsImEiOiJjanpyZzdpYmEwazNnM2lyeWZhNTE3Zm8wIn0.CUx2Hbp5wBEkJV6PB2eVuA&limit=1'
    
    request({url: url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!')
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }

    })
}

module.exports = geocode

// geocode('Fremont', (error,data) => {
//     console.log('Error', error)
//     console.log('Latitude: ', data.latitude)
//     console.log('Longitude: ', data.longitude)
//     console.log('Location: ', data.location)
//     return data
// })