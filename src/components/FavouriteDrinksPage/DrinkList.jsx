import { DrinkItem } from '../FavouriteDrinksPage/DrinkItem';
import css from '../FavouriteDrinksPage/DrinkList.module.css';

export function DrinksList({ drinks }) {
  return (
    <ul className={css.drinkCard}>
      {drinks.map(drink => {
        return <DrinkItem key={drink._id} drink={drink} />;
      })}
    </ul>
  );
}
