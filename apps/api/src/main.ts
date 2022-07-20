/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { getAllPages, getPage } from './app/pages';

const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

app.get('/api/pages', (req, res) => {
  res.send(getAllPages());
});

app.get('/api/pages/:id', (req, res) => {
  res.send(getPage(req.params.id));
});

const port = process.env.port || 3333;

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
