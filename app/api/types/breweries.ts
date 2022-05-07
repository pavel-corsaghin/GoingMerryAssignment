import { isUndefinedOrEmpty } from '../../utils/stringUtils';

export type Brewery = {
  id: string;
  name?: string;
  brewery_type?: string;
  street?: string;
  city?: string;
  state?: string;
};

export type BreweryDetail = {
  id: string;
  name?: string;
  brewery_type?: string;
  street?: string;
  city?: string;
  state?: string;
  postal_code?: string;
  country?: string;
  updated_at?: string;
  website_url?: string;
};

export const combinedAddress = (item?: Brewery) => {
  if (!item) {
    return undefined;
  }
  return [item.street, item.city, item.state]
    .filter(field => isUndefinedOrEmpty(field))
    .join(', ');
};

export const detailCombinedAddress = (item?: BreweryDetail) => {
  if (!item) {
    return undefined;
  }
  return [item.street, item.city, item.state, item.postal_code, item.country]
    .filter(field => isUndefinedOrEmpty(field))
    .join(', ');
};
