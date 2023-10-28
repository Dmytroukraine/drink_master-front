// import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { useState } from 'react';
// import { Loader } from '../components/Loader/Loader';
import stop from '../../images/thumb-placeholder-large.png';
import css from '../FavouriteDrinksPage/DrinkItem.module.css';

export const DrinkItem = ({ drink }) => {
  // const [isLoading, setIsLoading] = useState(false);
  // const location = useLocation();
  // const dispatch = useDispatch();

  // const handleDelete = id => {
  //   dispatch(deleteDrink(id));
  // };

  return (
    <li className={css.drinksListItem} key={drink._id}>
      <img
        src={drink.ingredientThumb ? `${drink.ingredientThumb}` : `${stop}`}
        alt={drink.title}
        className={css.imageDrinkItem}
      />

      <div className={css.drinkMargin}>
        <p className={css.drinkTitle}>{drink.title}</p>
        {drink.alcohol === 'Yes' ? (
          <p className={css.drinkTextAlcohol}>Alcoholic</p>
        ) : (
          <p className={css.drinkTextAlcohol}>Not Alcoholic</p>
        )}
      </div>
      <p className={css.drinkDescription}>({drink.description})</p>

      <div className={css.btnBlock}>
        <p>See more</p>
        <button
          type="button"
          className={css.btn_delete}
          // onClick={() => {
          //   handleDelete({id});
          // }}
        >
          Del
        </button>
      </div>
    </li>
  );
};

// {
//     "_id": {
//       "$oid": "64aebb7f82d96cc69e0eb4a4"
//     },
//     "title": "Light rum",
//     "ingredientThumb": "http://res.cloudinary.com/dec1shvoo/image/upload/v1689169605/cocktails-v1/ingredient/Light20rum.png",
//     "thumb-medium": "http://res.cloudinary.com/dec1shvoo/image/upload/v1689169605/cocktails-v1/ingredient/Light20rum-Medium.png",
//     "thumb-small": "http://res.cloudinary.com/dec1shvoo/image/upload/v1689169605/cocktails-v1/ingredient/Light20rum-Small.png",
//     "alcohol": "Yes",
//     "description": "Light rums, also referred to as \"silver\" or \"white\" rums, in general, have very little flavour aside from a general sweetness. Light rums are sometimes filtered after aging to remove any colour. The majority of light rums come from Puerto Rico. Their milder flavours make them popular for use in mixed drinks, as opposed to drinking them straight. Light rums are included in some of the most popular cocktails including the Mojito and the Daiquiri.",
//   },
