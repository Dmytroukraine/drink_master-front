import { NavLink } from 'react-router-dom';
import s from './PreviewDrinks.module.css';
// import defaultCocktailPoster from '../../images/thumb-placeholder-large.png';

export const CocktailListItem = ({ pictureURL, title, id }) => {

  return (
    <li className={s.card}>
      <div className={s.thumb}>
        <img src={pictureURL} alt={`photo ${title} cocktail`}></img>
      </div>
      <div className={s.footerCard}>
        <p className={s.name}>{title}</p>

        <NavLink className={s.seeMore} to={`/drink/:${id}`}>
          See more
        </NavLink>
      </div>
    </li>
  );
};
