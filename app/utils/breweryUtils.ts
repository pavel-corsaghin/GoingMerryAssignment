import { Brewery, BreweryDetail } from '../api/types/breweries';
import { isNotUndefinedOrEmpty } from './stringUtils';

export const combinedAddress = (item?: Brewery) => {
  if (!item) {
    return undefined;
  }
  return [item.street, item.city, item.state]
    .filter(field => isNotUndefinedOrEmpty(field))
    .join(', ');
};

export const detailCombinedAddress = (item?: BreweryDetail) => {
  if (!item) {
    return undefined;
  }
  return [item.street, item.city, item.state, item.postal_code, item.country]
    .filter(field => isNotUndefinedOrEmpty(field))
    .join(', ');
};
