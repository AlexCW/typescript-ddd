import * as express from 'express';

const enum responseCodes {
  HTTP_OK = 200,
  HTTP_INTERNAL_SERVER_ERROR = 500
}

export abstract class BaseController {
  protected req: express.Request;

  protected res: express.Response;

  protected abstract executeImpl(): Promise<void | any>;

  public execute(req: express.Request, res: express.Response): void {
    this.req = req;
    this.res = res;

    this.executeImpl();
  }

  protected handleSuccess() {
    return this.res.status(responseCodes.HTTP_OK).json({ message: 'test' });
  }

  protected handleInternalServerError(error: Error) {
    return this.res.status(responseCodes.HTTP_INTERNAL_SERVER_ERROR).json({
      message: error.toString(),
    });
  }
}
