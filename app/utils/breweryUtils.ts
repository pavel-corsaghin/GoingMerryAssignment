import { Brewery, BreweryDetail } from '../api/types/breweries';
import { isNotEmpty } from './stringUtils';

export const combinedAddress = (item?: Brewery) => {
  if (!item) {
    return undefined;
  }
  return [item.street, item.city, item.state]
    .filter(field => isNotEmpty(field))
    .join(', ');
};

export const detailCombinedAddress = (item?: BreweryDetail) => {
  if (!item) {
    return undefined;
  }
  return [item.street, item.city, item.state, item.postal_code, item.country]
    .filter(field => isNotEmpty(field))
    .join(', ');
};
