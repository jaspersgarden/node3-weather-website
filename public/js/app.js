console.log('Clinet side javascript file is loaded..')

const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherform.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    messageOne.textContent = 'Loading...'
    fetch('/weather?address=' + location).then((response) => {
        response.json().then(({ forecast, location, error} = {}) => {
            if (error) {
                messageOne.textContent = error
                messageTwo.textContent = ''
            } else {
                messageOne.textContent = location
                messageTwo.textContent = forecast.description + '. It is currently ' + forecast.tempurature + ' degrees out with ' + forecast.clouds + '% cloud cover. A high tempurature of ' + forecast.temphi + ' degrees, and a low tempurature of ' + forecast.templo + ' degrees. Windspeed is ' +  forecast.windspeed + ' mph.'
            }
        })
    })
})