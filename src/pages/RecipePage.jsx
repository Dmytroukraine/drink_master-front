import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import { getDrinksById, getAllIngredients } from '../services/drinksAPI';
import { RecipePageHero } from 'components/RecipePage/RecipePageHero';
import { RecipePreparation } from '../components/RecipePage/RecipePreparation';
import { RecipeIngredientList } from 'components/RecipePage/RecipeIngredientsList';

export const RecipePage = () => {
  const [data, setData] = useState(null);
  const [ingredients, setIngredients] = useState(null);
  const { drinkId } = useParams();

  useEffect(() => {
    getDrinksById(drinkId)
      .then(details => {
        setData(details);
      })
      .catch(error => console.error(`Error fetching drink by id:`, error));

    // getAllIngredients()
    //   .then(allIngredient => {
    //     console.log(allIngredient);
    //     const filteredIngredients = allIngredient.filter(item =>
    //       data.ingredients.includes(item.id)
    //     );
    //     console.log('filteredIngredients', filteredIngredients);
    //     setIngredients(filteredIngredients);
    //   })
    //   .catch(error => console.error(`Error fetching all ingredients:`, error));
  }, [drinkId]);
  console.log(data);
  return (
    <>
      {data && <RecipePageHero data={data} />}
      <RecipePreparation data={data.instructions} />
      <RecipeIngredientList data={ingredients} />
    </>
  );
};
