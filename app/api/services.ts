import { Brewery, BreweryDetail } from './types/breweries';
import { secureInstance } from './config';
import { ServerResponse } from './types/response';

export interface BreweriesServices {
  getBreweries: (query?: string, page?: number) => ServerResponse<[Brewery]>;
  getBreweryDetail: (id: string) => ServerResponse<BreweryDetail>;
}

async function getBreweries(
  query?: string,
  page?: number,
): ServerResponse<[Brewery]> {
  const params = {
    per_page: 10,
    by_name: query,
    page: page,
  };
  const res = await secureInstance.get('breweries', { params });
  return res.data;
}

async function getBreweryDetail(id: string): ServerResponse<BreweryDetail> {
  const res = await secureInstance.get(`breweries/${id}`);
  return res.data;
}

const breweriesServices: BreweriesServices = {
  getBreweries,
  getBreweryDetail,
};

export default breweriesServices;
