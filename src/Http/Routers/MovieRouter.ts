import { Router } from 'express';
import { CreateMovieController } from '../Controllers/Movie/CreateMovieController';

const movieRouter: Router = Router();

movieRouter.post(
  '/',
  (req, res) => new CreateMovieController().execute(req, res),
);

export { movieRouter };
