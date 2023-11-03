import { useState } from 'react';
import styles from './DrinkPage.module.css';
import largeImage from '../../images/thumb-placeholder-large.png';

export function DrinkPageHero({ data }) {
  const [imgSrc, setImgSrc] = useState(data.drinkThumb);
  return (
    <div className={styles.descContainer}>
      <div className={styles.descriptionWrapper}>
        <h1 className={styles.drinkTitle}>{data.drink}</h1>
        <p className={styles.drinkCategory}>
          {data.glass} / {data.alcoholic}
        </p>
        <p className={styles.drinkDescription}>{data.description}</p>
        <button className={styles.addBtn}>Add to favorite drinks</button>
      </div>
      <div className={styles.imgThumb}>
        <img
          className={styles.drinkImg}
          src={imgSrc}
          onError={() => setImgSrc(largeImage)}
          alt={data.drink}
          width="400"
          height="400"
        />
      </div>
    </div>
  );
}
