import { PageTitle } from 'components/PageTitle/PageTitle';
import { MyDrinksList } from '../components/MyDrinks/MyDrinksList';
import { Loading } from '../components/Loader/Loader';
import NoContentSection from 'components/404Page/NoContent';
import BasicImg from '../images/blue_iced_tea_large@1x.png';
import { useGetMyRecipesQuery } from 'redux/drinkSlice/myRecipesSlice';
import css from './FavouriteDrinksPage.module.css';

const MyDrinksPage = () => {
  const { data = [], isLoading } = useGetMyRecipesQuery();
  // console.log(useGetMyRecipesQuery());
  // console.log(data);
  // console.log(data.length);
  return (
    <div>
      <PageTitle title={'My drinks'} />
      {isLoading && <Loading />}
      {data.length > 0 ? (
        <MyDrinksList drinks={data} />
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
      {/* {data.length > 1 && <Paginator drinks={data} />} */}
    </div>
  );
};

export default MyDrinksPage;
