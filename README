# Weather Journal App

This project creates a web application that allows users to retrieve weather data based on their zip code and record their feelings about the weather. It uses the OpenWeatherMap API for weather information and stores the data on a local server.

## Table of Contents

* [Description](#description)
* [Features](#features)
* [Installation](#installation)
* [Usage](#usage)
* [Project Structure](#project-structure)
* [API Information](#api-information)
* [Dependencies](#dependencies)

## Description

The Weather Journal App is a simple web application built using Node.js, Express.js, and vanilla JavaScript. It allows users to input their zip code, record their feelings about the current weather, and retrieve weather information from the OpenWeatherMap API. The retrieved data (temperature, date, and user feelings) is then stored on a local server and displayed dynamically on the webpage.

## Features

* Retrieves weather data based on user-provided zip code.
* Allows users to input their feelings about the weather.
* Displays the date, temperature, and user's feelings on the page.
* Stores the data persistently on a local server.
* Uses asynchronous JavaScript for API calls and UI updates.
* Basic input validation for zip code.
* Improved error handling for API requests and UI updates.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AbdalrahmanOsama001/Weather-Journal-App.git  (replace with your repo URL)
   ```
2. **Navigate to the project directory:**
   ```bash
   cd weather-journal-app
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Obtain an API key:**
    * Create an account on [OpenWeatherMap.com](https://openweathermap.org/) and obtain an API key.
    * Replace `'6efd5c9cae91bb105785f48a8194005d&units=imperial'` in `app.js` with your actual API key.

## Usage

1. **Start the server:**
   ```bash
   node server.js
   ```
2. **Open the app in your browser:** `http://localhost:3000`
3. **Enter a zip code** in the input field.
4. **Write your feelings** in the textarea.
5. **Click the "Generate" button.**
6. The retrieved weather data and your feelings will be displayed on the page.


## Project Structure

* **`server.js`**: Sets up the server, handles API routes, and stores data.
* **`website/app.js`**: Contains client-side JavaScript for API calls and UI updates.
* **`website/index.html`**: The main HTML file for the application's user interface.
* **`website/style.css`**: Styles the application's appearance.

## API Information

This project uses the OpenWeatherMap API to fetch weather data. You will need a valid API key to use the service. The API documentation can be found here: [https://openweathermap.org/current](https://openweathermap.org/current)

## Dependencies

* **express:** Fast, unopinionated, minimalist web framework for Node.js.
* **cors:** Node.js package for enabling Cross-Origin Resource Sharing (CORS).
* **body-parser:** (Deprecated - Now included in Express.js) Node.js body parsing middleware. The functionality of `body-parser` is now built into Express.js using `express.json()` and `express.urlencoded()`.
