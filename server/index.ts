require('dotenv').config();
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import mongoose from 'mongoose';
import countriesRouter from './modules/countries/countries.router';

dotenv.config();

const app = express();

const { DB_PASSWORD, PORT } = process.env;

const DB_ULR = `mongodb+srv://devAdmin21:${DB_PASSWORD}@cluster0.milav.mongodb.net/countries?retryWrites=true&w=majority`;

app.use(cors());
app.use(helmet());
app.use(express.json());

// Routers
app.use('/api/countries', countriesRouter);

async function startApp() {
  try {
    await mongoose.connect(DB_ULR, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(PORT, () => {
      console.log(`⚡️[server] is running on port: [${PORT}]`);
    });
  } catch (error) {}
}

startApp();
