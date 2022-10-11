export interface IResponseBodyWithoutDataProperty {
  statusCode: number;
  message: string;
}

export interface IResponseBody<T = Record<string, any>> {
  statusCode: number;
  message: string;
  data: T;
}
