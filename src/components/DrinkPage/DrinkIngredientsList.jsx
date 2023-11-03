import styles from './DrinkPage.module.css';
import mediumImage from '../../images/thumb-placeholder-medium.png';

export function DrinkIngredientsList({ data }) {
  return (
    <div className={styles.ingredientsContainer}>
      <p className={styles.ingredientsTitle}>Ingredients</p>
      <ul className={styles.ingredientsList}>
        {data.ingredients.map(({ title, measure }) => {
          return (
            <li className={styles.ingredientItem}>
              <img
                className={styles.indredientImg}
                src={mediumImage}
                width="220"
                height="220"
                alt={title}
              />
              <div className={styles.ingredientsDetails}>
                <p className={styles.ingredientName}>{title}</p>
                <p className={styles.ingredientMeasure}>{measure}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
