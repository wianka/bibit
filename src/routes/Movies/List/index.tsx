import React, { useState } from 'react';
import ItemMovies from './ItemMovies';
import { typeDataMovies, typeItemMovies, typeModalImage } from '../types';
import './styles.css';

type typeList = {
  dataMovies: typeDataMovies;
}

function Index(props: typeList) {
  const [displayModal, setDisplayModal] = useState(false);
  const [dataModalImage, setDataModalImage] = useState<typeModalImage>();

  const { dataMovies } = props || {};
  const { Search: listMovies } = dataMovies || {};

  const isMovies = listMovies?.length > 0;

  const handleClickModalImage = (dataModal: typeModalImage) => {
    setDisplayModal(!displayModal);
    setDataModalImage(dataModal);
  }

  const renderItemMovies = () => {
    if (listMovies?.length > 0) {
      return listMovies.map((item: typeItemMovies, index: number) => {
        return <ItemMovies key={index} {...item} onClickImage={handleClickModalImage} />;
      })
    }

    return null;
  }

  const renderEmptyState = () => {
    return (
      <div className="empty">Please search name of movies</div>
    );
  }

  const renderModal = () => {
    return (
      <div className={`modal ${displayModal && 'active'}`}>
        <div className="modal__content">
          <div className="content__header">
            <p>{dataModalImage?.title}</p>

            <span onClick={() => setDisplayModal(!displayModal)}>X</span>
          </div>

          <div className="content__image">
            <img src={dataModalImage?.image} alt="" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="table-head">
        <div className="item-head">Movie Name</div>
        <div className="item-head">Year</div>
      </div>
      <div className="table-content">
        {isMovies ? renderItemMovies() : renderEmptyState()}
      </div>
      {renderModal()}
    </>
  )
}

export default Index
