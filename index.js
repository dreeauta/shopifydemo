const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const crypto = require('crypto');
const cookie = require('cookie');
const nonce = require('nonce');
const querystring = require('querystring');
const request = require('request-promise');

const apiKey = process.env.SHOPIFY_API_KEY;
const apiSecret = process.env.SHOPIFY_API_SECRET;
const scopes = 'read_products';
const forwardingAddress = "http://127.0.0.1:4040";


app.get('/', (req,res) => {
  const shop = req.query.shop;

  
})

app.listen(4000, () => {
  console.log('example app listening on port 4000');
})
