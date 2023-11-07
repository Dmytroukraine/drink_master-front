import { useParams } from 'react-router-dom';
import { useGetDrinkByIdQuery } from '../redux/drinkSlice/drinksSlice';

import { DrinkPageHero } from '../components/DrinkPage/DrinkPageHero';
import { DrinkIngredientsList } from '../components/DrinkPage/DrinkIngredientsList';
import { RecipePreparation } from '../components/DrinkPage/RecipePreparation';
import styles from '../components/DrinkPage/DrinkPage.module.css';
import { useEffect } from 'react';
import { scrollToTop } from 'helpers/scrollToTop';

export function DrinkPage() {
  const { drinkId } = useParams();
  const { data } = useGetDrinkByIdQuery(drinkId);

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className={styles.container}>
      {data && <DrinkPageHero data={data} />}
      {data && <DrinkIngredientsList data={data.ingredients} />}
      {data && <RecipePreparation data={data} />}
    </div>
  );
}
