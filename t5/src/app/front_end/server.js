const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname))); // Serve static files from the current directory

const dataFilePath = path.join(__dirname, 'triage_data.json');

// Existing processOrder endpoint for creating new applications
app.post('/processOrder', (req, res) => {
    const newData = req.body; // This will include name, symptoms, severity, and hasAllergies

    // Step 1: Read existing data from the file (or initialize as an empty array)
    let existingData = [];
    if (fs.existsSync(dataFilePath)) {
        const fileContent = fs.readFileSync(dataFilePath, 'utf8');
        existingData = fileContent ? JSON.parse(fileContent) : [];
    }

    // Step 2: Create a new triage object
    const triageObject = {
        name: newData.name,         // Use the name field from the request
        symptoms: newData.symptoms,
        severity: newData.severity,
        hasAllergies: newData.hasAllergies,
        timestamp: newData.timestamp // Add the timestamp field
    };

    // Step 3: Add the new triage object to the existing array
    existingData.push(triageObject);

    // Step 4: Write the updated array back to the file
    fs.writeFileSync(dataFilePath, JSON.stringify(existingData, null, 2));

    res.json({ status: 'resolved', message: 'Data saved successfully!' });
});

// New endpoint for updating existing applications
app.post('/updateApplication', (req, res) => {
    const { name, data } = req.body;
    // Load the current triage data
    fs.readFile('triage_data.json', (err, fileData) => {
        if (err) {
            return res.status(500).json({ status: 'rejected', message: 'Error reading data' });
        }
        const applications = JSON.parse(fileData);
        const appIndex = applications.findIndex(app => app.name === name);
        if (appIndex !== -1) {
            // Update application data
            applications[appIndex] = data;
            fs.writeFile('triage_data.json', JSON.stringify(applications, null, 2), (err) => {
                if (err) {
                    return res.status(500).json({ status: 'rejected', message: 'Error writing data' });
                }
                res.json({ status: 'resolved' });
            });
        } else {
            res.status(404).json({ status: 'rejected', message: 'Application not found' });
        }
    });
});


// New endpoint for deleting applications
app.delete('/deleteApplication', (req, res) => {
    const { name } = req.body; // Get the name from the request body

    // Step 1: Read existing data from the file
    let existingData = [];
    if (fs.existsSync(dataFilePath)) {
        const fileContent = fs.readFileSync(dataFilePath, 'utf8');
        existingData = fileContent ? JSON.parse(fileContent) : [];
    }

    // Step 2: Find the index of the application to delete
    const appIndex = existingData.findIndex(app => app.name === name);

    // Step 3: Remove the application if it exists
    if (appIndex !== -1) {
        existingData.splice(appIndex, 1); // Remove the application from the array

        // Step 4: Write the updated array back to the file
        fs.writeFileSync(dataFilePath, JSON.stringify(existingData, null, 2));

        res.json({ status: 'resolved', message: 'Application deleted successfully!' });
    } else {
        res.json({ status: 'error', message: 'Application not found.' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Node.js server is running on http://localhost:${PORT}`);
});

app.post('/login', (req, res) => {
    const { username } = req.body; // Get the username from the request body
    const timestamp = new Date().toISOString(); // Get the current timestamp

    // Create login record
    const loginRecord = {
        username,
        timestamp
    };

    // Step 1: Read existing login history (or initialize as an empty array)
    let loginHistory = [];
    if (fs.existsSync('login_history.json')) {
        const fileContent = fs.readFileSync('login_history.json', 'utf8');
        loginHistory = fileContent ? JSON.parse(fileContent) : [];
    }

    // Step 2: Add new login record to the existing array
    loginHistory.push(loginRecord);

    // Step 3: Write updated login history back to the file
    fs.writeFileSync('login_history.json', JSON.stringify(loginHistory, null, 2));

    res.json({ status: 'resolved', message: 'Login recorded successfully!' });
});