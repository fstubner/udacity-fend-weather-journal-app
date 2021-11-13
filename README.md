# Weather Journal App Project

A weather journal app that demonstrates knowledge of using Web APIs and Asynchronus JavaScript programming.

## Table of Contents

- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Overview of Key Dependencies](#overview-of-key-dependencies)
- [Getting Started](#getting-started)

## Project Structure

```
.
├── website
│   ├── js
│   │   └── app.js
│   ├── css
│   │   └── style.css
│   ├── images
│   │   └── favicon.ico
│   └── index.html
├── server.js
├── package.json
└── README.md

```

## Tech Stack

Express for the server-side. Vanilla JavaScript, HTML, and CSS for the frontend. There is no persistent data store. All data is stored in memory.

## Overview of Key Dependencies

- [Node.js](https://nodejs.org/en/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Express.js](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
- [body-parser](https://www.npmjs.com/package/body-parser) (deprecated) - Node.js body parsing middleware.
- [cors](https://www.npmjs.com/package/cors) - CORS is a Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

## Getting Started

1. Ensure you have [Node.js](https://nodejs.org/en/download/) installed
2. Clone this repository by navigating to a suitable directory and running:
   ```bash
   git clone https://github.com/fstubner/udacity-fend-weather-journal-app.git
   ```
3. Navigate to the root directory `udacity-fend-weather-journal-app` and run:
   ```bash
   npm install
   ```
4. To start the backend server, run:

   ```bash
   node server.js
   ```

   > _note:_ By default, the built-in web server will be available under `localhost:8080`.
