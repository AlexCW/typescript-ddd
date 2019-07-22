import * as express from 'express'

export abstract class BaseController {
  protected req: express.Request;
  protected res: express.Response;
  private responseStatuses = {
    HTTP_OK: 200,
    HTTP_INTERNAL_SERVER_ERROR: 500
  };

  protected abstract executeImpl (): Promise<void | any>;

  public execute (req: express.Request, res: express.Response): void {
    this.req = req;
    this.res = res;

    this.executeImpl();
  }

  protected handleSuccess () {
    return this.res.status(this.responseStatuses.HTTP_OK).json({'message': 'test'});
  }

  protected handleInternalServerError (error: Error | string) {
    return this.res.status(this.responseStatuses.HTTP_INTERNAL_SERVER_ERROR).json({
      message: error.toString()
    })
  }
}