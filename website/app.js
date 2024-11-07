// app.js

/* Global Variables */
const apiKey = '6efd5c9cae91bb105785f48a8194005d&units=imperial'; // OpenWeatherMap API Key -  REPLACE with your own key
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip='; // OpenWeatherMap API base URL

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = `${d.getMonth() + 1}.${d.getDate()}.${d.getFullYear()}`;

// Event listener for the generate button
document.getElementById('generate').addEventListener('click', performAction);

/* Function called by event listener */
async function performAction(e) {
    const zip = document.getElementById('zip').value;  // Get zip code from input field
    const feelings = document.getElementById('feelings').value; // Get user feelings from textarea

    // Basic input validation
    if (zip === '') {
        alert('Please enter a zip code.');
        return; // Stop execution if zip code is empty
    }

    try {
        // 1. Fetch weather data from OpenWeatherMap API
        const weatherData = await getWeatherData(baseURL, zip, apiKey);

        if (weatherData) {
            // 2. POST data to the server
            await postData('/add', {
                temperature: weatherData.main.temp,
                date: newDate,
                userResponse: feelings,
            });

            // 3. Update UI with the retrieved data
            updateUI();
        }
    } catch (error) {
        console.error('Error in performAction:', error); // Catch errors during the process
        alert('An error occurred. Please try again later.'); // Show a user-friendly error message
    }
}

/* Function to GET Web API Data*/
const getWeatherData = async (baseURL, zip, apiKey) => {
    const res = await fetch(`${baseURL}${zip}&appid=${apiKey}`);
    try {
        const data = await res.json();
        // Check for API errors
        if (data.cod != 200) {  // OpenWeatherMap API returns a 'cod' of 200 for success
            throw new Error(data.message || "Weather data not found");
        }
        return data;
    } catch (error) {
        alert(`Error fetching weather data: ${error.message}`); // Show an alert to the user
        throw error; // Re-throw the error to be caught in performAction
    }
};

/* Function to POST data */
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        console.log('Server Response:', newData);
        return newData;
    } catch (error) {
        console.error('Error posting data:', error); // Log the error for debugging
        throw error; // Re-throw the error to be caught in performAction
    }
};

/* Function to GET Project Data and update UI */
const updateUI = async () => {
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        // Update HTML elements with retrieved data
        document.getElementById('date').innerHTML = `Date: ${allData.date}`;
        document.getElementById('temp').innerHTML = `Temperature: ${Math.round(allData.temp)}°F`;
        document.getElementById('content').innerHTML = `Feelings: ${allData.feel}`;
    } catch (error) {
        console.error('Error updating UI:', error); // Log the error for debugging
        alert("Error updating the UI. Please try again."); // Alert the user
    }
};