import React from 'react';
import './styles.css';

type typeFilter = {
  onClickSearch: () => void;
}

function Filter(props:typeFilter ) {
  const { onClickSearch } = props;

  return (
    <div className="filter">
      <div>
        <input placeholder="Movies Name" />
        <button onClick={onClickSearch}>Search</button>
      </div>
    </div>
  )
}

export default Filter
