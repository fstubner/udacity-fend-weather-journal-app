/* Global Variables */
// STUDENT-NOTE: It seems like really poor practice to ask students to
// include an API key like this. It should probably be included
// server-side via environment vars such as process.env.API_KEY.
const apiKey = '033ee79214834232a0dc0465ee678a3e&units=imperial';

// Create a new date instance dynamically with JS
let date = new Date();
let newDate =
    `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

document.getElementById('generate')
    .addEventListener('click', getWeatherByZip);

/**
* @description Requests the latest data from the
* /weather endpoint and updates the UI.
*/
async function getWeatherByZip() {
    const zip = document.getElementById('zip').value;
    await fetch(`http://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&zip=${zip}`)
        .then(response => {
            if (!response.ok) {
                throw `${response.status} (${response.statusText})`;
            }
            return response.json();
        })
        .then(async function (data) {
            console.log('Received updated data from openweathermap:\n', data);
            await updateWeather(data);
        })
        .catch(httpError => {
            console.error('An error occurred while fetchin openweathermap data:\n', httpError);
        })
}

/**
* @description Updates the projectData on server-side by posting
* to the /weather endpoint, and triggers a UI update.
* @param {JSON} weatherData JSON object containing weatherData.
*/
async function updateWeather(data) {
    let freshWeatherData = {
        date: newDate,
        temp: data.main.temp,
        content: document.getElementById('feelings').value
    };

    await fetch('/weather', {
        method: 'POST',
        mode: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(freshWeatherData)
    })
        .then(response => {
            if (!response.ok) {
                throw `${response.status} (${response.statusText})`;
            }
        })
        .then(await updateUI())
        .catch(httpError => {
            console.error('An error occurred while communicating with the web server:\n', httpError);
        });
}

/**
* @description Gets the latest data from the /weather endpoint
* and updates the UI.
*/
async function updateUI() {
    await fetch('/weather')
        .then(response => {
            if (!response.ok) {
                throw `${response.status} (${response.statusText})`;
            }
            return response.json();
        })
        .then(data => {
            console.log('Updating UI with data:\n', data)
            document.getElementById('date').innerHTML = data.date;
            document.getElementById('temp').innerHTML = `${Math.round(data.temp)}°F`;
            document.getElementById('content').innerHTML = data.content;
        })
        .catch(httpError => {
            console.error('An error occurred while communicating with the web server:\n', httpError);
        });
}