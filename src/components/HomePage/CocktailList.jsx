import { useEffect, useState } from 'react';
import s from './PreviewDrinks.module.css';
import { CocktailListItem } from './CocktailListItem';

export const CocktailList = ({ data, category }) => {
  const [visibleCacktails, setVisibleCacktails] = useState(null);

  const mediaSmall = window.matchMedia('(max-width: 767px)').matches;
  const mediaMedium = window.matchMedia('(max-width: 1439px)').matches;
  //   const mediaLarge = window.matchMedia('(min-width: 1440px)').matches;

  const listenerScreen = window.screen.width;

  const sliceData = data => {
    const mobile = data?.slice(0, 1);
    const tab = data?.slice(0, 2);
    // const desk = data;

    if (mediaSmall) return mobile;
    if (mediaMedium) return tab;
    // if (mediaLarge) return desk;

    return data;
  };

  useEffect(() => {
    const mql = window.matchMedia(`(width: ${listenerScreen})`);

    mql.addEventListener('change', sliceData);

    setVisibleCacktails(sliceData(data));
    return () => {
      mql.removeEventListener('change', sliceData);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h3 className={s.categoryTitle}>{category}</h3>

      <ul className={s.list}>
        {visibleCacktails?.map(({ _id, drink, drinkThumb, description }) => {
          return (
            <CocktailListItem
              key={_id}
              picture={drinkThumb}
              title={drink}
              link="#"
              alt={description}
            ></CocktailListItem>
          );
        })}
      </ul>
    </>
  );
};
