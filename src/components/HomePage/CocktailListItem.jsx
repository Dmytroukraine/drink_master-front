import s from './PreviewDrinks.module.css';

export const CocktailListItem = ({ picture, title, link, alt }) => {
  return (
    <li className={s.card}>
      <div className={s.thumb}>
        <img src={picture} alt={alt}></img>
      </div>
      <div className={s.footerCard}>
        <p className={s.name}>{title}</p>
        <a className={s.seeMore} href={link}>
          See more
        </a>
      </div>
    </li>
  );
};
