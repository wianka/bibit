import React from 'react';
import { typeItemMovies } from '../types';
import './styles.css';

function ItemMovies(props: typeItemMovies) {
  const { Title, Poster, Year, onClickImage } = props || {};

  const handleClickImage = () => {
    const data = {
      title: Title, image: Poster
    };

    onClickImage(data);
  }

  return (
    <div className="item-content">
      <div className="content__movie-info">
        <img src={Poster} alt="" onClick={handleClickImage}/>
        <p>{Title}</p>
      </div>
      <div className="content__year">
        {Year}
      </div>
    </div>
  )
}

export default ItemMovies
