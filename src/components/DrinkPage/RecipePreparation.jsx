import image from '../../images/recipePageCoctail@2x.jpg';
import styles from './DrinkPage.module.css';

export function RecipePreparation({ data }) {
  return (
    <div className={styles.preparationContainer}>
      <h2 className={styles.recipeTitle}>Recipe Preparation</h2>
      <div className={styles.recipeWrapper}>
        <img
          className={styles.recipeImg}
          src={image}
          max-width="631"
          height="480"
          alt="cocktail"
        />
        <div className={styles.recipeInstruction}>
          <p className={styles.drinkRecipe}>{data.description}</p>
          <p className={styles.drinkRecipe}>
            {data.instructions} {data.instructionsES} {data.instructionsDE}
          </p>
          <p className={styles.drinkRecipe}>
            {data.instructionsFR} {data.instructionsIT}
          </p>
        </div>
      </div>
    </div>
  );
}
