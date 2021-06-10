import express from 'express';

import { connectToDatabase } from './helpers.mjs'

const app = express();

app.get('/', (request, response) => {
  response.send({
    message: 'Hello World',
  });
});

// Requires Node v14.3+
await connectToDatabase();

app.listen(3000);
