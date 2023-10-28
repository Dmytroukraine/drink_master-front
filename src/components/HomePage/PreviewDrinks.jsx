import s from './PreviewDrinks.module.css';

import { CocktailList } from './CocktailList';
import { Button } from 'components/Button';

export const PreviewDrinks = () => {
  return (
    <section className={s.previewDrinks}>
      <div className={s.container}>
        <CocktailList></CocktailList>
        <Button text="Other drinks" />
      </div>
    </section>
  );
};

// <ul className={s.cocktailList}>
// <h3 className={s.cocktailTitle}>Ordinary Drink</h3>
// <li className={s.cocktailCard}>
//   <div className={s.thumb}>
//     <img src={pictureTest} alt="photo coctale"></img>

//     <p className={s.coctaileName}>A Furlong Too Late</p>
//     <a className={s.coctaileInfo} src="#">
//       See more
//     </a>
//   </div>
// </li>
// </ul>
