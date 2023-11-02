
import { Loading } from '../components/Loader/Loader';
import { useGetDrinkFavoriteAllQuery } from 'redux/drinkSlice/drinkFavoriteSlice';
import { PageTitle } from '../components/PageTitle/PageTitle';
// import { Paginator } from '../components/Paginator/Paginator';
import NoContentSection from 'components/404Page/NoContent';
import { DrinksList } from '../components/FavouriteDrinksPage/DrinkList';
import BasicImg from '../images/blue_iced_tea_large@1x.png';


import css from './FavouriteDrinksPage.module.css';

const FavouriteDrinksPage = () => {
  const { data = [], isLoading } = useGetDrinkFavoriteAllQuery();
  // console.log(useGetDrinkFavoriteAllQuery());
  // console.log(data);
  // console.log(data.length);


  return (
    <div>
      {/* {isError && { isError }} */}
      <PageTitle title="Favorites" />
      <div>

        {isLoading && <Loading />}
        {data.length > 0 ? (<DrinksList drinks={data} />) : (<NoContentSection children={
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
        }/>)
        }
        {/* {data.length > 1 && <Paginator drinks={data} />} */}

      </div>
    </div>
  );
};

export default FavouriteDrinksPage;
