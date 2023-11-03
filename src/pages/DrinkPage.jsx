import { useParams } from 'react-router-dom';
import { useGetDrinkByIdQuery } from '../redux/drinkSlice/drinksSlice';
import { DrinkPageHero } from '../components/DrinkPage/DrinkPageHero';
import { DrinkIngredientsList } from '../components/DrinkPage/DrinkIngredientsList';
import { RecipePreparation } from '../components/DrinkPage/RecipePreparation';
import styles from '../components/DrinkPage/DrinkPage.module.css';

export function DrinkPage() {
  const { drinkId } = useParams();
  const { data = {} } = useGetDrinkByIdQuery(drinkId);
  // console.log(useGetDrinkByIdQuery());
  // console.log(data);
  // console.log(data.length);

  return (
    <div className={styles.container}>
      <DrinkPageHero data={data} />
      <DrinkIngredientsList data={data} />
      <RecipePreparation data={data} />
    </div>
  );
}
