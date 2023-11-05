import React from 'react';

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
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
        marginTop: 30,
      }}
    >
      <button
        type="button"
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
              disabled={currentPage === number-1}
              type="button"
              onClick={() => onBtnClick(number)}
            >
              {' '}
              {number}{' '}
            </button>
          );
        })}
      </>

      <button
        type="button"
        onClick={() => onIncrArrowBtnClick(currentPage)}
        disabled={currentPage === quantityPages-1}
      >
        {' '}
        &#62;
      </button>
    </div>
  );
}
