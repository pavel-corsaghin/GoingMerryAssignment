import { useState, useEffect, useCallback } from 'react';
import { isRequestSuccess } from '../../api/helper';
import { Brewery } from '../../api/types/breweries';
import { breweriesServices } from '../../api';

const useBreweriesSearch = () => {
  const [searchKeyword, setSearchKeyword] = useState<string | undefined>();
  const [breweries, setBreweries] = useState<Brewery[]>([]);
  const [hasError, setHasError] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isLoadingMore, setLoadMore] = useState<boolean>(false);

  const fetchBeers = useCallback(async (keyword?: string) => {
    const { data, meta } = await breweriesServices.getBreweries(keyword);
    if (data && isRequestSuccess(meta)) {
      setBreweries(data);
      setCurrentPage(1);
    } else {
      setHasError(true);
    }
  }, []);

  const loadMoreBreweries = useCallback(async () => {
    if (isLoadingMore) {
      return;
    }
    setLoadMore(true);
    const nextPage = currentPage + 1;
    const { data, meta } = await breweriesServices.getBreweries(
      searchKeyword,
      nextPage,
    );
    if (data && isRequestSuccess(meta)) {
      setBreweries(prev => [...prev, ...data]);
      setCurrentPage(1);
    } else {
      setHasError(true);
    }
    setLoadMore(false);
  }, [currentPage, searchKeyword, isLoadingMore]);

  useEffect(() => {
    fetchBeers(searchKeyword);
  }, [fetchBeers, searchKeyword]);

  return { setSearchKeyword, breweries, hasError, loadMoreBreweries };
};

export default useBreweriesSearch;
