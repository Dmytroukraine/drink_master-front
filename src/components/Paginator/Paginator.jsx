import React from 'react';
// import { withTheme } from 'styled-components';
import css from './Paginator.module.css';

export function Paginator({ drinks, quantityPages, setPage, currentPage }) {
  const quantityPagesArr = [];
  for (let i = 1; i <= quantityPages; i++) {
    quantityPagesArr.push(i);
  }

  function onBtnClick(number) {
    setPage(number - 1);
  }

  function onDecrArrowBtnClick(number) {
    if (number < quantityPages && number > 0) {
      setPage(number - 1);
    }
  }

  function onIncrArrowBtnClick(number) {
    if (number < quantityPages && number >= 0) {
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
        disabled={currentPage === 0}
      >
        &#60;
      </button>

      <>
        {quantityPagesArr.map(number => {
          return (
            <button
              disabled={currentPage === number - 1}
              type="button"
              onClick={() => onBtnClick(number)}
              className={
                (currentPage === number - 1 ? css.btnActive : css.btnClick)
              }
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
        disabled={currentPage === quantityPages - 1}
      >
        {' '}
        &#62;
      </button>
    </div>
  );
}
