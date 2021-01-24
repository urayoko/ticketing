import express from 'express'
import 'express-async-errors'
import { json } from 'body-parser'
import cookieSession from 'cookie-session'
import { errorHandler, NotFoundError, currentUser } from '@uratickets/common';
import { createChargeRouter } from './routes/new';

const app = express()
app.set('trust proxy', true)
app.use(json())
app.use(
    cookieSession({
      signed: false, 
      // secure: process.env.NODE_ENV !== 'test'  
      secure: false // still not using HTTPS atm
    })
);
app.use(currentUser); // make sure after cookieSession (after req.session is set)

app.use(createChargeRouter);

app.all('*', async (req, res) => {
    throw new NotFoundError();
});

app.use(errorHandler);

export { app };