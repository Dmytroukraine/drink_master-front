import React from 'react';
// import { withTheme } from 'styled-components';
import css from './Paginator.module.css';


export function Paginator({ quantityPages, setPage, currentPage }) {

  const quantityPagesArr = [];
  for (let i = 1; i <= quantityPages; i++) {
    quantityPagesArr.push(i);
  }

  function onBtnClick(number) {
    setPage(number);
  }

  function onDecrArrowBtnClick(number) {
    if (number <= quantityPages && number > 0) {
      setPage(number - 1);
    }
  }

  function onIncrArrowBtnClick(number) {
    if (number < quantityPages && number >= 1) {
      setPage(number + 1);
    }
  }

  return (
    <div  className={css.btnContainer}>
      <button
        type="button"
        className={css.btnArrow}
        style={{}}
        onClick={() => onDecrArrowBtnClick(currentPage)}
        disabled={currentPage === 1}
      >
        &#60;
      </button>

      <>
        {quantityPagesArr.map(number => {
          return (
            <button
              key={number}
              disabled={currentPage === number}
              type="button"
              onClick={() => onBtnClick(number)}
              className={currentPage === number ? css.btnActive : css.btnClick}
            >
              {' '}
              {number}{' '}
            </button>
          );
        })}
      </>

      <button
        type="button"
        className={css.btnArrow}
        onClick={() => onIncrArrowBtnClick(currentPage)}
        disabled={currentPage === quantityPages}
      >
        {' '}
        &#62;
      </button>
    </div>
  );
}
