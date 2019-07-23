import express from 'express';
import { movieRouter } from './Http/Routers/MovieRouter'

const app = express();
const port = 3000;

app.use('/movies', movieRouter)

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, err => {
    if (err) {
      return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
  });
}

module.exports = app;