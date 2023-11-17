import { PageTitle } from 'components/PageTitle/PageTitle';
import { MyDrinksList } from '../components/MyDrinks/MyDrinksList';
import { Loading } from '../components/Loader/Loader';
import NoContentSection from 'components/404Page/NoContent';
import BasicImg from '../images/blue_iced_tea_large@1x.png';
import { useGetMyDrinksQuery } from 'redux/drinkSlice/drinksSlice';
import css from './FavouriteDrinksPage.module.css';
import styles from '../components/MyDrinks/MyDrinksList.module.css';

const MyDrinksPage = () => {
  const { data = [], isLoading } = useGetMyDrinksQuery();

  return (
    <div className={styles.myDrinkListWrapper}>
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
