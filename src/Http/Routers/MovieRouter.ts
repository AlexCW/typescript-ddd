import { CreateMovieController } from '../Controllers/Movie/CreateMovieController';
import { Router } from 'express'

const movieRouter: Router = Router();

movieRouter.post(
    '/', 
    (req, res) => new CreateMovieController().execute(req, res)
);

export { movieRouter }