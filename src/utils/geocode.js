const request = require('request')

const geocode = (address, callback) => {
    const url = 'http://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiamFzcGVyc2dhcmRlbiIsImEiOiJjazk0ZnE0cmowY2xnM2VwZzE0ZGFlbjA0In0.j1yqJIilFFjf07U2guhIrA&limit=1'

    request({url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to location service')
        } else if (body.features[0]) {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        } else {
            callback('Unable to find location "' + address + '"')
        }
    })

}

module.exports = geocode