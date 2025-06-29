require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.log('❌ MongoDB Error:', err));

// Routes
const week04Routes = require('./routes/week04');
const week06Routes = require('./routes/week06');
const week07Routes = require('./routes/week07');

app.use('/week04', week04Routes);
app.use('/week06', week06Routes);
app.use('/week07', week07Routes);

app.get('/', (req, res) => {
  res.send('Welcome to Grab Merged App!');
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
