import express from 'express';
import movieRouter from './Http/Routers/MovieRouter';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api/movies', movieRouter);

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, (err) => {
    if (err) {
      // eslint-disable-next-line no-console
      return console.error(err);
    }
    // eslint-disable-next-line no-console
    return console.log(`server is listening on ${port}`);
  });
}

module.exports = app;
