import { Loading } from '../components/Loader/Loader';
import { useGetDrinkFavoriteAllQuery } from 'redux/drinkSlice/drinkFavoriteSlice';
import { PageTitle } from '../components/PageTitle/PageTitle';
import { Paginator } from '../components/Paginator/Paginator';
import NoContentSection from 'components/404Page/NoContent';
import { DrinksList } from '../components/FavouriteDrinksPage/DrinkList';
import BasicImg from '../images/blue_iced_tea_large@1x.png';
import { useState } from 'react';

import css from './FavouriteDrinksPage.module.css';

const FavouriteDrinksPage = () => {
  const { data = [], isLoading } = useGetDrinkFavoriteAllQuery();
  const [pagData, setPagData] = useState(data);

  const [currentPage, setCurrentPage] = useState(0);

  const quantityDrinks = data.length;

  const itemsPerPage = 3;
  const quantityPages = Math.ceil(quantityDrinks / itemsPerPage);

  const i = 0 + currentPage * itemsPerPage;
  const k = itemsPerPage + itemsPerPage * currentPage;

  const pagDrinks = data.slice(i, k);

  const setPage = page => {
    setCurrentPage(page);
    setPagData(pagData);
  };

  return (
    <div>
      {/* {isError && { isError }} */}
      <PageTitle title="Favorites" />
      <div>
        {isLoading && <Loading />}
        {data.length > 0 ? (
          <DrinksList drinks={pagDrinks} />
        ) : (
          <NoContentSection
            children={
              <div>
                <img
                  className={css.drinkNotImg}
                  src={BasicImg}
                  alt="A coctail"
                  width="261"
                  height="326"
                />
                <p className={css.drinkNotImgText}>
                  You haven't added any favorite cocktails yet
                </p>
              </div>
            }
          />
        )}
        {data.length > 1 && (
          <Paginator
            drinks={data}
            quantityPages={quantityPages}
            setPage={setPage}
            currentPage={currentPage}
          />
        )}
      </div>
    </div>
  );
};

export default FavouriteDrinksPage;
