export enum ErrorCodes {
  SUCCESS = 200,
  NOT_FOUND=404,
  INVALID_DATA=400,
  DATABASE_ERROR=1001,

}
export interface IResult<T> {
  status: {
    error: boolean;
    code: ErrorCodes;
  }
  message: string;
  result: T | null;
}

