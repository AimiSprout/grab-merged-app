const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('📦 Week 04 project is here!');
});

module.exports = router;
