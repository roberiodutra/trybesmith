import express from 'express';

const rescue = require('express-rescue');
const helmet = require('helmet');
const morgan = require('morgan');
const {
  productsRouter,
} = require('./routers');

const app = express();

app.use(helmet());
app.use(morgan('common'));
app.use(express.json());

app.use('/products', rescue(productsRouter));

export default app;
