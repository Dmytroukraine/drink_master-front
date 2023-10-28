import s from './PreviewDrinks.module.css';
// import pictureTest from '../../images/thumb-placeholder-large.png';
import {CocktailListItem} from './CocktailListItem';
import pictureTest from '../../images/thumb-placeholder-large.png';

export const CocktailList = () => {
  //   const visibleCoctails = {};

  return (
    <ul className={s.cocktailList}>
      <h3 className={s.cocktailTitle}>Ordinary Drink</h3>

      <CocktailListItem
        picture={pictureTest}
        title="A Furlong Too Late"
        link="#"
        alt='info about photo'
      ></CocktailListItem>

      {/* {visibleCoctails.map(({ id, name, number }) => {
        return (
            <CocktailListItem
            key={id}
            name={name}
            phone={number}
          ></CocktailListItem>
        );
      })} */}
    </ul>
  );
};
