import { useDeleteDrinkFavoriteMutation } from '../../redux/drinkSlice/drinkFavoriteSlice';
import { DrinkItem } from '../FavouriteDrinksPage/DrinkItem';
import css from '../FavouriteDrinksPage/DrinkList.module.css';


export function DrinksList({ drinks }) {
  const [deleteFavoriteDrink] = useDeleteDrinkFavoriteMutation();
  
  // console.log(drinks);
  return (
    <ul className={css.drinkCard}>
      {drinks.map(drink => {
        return (
          <DrinkItem
            key={drink._id}
            drink={drink}
            onDelete={deleteFavoriteDrink}
          />
        );
      })}
    </ul>
  );
}
