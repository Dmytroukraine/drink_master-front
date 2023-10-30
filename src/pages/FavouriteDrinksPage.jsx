import { Loader } from '../components/Loader/Loader';
import { useGetDrinkFavoriteAllQuery } from 'redux/drinkSlice';
import { PageTitle } from '../components/PageTitle/PageTitle';
import { Paginator } from '../components/Paginator/Paginator';
import { DrinkList } from '../components/FavouriteDrinksPage/DrinkList';

import css from './FavouriteDrinksPage.module.css';

export const FavouriteDrinksPage = () => {
  const { data, isLoading } = useGetDrinkFavoriteAllQuery();

  return (
    <div>
      {/* {error && { error }} */}
      <PageTitle title="Favorites" />
      <div>
        {isLoading && <Loader />}
        {data ? (
          <DrinkList drinks={data} />
        ) : (
          <div>
            <img
              className={css.drinkNotImg}
              srcSet="
                    ../images/blue_iced_tea_large@1x.png 467w,
                    ../images/blue_iced_tea_large@2x.png 934w,
                    ../images/blue_iced_tea_medium@1x.png 284w,
                    ../images/blue_iced_tea_medium@2x.png 568w,
                    ../images/blue_iced_tea_smal@1x.png 157w,
                    ../images/blue_iced_tea_small@2x.png 314w"
              sizes="(min-width: 1440px) 467px, (min-width: 768px) 284px, (min-width: 375px) 157px, 100vw"
              src="../images/blue_iced_tea_large@1x.png"
              alt="A coctail"
              width="261"
              height="326"
            />
            <p class="drinkNotImgText">
              You haven't added any favorite cocktails yet
            </p>
          </div>
        )}
        {data.length > 0 && <Paginator drinks={data} />}
      </div>
    </div>
  );
};
