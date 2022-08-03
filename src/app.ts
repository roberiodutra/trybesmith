import express from 'express';
import rescue from 'express-rescue';
import helmet from 'helmet';
import routers from './routers';

const app = express();

app.use(helmet());
app.use(express.json());

app.use('/products', rescue(routers.productsRouter));

export default app;
