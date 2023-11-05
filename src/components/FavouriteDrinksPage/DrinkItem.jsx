import { Link } from 'react-router-dom';
import React from 'react';
import stop from '../../images/thumb-placeholder-large.png';
import css from '../FavouriteDrinksPage/DrinkItem.module.css';

export const DrinkItem = ({ drink, onDelete }) => {

  return (
    <li className={css.drinksListItem} key={drink._id}>
      <img
        src={drink.drinkThumb || stop}

        alt={drink.title}
        className={css.imageDrinkItem}
        onError={event => ((event.target.src = stop))}
      />

      <div className={css.drinkMargin}>
        <p className={css.drinkTitle}>{drink.drink}</p>
        <p className={css.drinkTextAlcohol}>{drink.alcoholic}</p>
        <p className={css.drinkDescription}>({drink.description})</p>
      </div>

      <div className={css.btnBlock}>
        <Link to={`/drinks/${drink._id}`}>
          <button className={css.btn}>See more</button>
        </Link>
        <button
          type="button"
          className={css.btn_cirkle}

          onClick={() => {
            onDelete(drink._id); 
          }}

        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6"
              stroke="#F3F3F3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </li>
  );
};

