import express from 'express';
import rescue from 'express-rescue';
import helmet from 'helmet';
import routers from './routers';
import errorHandler from './middlewares/errorHandler';

const app = express();

app.use(helmet());
app.use(express.json());

app.use('/products', rescue(routers.productsRouter));
app.use('/users', rescue(routers.usersRouter));
app.use('/orders', rescue(routers.ordersRouter));
app.use('/login', rescue(routers.loginRouter));
app.use(errorHandler);

export default app;
