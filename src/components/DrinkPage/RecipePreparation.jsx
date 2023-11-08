import image from '../../images/recipePageCoctail@2x.jpg';
import styles from './DrinkPage.module.css';

export function RecipePreparation({ data }) {
  return (
    <section className={styles.sectionRecipePreparation}>
      <div className={styles.preparationContainer}>
      <h2 className={styles.recipeTitle}>Recipe Preparation</h2>

      <div className={styles.recipeWrapper}>
        <div className={styles.recipeInstruction}>
          <p className={styles.drinkRecipe}>{data.description}</p>
          <p className={styles.drinkRecipe}>
            {data.instructions} {data.instructionsES} {data.instructionsDE}
          </p>
          <p className={styles.drinkRecipe}>
            {data.instructionsFR} {data.instructionsIT}
          </p>
        </div>

        <div className={styles.recipeImgWrapper}>
          <img className={styles.recipeImg} src={image} alt="cocktail" />
        </div>
      </div>
    </div>
    </section>
  );
}
