const express = require('express');
const bodyParser = require('body-parser');
const { config } = require('dotenv')
const databaseConnect = require('./src/database/database');

config({ path: './src/config/config.env' })

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to the database
databaseConnect()

const PORT = process.env.PORT || 8000;
// Start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

