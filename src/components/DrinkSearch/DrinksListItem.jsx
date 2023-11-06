import { NavLink } from 'react-router-dom';
import css from './DrinksSearch.module.css';
import defaultCocktailPoster from '../../images/thumb-placeholder-large.png';

export const DrinksListItem = ({ pictureURL, title, id }) => {
  return (
    <>
      <li key={id}>
        <div className={css.imgBox}>
          <img
            className={css.imgItem}
            src={pictureURL}
            alt={`${title} cocktail`}
            onError={e => (e.target.src = defaultCocktailPoster)}
          />
        </div>
        <div className={css.description}>
          <span>{title}</span>
          <NavLink className={css.seeMore} to={`/drinks/${id}`}>
            See more
          </NavLink>
        </div>
      </li>
    </>
  );
};
