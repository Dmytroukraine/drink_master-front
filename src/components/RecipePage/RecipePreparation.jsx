import imageDrink from '../../images/recipePageCoctail@2x.jpg';

export const RecipePreparation = ({ data }) => {
  return (
    <>
      <div>
        <img src={imageDrink} alt="Coctail Image" width="631" height="480" />
      </div>
      <div>
        <p>{data}</p>
      </div>
    </>
  );
};
