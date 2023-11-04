import { useEffect, useState } from 'react';
import s from './PreviewDrinks.module.css';
import { CocktailListItem } from './CocktailListItem';

const debounce = (func, wait, immediate) => {
  var timeout;
  return () => {
    const context = this,
      args = null;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

export const CocktailList = ({ category, title }) => {
  const [widthScreen, setWidthScreen] = useState(window.screen.width);
  const [visibleCocktails, setVisibleCocktails] = useState(null);

  const mediaSmall = window.matchMedia('(max-width: 767px)').matches;
  const mediaMedium = window.matchMedia('(max-width: 1439px)').matches;

  const sliceCocktails = category => {
    const mobile = category?.slice(0, 1);
    const tab = category?.slice(0, 2);

    if (mediaSmall) return mobile;
    if (mediaMedium) return tab;
    return category;
  };

  useEffect(() => {
    setVisibleCocktails(sliceCocktails(category));
  }, [widthScreen]);

  const resizeObserver = new ResizeObserver(entries => {
    for (const entry of entries) {
      const contentBoxSize = entry.contentBoxSize[0];

      if (contentBoxSize.inlineSize < 767) {
        return setWidthScreen(window.screen.width);
      }
      if (contentBoxSize.inlineSize > 767 && contentBoxSize.inlineSize < 1439) {
        return setWidthScreen(window.screen.width);
      }
      return setWidthScreen(window.screen.width);
    }
  });

  useEffect(() => {
    window.addEventListener(
      'resize',
      debounce(() => resizeObserver.observe(document.body), 3000, false),
      false
    );

    return () => {
      window.removeEventListener(
        'resize',
        debounce(() => resizeObserver.observe(document.body), 200, false),
        false
      );
    };
  }, []);



  // console.log('Check category: ', visibleCocktails.length )

  return (
    <>
      {visibleCocktails ? (
        <>
          <h3 className={s.categoryTitle}>{title}</h3>
          <ul className={s.list}>
            {visibleCocktails?.map(({ _id, drink, drinkThumb }) => {
              return (
                <CocktailListItem
                  key={_id}
                  pictureURL={drinkThumb}
                  title={drink}
                  id={_id}
                ></CocktailListItem>
              );
            })}
          </ul>
        </>
      ) : null}
    </>
  );
};
