import { Loading } from '../components/Loader/Loader';
import { useGetDrinkFavoriteAllQuery } from 'redux/drinkSlice/drinkFavoriteSlice';
import { PageTitle } from '../components/PageTitle/PageTitle';
import { Paginator } from '../components/Paginator/Paginator';
import NoContentSection from 'components/404Page/NoContent';
import { DrinksList } from '../components/FavouriteDrinksPage/DrinkList';
import BasicImg from '../images/blue_iced_tea_large@1x.png';
import { useState } from 'react';
import useResize from '../hooks/useResize';
import { useSearchParams } from 'react-router-dom';

import css from './FavouriteDrinksPage.module.css';


const FavouriteDrinksPage = () => {
  const { data = [], isLoading } = useGetDrinkFavoriteAllQuery();
  const [searchParams, setSearchParams] = useSearchParams();
  let page = searchParams.get('page');

  const [pagData, setPagData] = useState(data);
  const [currentPage, setCurrentPage] = useState(page||1);
  const size = useResize();

  const quantityDrinks = data.length;

  let itemsPerPage = 8;

  if (size[0] > 1439) {
    itemsPerPage = 9;
  }

  const quantityPages = Math.ceil(quantityDrinks / itemsPerPage);

  const i = currentPage * itemsPerPage - itemsPerPage;
  const k = itemsPerPage * currentPage;

  const pagDrinks = data.slice(i, k);

  const setPage = page => {
    setCurrentPage(page);
    setPagData(pagData);
    setSearchParams({ page: page});
  };

  return (
    <div>
      <PageTitle title="Favorites" />
      <div>
        {isLoading && <Loading />}
        {data.length > 0 ? (
          <DrinksList drinks={pagDrinks} />
        ) : (
          <NoContentSection>
            <div>
              <img
                className={css.drinkNotImg}
                src={BasicImg}
                alt="A cocktail"
                width="261"
                height="326"
              />
              <p className={css.drinkNotImgText}>
                You haven't added any favorite cocktails yet
              </p>
            </div>
          </NoContentSection>
        )}
        {  ((size[0] > 1439 && data.length > 9) || ( size[0] < 1439 && data.length > 8)) && (
          <Paginator
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
