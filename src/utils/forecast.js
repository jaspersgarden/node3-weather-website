const request = require('request')

const forecast = (lat, lon, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&appid=205cac154103183f0466cf9bd4a72262&units=imperial'

    request({url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather service')
        } else if (body.cod) {
            callback('error ' + body.cod + ': ' + body.message)
        } else {
            callback(undefined, {
                description: body.daily[0].weather[0].description,
                tempurature: body.current.temp,
                clouds: body.current.clouds
            })
        }
    })
}

module.exports = forecast