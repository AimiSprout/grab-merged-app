const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('📦 Week 06 project is here!');
});

module.exports = router;
