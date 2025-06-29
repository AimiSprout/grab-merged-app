// index.js
const express = require('express');
const dotenv = require('dotenv');
const app = express();

// Load environment variables from .env
dotenv.config();

const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json()); // For parsing JSON in requests

// ROUTES
const week04Routes = require('./routes/week04');
app.use('/week04', week04Routes);

// Optional: Add week06 and week07 later
// const week06Routes = require('./routes/week06');
// const week07Routes = require('./routes/week07');
// app.use('/week06', week06Routes);
// app.use('/week07', week07Routes);

// Root route
app.get('/', (req, res) => {
  res.send('🚀 Welcome to Grab Merged App!');
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
