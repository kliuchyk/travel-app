require('dotenv').config();
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import countryRouter from './modules/countries/countries.router';

const app = express();

const PORT = process.env.SERVER_PORT;

app.use(cors());
app.use(helmet());
app.use(express.json());

// Routers
app.use('/countries', countryRouter);

app.listen(PORT, () => {
  console.log(`⚡️[server] is running on port: [${PORT}]`);
});
