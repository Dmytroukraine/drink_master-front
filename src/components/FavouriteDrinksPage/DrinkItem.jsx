import { Link } from 'react-router-dom';
import stop from '../../images/thumb-placeholder-large.png';
import css from '../FavouriteDrinksPage/DrinkItem.module.css';

export const DrinkItem = ({ drink, onDelete }) => {
 

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
        <Link to={`/drink/:drinkId`}>
          <button className={css.btn}>See more</button>
        </Link>
        <button
          type="button"
          className={css.btn_cirkle}
          onClick={() => {
            onDelete(drink._id); //проверить _id.$od
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
