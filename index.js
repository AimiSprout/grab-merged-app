const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("✅ MongoDB connected from index.js");
});

app.use('/week04', require('./routes/week04'));
app.use('/week06', require('./routes/week06'));
app.use('/week07', require('./routes/week07'));

app.get('/', (req, res) => {
  res.send("🚀 Welcome to Grab Merged App!");
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
