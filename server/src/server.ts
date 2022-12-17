import dotenv from 'dotenv';
dotenv.config();
import { config } from './config/config';

import { mongooseConnect } from './config/db';
mongooseConnect();

import app from './app';

app.listen(config.port, () => {
  console.log(
    'App listening on port: ' +
      config.port +
      '. ' +
      new Date().toLocaleTimeString(),
  );
});
