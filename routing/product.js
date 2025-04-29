const express = require('express');
const path = require('path');
const fs = require('fs');
const { STATUS_CODE } = require('../utils/status-code');
const renderNewProductPage = require('../views/renderNewProductPage');

const router = express.Router();

// GET /product/add
router.get('/add', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/add-product.html'));
});

// POST /product/add
router.post('/add', (req, res) => {
  const productName = req.body.product;

  fs.writeFile('product.txt', productName, (err) => {
    if (err) {
      console.error('Error saving product:', err);
      return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).send('Internal Server Error');
    }

    res.redirect(STATUS_CODE.FOUND, '/product/new');
  });
});

// GET /product/new
router.get('/new', (req, res) => {
  fs.readFile('product.txt', 'utf-8', (err, data) => {
    if (err || !data) {
      return res.send(renderNewProductPage('No product found.'));
    }
    res.send(renderNewProductPage(data));
  });
});

module.exports = router;
