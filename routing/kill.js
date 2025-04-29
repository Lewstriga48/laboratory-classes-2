const express = require('express');
const logger = require('../utils/logger');

const router = express.Router();

router.get('/', (req, res) => {
  logger.getProcessLog('Server is shutting down.');
  res.send('Server is shutting down...');
  process.exit();
});

module.exports = router;
