import { useState } from 'react';
import { useSelector } from 'react-redux';

import { Button } from 'components/Button';
import { PageTitle } from 'components/PageTitle/PageTitle';
import styles from './DrinkPage.module.css';
import largeImage from '../../images/thumb-placeholder-large.png';

import {
  useAddDrinkFavoriteMutation,
  useDeleteDrinkFavoriteMutation,
} from 'redux/drinkSlice/drinkFavoriteSlice';
import { getUserState } from 'redux/userSlice/userSelectors';

export function DrinkPageHero({ data }) {
  const [imgSrc, setImgSrc] = useState(data.drinkThumb);
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
    <div className={styles.descContainer}>
      <div className={styles.descriptionWrapper}>
        <PageTitle className={styles.drinkTitle} title={data.drink} />
        <p className={styles.drinkCategory}>
          {data.glass} / {data.alcoholic}
        </p>
        <p className={styles.drinkDescription}>{data.description}</p>
        {!isLoading ? (
          'Loading....'
        ) : (
          <Button
            handleClick={handleButtonClick}
            text={isInFavorite ? 'Delete...' : 'Add ....'}
          />
        )}
        {/* // <button className={styles.addBtn}>Add to favorite drinks</button> */}
      </div>
      <div className={styles.imgThumb}>
        <img
          className={styles.drinkImg}
          src={imgSrc}
          onError={() => setImgSrc(largeImage)}
          alt={data.drink}
          width="400"
          height="400"
        />
      </div>
    </div>
  );
}
