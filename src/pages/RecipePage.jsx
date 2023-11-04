import { useParams } from 'react-router-dom';

import { useGetDrinkByIdQuery } from '../redux/drinkSlice/drinksSlice';
import { RecipePageHero } from 'components/RecipePage/RecipePageHero';
import { RecipePreparation } from '../components/RecipePage/RecipePreparation';
import { RecipeIngredientList } from 'components/RecipePage/RecipeIngredientsList';

export const RecipePage = () => {
  const { drinkId } = useParams();

  const { data } = useGetDrinkByIdQuery(drinkId);
  return (
    <>
      {data && <RecipePageHero data={data} />}
      {data && <RecipeIngredientList ingredients={data.ingredients} />}
      {data && <RecipePreparation data={data.instructions} />}
    </>
  );
};
