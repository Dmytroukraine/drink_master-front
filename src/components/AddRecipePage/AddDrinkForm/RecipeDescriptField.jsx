import css from './RecipeDescriptField.module.css';

export const RecipeDescriptField = ({ onChange }) => {
  return (
    <div>
      <h2 className={css.preparationTitle}>Recipe Preparation</h2>
      <textarea
        name="textarea"
        id=""
        cols="30"
        rows="10"
        placeholder="Enter the recipe"
        className={css.textarea}
        onChange={onChange}
      ></textarea>
    </div>
  );
};
