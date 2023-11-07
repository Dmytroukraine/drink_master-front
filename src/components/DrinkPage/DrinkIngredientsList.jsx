import { useGetIngredientsListQuery } from '../../redux/filtersSlice/filtersSlice';
import styles from './DrinkPage.module.css';
import mediumImage from '../../images/thumb-placeholder-medium.png';

export function DrinkIngredientsList({ data: ingredients }) {
  const { data } = useGetIngredientsListQuery();


  if (!data) return;
  if (!ingredients) return;

  if (data.length < 1 && ingredients.length < 1) return;

  const filteredIngr = data.filter(dataObj => {
    return ingredients.some(
      ingredientsObj => dataObj._id === ingredientsObj.ingredientId
    );
  });

  const newArr = Object.values(
    ingredients.reduce((acc, { ingredientId: id, ...n }) => {
      Object.entries(n).forEach(([k, v]) => {
        if (k !== 'title') {
          acc[id][k] = (acc[id][k] || 0) + v;
        }
      });
      return acc;
    }, Object.fromEntries(filteredIngr.map(n => [n._id, { ...n }])))
  );
  return (
    <div className={styles.ingredientsContainer}>
      <p className={styles.ingredientsTitle}>Ingredients</p>
      {newArr.length > 0 && (
        <ul className={styles.ingredientsList}>
          {newArr.map(({ title, measure, _id, ingredientThumb }) => {
            return (
              <li key={_id} className={styles.ingredientItem}>
                <img
                  className={styles.indredientImg}
                  src={ingredientThumb}
                  onError={event => (event.target.src = mediumImage)}
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
      )}
    </div>
  );
}
