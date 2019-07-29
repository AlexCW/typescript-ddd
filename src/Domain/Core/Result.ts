export default class Result<T> {
  public success: boolean;

  public failure: boolean

  public error: string;

  private value: T;

  private constructor(success: boolean, error?: string, value?: T) {
    if (success && error) {
      throw new Error('InvalidOperation: A result cannot be successful and contain an error');
    }

    if (!success && !error) {
      throw new Error('InvalidOperation: A failing result needs to contain an error message');
    }

    this.success = success;
    this.failure = !success;
    this.error = error;
    this.value = value;

    Object.freeze(this);
  }

  public getValue() : T {
    if (!this.success) {
      throw new Error('Cant retrieve the value from a failed result.');
    }

    return this.value;
  }

  public static success<R>(value: R) : Result<R> {
    return new Result<R>(true, null, value);
  }

  public static fail<R>(error: string): Result<R> {
    return new Result<R>(false, error);
  }
}
