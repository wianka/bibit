import React, { useState, useRef, useCallback } from 'react';
import ItemMovies from './ItemMovies';
import { useAppDispatch } from '../../../hooks';
import { pagination } from '../../../reducers/Filter';
import { typeItemMovies, typeModalImage } from '../types';
import './styles.css';

type typeList = {
  dataMovies: typeItemMovies[];
  isLoading: boolean;
  hasMore: boolean;
}

function Index(props: typeList) {
  const observer = useRef<any>(null);
  const [displayModal, setDisplayModal] = useState(false);
  const [dataModalImage, setDataModalImage] = useState<typeModalImage>();

  const dispatch = useAppDispatch();

  const { dataMovies, isLoading, hasMore } = props || {};
  
  const isMovies = dataMovies?.length > 0;
  

  const handleClickModalImage = (dataModal: typeModalImage) => {
    setDisplayModal(!displayModal);
    setDataModalImage(dataModal);
  }

  const lastElementRef = useCallback(node => {
    if (isLoading) return

    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0]?.isIntersecting && hasMore) {
        dispatch(pagination());
      }
    })

    if (node) observer.current.observe(node);
  }, [dispatch, hasMore, isLoading]);

  const renderItemMovies = () => {
    if (dataMovies?.length > 0) {
      return dataMovies.map((item: typeItemMovies, index: number) => {
        let refProps = {};
        if (index + 1 === dataMovies.length) {
          refProps = {
            ref: lastElementRef,
          }
        }
        return <div {...refProps} key={index}><ItemMovies key={index} {...item} onClickImage={handleClickModalImage} /></div>;
      })
    }

    return null;
  }

  const renderEmptyState = () => {
    return (
      <div className="empty">Please search name of movies</div>
    );
  }

  const renderLoading = () => {
    return (
      <div className="item-content">
        <div className="content__movie-info">
          <div style={{ width: '100px', backgroundColor: '#ddd', height: '200px', borderRadius: '10px' }} />
          <div style={{ width: '50px', backgroundColor: '#ddd', height: '30px', borderRadius: '10px', marginLeft: '12px' }} />
        </div>
        <div className="content__year">
          <div style={{ width: '50px', backgroundColor: '#ddd', height: '30px', borderRadius: '10px' }} />
        </div>
      </div>
    )
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
        {isLoading && renderLoading()}
      </div>
      {renderModal()}
    </>
  )
}

export default Index
