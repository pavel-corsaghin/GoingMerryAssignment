export enum HttpCodes {
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEDN = 403,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}

export type MetaData = {
  httpCode: HttpCodes;
  message?: string;
};

export type ServerResponse<T extends any> = Promise<{
  data?: T;
  meta: MetaData;
}>;
