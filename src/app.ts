import express from 'express';

const app = express();

app.use(express.json());

app.use('/products');

export default app;
