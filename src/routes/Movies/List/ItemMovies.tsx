import React from 'react';
import { useHistory } from 'react-router-dom';
import { typeItemMovies } from '../types';
import './styles.css';

function ItemMovies(props: typeItemMovies) {
  const { Title, Poster, Year, onClickImage, ref, imdbID } = props || {};
  const history = useHistory();

  const handleClickImage = () => {
    const data = {
      title: Title, image: Poster
    };

    onClickImage(data);
  }

  const handleClickMovie = () => {
    history.push(`/movies/detail/${imdbID}`);
  }

  return (
    <div className="item-content" ref={ref}>
      <div className="content__movie-info">
        <img src={Poster} alt="" onClick={handleClickImage}/>
        <p onClick={handleClickMovie}>{Title}</p>
      </div>
      <div className="content__year">
        {Year}
      </div>
    </div>
  )
}

export default ItemMovies
