
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

  // const [currentPage, setCurrentPage] = useState(1);
  // const countPages = Math.ceil(data.length/8);
  
  // console.log("countPages", countPages);;
  // console.log(currentPage);


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
        {/* countPages > 1 && <Paginator drinks={data} />} */}

      </div>
    </div>
  );
};

export default FavouriteDrinksPage;
