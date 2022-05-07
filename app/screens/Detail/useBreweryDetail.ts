import { isRequestSuccess } from '../../api/helper';
import { BreweryDetail } from '../../api/types/breweries';
import { useState, useEffect, useCallback } from 'react';
import { breweriesServices } from '../../api';

const useBreweryDetail = (id: string) => {
  const [breweryDetail, setBreweryDetail] = useState<BreweryDetail>();
  const [hasError, setHasError] = useState<boolean>(false);

  const fetchBeerDetail = useCallback(async () => {
    const { data, meta } = await breweriesServices.getBreweryDetail(id);
    if (data && isRequestSuccess(meta)) {
      setBreweryDetail(data);
    } else {
      setHasError(true);
    }
  }, [id]);

  useEffect(() => {
    fetchBeerDetail();
  }, [fetchBeerDetail]);

  return { breweryDetail, hasError };
};

export default useBreweryDetail;
