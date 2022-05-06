import { Beer } from './types/breweries';
import { secureInstance } from './config';
import { ServerResponse } from './types/response';

export interface BreweriesServices {
  getBeers: (query?: string) => ServerResponse<[Beer]>;
  getBeerDetail: (id: string) => ServerResponse<Beer>;
}

async function getBeers(query?: string): ServerResponse<[Beer]> {
  // const request = { username: username, password: password };
  // const res = await secureInstance.post(`v1/login`, request);
  // Fake. Todo: remove
  await new Promise(f => setTimeout(f, 5000));
  return {
    meta: {
      httpCode: 200,
    },
  };
}

async function getBeerDetail(id: string): ServerResponse<any> {
  await new Promise(f => setTimeout(f, 5000));
  return {
    meta: {
      httpCode: 200,
    },
  };
}

const authService: BreweriesServices = {
  getBeers,
  getBeerDetail,
};

export default authService;
