import React, { useState, useMemo, useEffect, useCallback } from 'react';
import Filter from './Filter';
import ListMovies from './List';
import axios from 'axios';
import './styles.css';
import { useAppSelector } from '../../hooks';

function Container() {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  const filter = useAppSelector((state) => state.filter);
  const params = useMemo(() => ({
    s: filter.s,
    page: filter.page,
  }), [filter.page, filter.s]);
  
  const getDataList = useCallback(async () => {
    if (filter.s) setLoading(true);

    try {
      await axios.get('http://www.omdbapi.com/?apikey=faf7e5bb', { params }).then(response => {
        const data = response.data.Search;

        if (!response.data.Error) {
          setData((prevData: any) => {
            if (data.Response !== 'False' && prevData.Response !== 'False') {
              return [...prevData, ...data];
            }
  
            return data;
          });
          setHasMore(data?.length > 0);
        }
        setLoading(false);
        
      });
  
    } catch (error) {
      setLoading(false);
      console.warn('error when get data movies', error);
    }
  }, [filter.s, params]);

  useEffect(() => {
    getDataList();
  }, [getDataList]);

  return (
    <div>
      <h1>Movies</h1>

      <div className="card">
        <h4>List Movies</h4>

        <Filter />

        <ListMovies dataMovies={data} isLoading={loading} hasMore={hasMore} />
      </div>
    </div>
  )
}

export default Container
