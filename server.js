// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require('body-parser');
// STUDENT-NOTE: Included body-parser, but apparently deprecated and
// no longer required with Express 4.16+
// https://stackoverflow.com/a/68127336/5359697
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static(`website`));

// Setup Server
const port = 8080;
app.listen(port, listening);

/**
* @description Runs if server started successfully.
*/
function listening() {
    console.log(`Server running on localhost:${port}`)
}

/**
* @description Returns the projectData JSON object.
* @param {express.Request} req Request made to endpoint.
* @param {express.Response} res Response object to respond.
* @returns {JSON} JSON object projectData.
*/
app.get('/weather', (req, res) => {
    let date = new Date();
    console.log(`localhost:${port} - - [${date.toLocaleDateString()} ${date.toLocaleTimeString()}] "GET\t/weather" 200`);
    res.send(projectData);
})

/**
* @description Updates the current projectData JSON object
* with the latest weather data.
* @param {express.Request} req Request made to endpoint.
* @param {express.Response} res Response object to respond.
* @returns {JSON} JSON object projectData.
*/
app.post('/weather', (req, res) => {
    let date = new Date();
    console.log(`localhost:${port} - - [${date.toLocaleDateString()} ${date.toLocaleTimeString()}] "POST\t/weather" 200`);
    projectData['date'] = req.body.date;
    projectData['temp'] = req.body.temp;
    projectData['content'] = req.body.content;
    res.sendStatus(200);
})