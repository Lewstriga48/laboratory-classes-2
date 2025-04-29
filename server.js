const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./utils/logger');
const productRoutes = require('./routing/product');
const logoutRoutes = require('./routing/logout');
const killRoutes = require('./routing/kill');
const homeRoutes = require('./routing/home');
const { STATUS_CODE } = require('./utils/status-code');
const { PORT } = require('./config');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  logger.getInfoLog(req.method, req.url);
  next();
});

app.use('/product', productRoutes);
app.use('/logout', logoutRoutes);
app.use('/kill', killRoutes);
app.use('/', homeRoutes);

app.use((req, res) => {
  logger.getErrorLog(`Page not found: ${req.url}`);
  res.status(STATUS_CODE.NOT_FOUND).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
