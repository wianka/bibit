import React, { useEffect, useState, useMemo } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

type typeDetail = {
  Actors: string;
  Country: string;
  Genre: string;
  Language: string;
  Plot: string;
  Poster: string;
  Released: string;
  Title: string;
  Writer: string;
  Year: string;
}

function Details() {
    const { id } = useParams<{id: string}>();
    const history = useHistory();
    const [dataDetail, setDataDetail] = useState<typeDetail>();

    const params = useMemo(() => ({
      i: id,
    }), [id]);

    useEffect(() => {
      if (id) {
        try {
          axios.get('http://www.omdbapi.com/?apikey=faf7e5bb', { params }).then(response => {
            const data = response.data;

            if (data.Response === 'False') {
              history.push('/movies');
            } else {
              setDataDetail(data);
            }
          });
      
        } catch (error) {
          console.warn('error when get data movies', error);
        }
      } else {
        history.push('/movies');
      }
    }, [history, id, params]);

  return (
    <div>
      <h1>Movies Details</h1>

      <div className="card">
          <div style={{ display: 'flex' }}>
            <img src={dataDetail?.Poster} alt="" style={{ marginRight: '12px' }} />

            <div>
              <h3>{dataDetail?.Title}</h3>
              <span>Release: {dataDetail?.Released}</span>
              <p>{dataDetail?.Plot}</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Details
