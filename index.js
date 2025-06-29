// index.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected from index.js'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Middlewares
app.use(express.json()); // For parsing JSON in POST requests

// ROUTES
const week04Routes = require('./routes/week04');
app.use('/week04', week04Routes);

// Optional (later):
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
