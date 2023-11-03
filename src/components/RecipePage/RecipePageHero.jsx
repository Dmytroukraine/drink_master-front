import { useState } from 'react';
import { useSelector } from 'react-redux';

import css from './recipePage.module.css';
import { PageTitle } from 'components/PageTitle/PageTitle';
import imgPlaceHolder from '../../images/thumb-placeholder-small.png';

import {
  useAddDrinkFavoriteMutation,
  useDeleteDrinkFavoriteMutation,
} from 'redux/drinkSlice/drinkFavoriteSlice';
import { getUserState } from 'redux/userSlice/userSelectors';
import { Button } from 'components/Button';

export const RecipePageHero = ({ data }) => {
  const [addDrinkFavorite, isLoading] = useAddDrinkFavoriteMutation();
  const [deleteFromFavorite] = useDeleteDrinkFavoriteMutation();

  const currentUserId = useSelector(getUserState).user._id;

  const [isInFavorite, setIsInFavorite] = useState(
    data.users.includes(currentUserId)
  );

  const handleButtonClick = () => {
    if (isInFavorite) {
      deleteFromFavorite(data._id);
      setIsInFavorite(false);
    } else {
      addDrinkFavorite(data._id);
      setIsInFavorite(true);
    }
  };

  return (
    <>
      <div>
        <PageTitle className={css.pageTitle} title={data.drink} />
        <p className={css.subTitle}>
          {data.glass} / {data.alcoholic}
        </p>
        <p>{data.description}</p>
        {!isLoading ? (
          'Loading....'
        ) : (
          <Button
            handleClick={handleButtonClick}
            text={isInFavorite ? 'Delete...' : 'Add ....'}
          />
        )}
      </div>
      <div>
        <img
          src={data.drinkThumb}
          alt={data.IBA}
          width="400"
          height="400"
          onError={event => (event.target.src = imgPlaceHolder)}
        />
      </div>
    </>
  );
};
