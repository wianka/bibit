import React, { useState } from 'react';
import { useAppDispatch } from '../../../hooks';
import { searchKeyword } from '../../../reducers/Filter';
import './styles.css';

function Filter() {
  const [value, setValue] = useState('');

  const dispatch = useAppDispatch();

  const handleChangeSearch = (e: any) => {
    setValue(e.target.value);
  }

  const handleClickSearch = () => {
    dispatch(searchKeyword(value));
  }

  return (
    <div className="filter">
      <div>
        <input placeholder="Movies Name" onChange={handleChangeSearch} value={value} />
        <button onClick={handleClickSearch}>Search</button>
      </div>
    </div>
  )
}

export default Filter
