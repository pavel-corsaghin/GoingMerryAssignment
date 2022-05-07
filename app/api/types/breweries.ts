import { isNotUndefinedOrEmpty } from '../../utils/stringUtils';

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
