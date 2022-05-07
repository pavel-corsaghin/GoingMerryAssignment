import { HttpCodes, MetaData } from './types/response';

export const isRequestSuccess = (meta: MetaData) => {
  return [HttpCodes.OK, HttpCodes.ACCEPTED, HttpCodes.CREATED].includes(
    meta.httpCode,
  );
};
