import s from './PreviewDrinks.module.css';
import data from './data.json';

import { CocktailList } from './CocktailList';
import { Button } from 'components/Button';

export const PreviewDrinks = () => {
  const ordinaryDrink = data['Ordinary Drink'];
  const cocktail = data['Cocktail'];
  const shake = data['Shake'];
  const otherAndUnknow = data['Other/Unknow'];

  return (
    <section className={s.previewDrinks}>
      <div className={s.container}>
        <CocktailList
          data={ordinaryDrink}
          category="Ordinary Drink"
        ></CocktailList>
        <CocktailList data={cocktail} category="Cocktail"></CocktailList>
        <CocktailList data={shake} category="Shake"></CocktailList>
        <CocktailList
          data={otherAndUnknow}
          category="Other/Unknow"
        ></CocktailList>
        <Button text="Other drinks" />
      </div>
    </section>
  );
};
