import styles from './MyDrinksList.module.css';
import { MyDrinksListItem } from './MyDrinksListItem';

export function MyDrinksList({ data }) {
  return (
    <div className={styles.myDrinkListWrapper}>
      <ul className={styles.myDrinksList}>
        {data.map(({ _id, drink, alcoholic, drinkThumb, description }) => {
          return (
            <MyDrinksListItem
              className
              key={_id.$oid}
              alcoholic={alcoholic}
              picture={drinkThumb}
              title={drink}
              alt={description}
            />
          );
        })}
      </ul>
    </div>
  );
}
