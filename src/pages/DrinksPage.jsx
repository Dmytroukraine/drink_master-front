import { PageTitle } from 'components/PageTitle/PageTitle';
import DrinkSearch from 'components/DrinkSearch/DrinksSearch';

const DrinksPage = () => {
  return (
    <div>
      <PageTitle title={'Drinks'} />
      <DrinkSearch />
    </div>
  );
};

export default DrinksPage;
