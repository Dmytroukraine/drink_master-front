import { NavLink } from 'react-router-dom';

import s from './PreviewDrinks.module.css';
import { Loading } from 'components/Loader/Loader';
import { useGetDrinkMainPageQuery } from 'redux/drinkSlice/drinksSlice';
import { CocktailList } from './CocktailList';
import { Button } from 'components/Button';

export const PreviewDrinks = () => {
  const { data = {}, isLoading } = useGetDrinkMainPageQuery();

  console.log('Data: ', data);

  const values = Object.values(data);
  const categories = Object.keys(data);

  return (
    <section className={s.previewDrinks}>
      <div className={s.container}>
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            {categories.map(category => {
              const index = categories.indexOf(category);
              return (
                <CocktailList
                  key={category}
                  category={values[index]}
                  title={category}
                ></CocktailList>
              );
            })}
          </div>
        )}

        <NavLink to="/drinks">
          <Button text="Other drinks" />
        </NavLink>
      </div>
    </section>
  );
};
