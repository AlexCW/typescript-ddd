import { BaseController } from '../BaseController';

class CreateMovieController extends BaseController {
  protected async executeImpl(): Promise<void | any> {
    try {
      return this.handleSuccess();
    } catch (err) {
      return this.handleInternalServerError(err.toString());
    }
  }
}

export { CreateMovieController };
