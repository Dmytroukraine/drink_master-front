import s from './PreviewDrinks.module.css';

export const CocktailListItem = ({ picture, title, link, alt }) => {
  return (
    <li className={s.cocktailCard}>
      <div className={s.thumb}>
        <img src={picture} alt={alt}></img>
      </div>
      <p className={s.cocktailName}>{title}</p>
        <a className={s.cocktailInfo} src={link}>
          See more
        </a>
    </li>
  );
};
