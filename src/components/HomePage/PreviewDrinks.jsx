import { NavLink } from 'react-router-dom';

import s from './PreviewDrinks.module.css';
import { Loading } from 'components/Loader/Loader';
import { useGetDrinkMainPageQuery } from 'redux/drinkSlice/drinksSlice';
import { CocktailList } from './CocktailList';
import { Button } from 'components/Button';
import { useSelector } from 'react-redux';
import { getUserAgeInYears } from 'redux/userSlice/userSelectors';

export const PreviewDrinks = () => {
  const { data = {}, isLoading } = useGetDrinkMainPageQuery();
  const ageUser = useSelector(getUserAgeInYears);

  console.log('Age user: ', ageUser );

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
