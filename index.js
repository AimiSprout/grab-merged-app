const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

const week04Routes = require('./routes/week04');
app.use('/week04', week04Routes);

app.get('/', (req, res) => {
  res.send("🚀 Welcome to Grab Merged App!");
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
