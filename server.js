// server.js

// Setup empty JS object to act as endpoint for all routes
const projectData = {};

// Require Express to run server and routes
const express = require('express');
const cors = require('cors');

// Start up an instance of app
const app = express();

// Port where the server will run
const port = 3000;


// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies
app.use(express.json()); // Parse JSON bodies


// Initialize the main project folder
app.use(express.static('website')); // Serves static files from the 'website' directory


/* Routes */

// GET route to return projectData
app.get('/all', (req, res) => {
    res.send(projectData);
});


// POST route to add data to projectData
app.post('/add', (req, res) => {
    // Destructure request body for easier access
    const { temperature, date, userResponse } = req.body;

    // Validate received data - important for data integrity!
    if (!temperature || !date || !userResponse) {
        return res.status(400).send({ error: 'Missing required fields' }); // Send a 400 Bad Request error if any required field is missing.
    }

    // Update projectData  (Note: This overwrites existing data each time a POST request is received)
    projectData.temp = temperature;
    projectData.date = date;
    projectData.feel = userResponse;

    console.log('Received POST request:', projectData);  // Log the received data for debugging

    res.send({ message: 'Data received successfully', data: projectData });  // Send a success response including the received data
});


// Start the server
app.listen(port, () => {
    console.log(`Server running on localhost:${port}`);
});