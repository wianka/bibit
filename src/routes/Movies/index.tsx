import React, { useState } from 'react';
import Filter from './Filter';
import ListMovies from './List';
import useGetMoviesList from './hooks/useGetMoviesList';
import './styles.css';

function Index() {
  const params = { s: 'batman' }; 
  const fetcher = useGetMoviesList(params);

  const [data, setData] = useState<any>({});

  const getDataList = async () => {
    await fetcher.then(res => { 
      return setData(res?.data);
     });
  };

  const handleClickSearch = () => {
    getDataList();
  }

  return (
    <div>
      <h1>Movies</h1>

      <div className="card">
        <h4>List Movies</h4>

        <Filter onClickSearch={handleClickSearch} />

        <ListMovies dataMovies={data} />
      </div>
    </div>
  )
}

export default Index
