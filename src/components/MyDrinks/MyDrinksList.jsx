import { useDeleteMyDrinkMutation } from '../../redux/drinkSlice/drinksSlice';
import styles from './MyDrinksList.module.css';
import { MyDrinksListItem } from './MyDrinksListItem';

export function MyDrinksList(data) {
  const [deleteMyDrink] = useDeleteMyDrinkMutation();
  return (
    // <div className={styles.myDrinkListWrapper}>
    <ul className={styles.myDrinksList}>
      {data.drinks.map(
        ({ _id, drink, alcoholic, drinkThumb, shortDescription }) => {
          return (
            <MyDrinksListItem
              className
              key={_id}
              id={_id}
              alcoholic={alcoholic}
              picture={drinkThumb}
              title={drink}
              alt={shortDescription}
              onDelete={deleteMyDrink}
            />
          );
        }
      )}
    </ul>
    // </div>
  );
}
