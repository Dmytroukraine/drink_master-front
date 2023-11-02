import { PageTitle } from 'components/PageTitle/PageTitle';
import { PopularRecipe } from 'components/AddRecipePage/PopularRecipe';

const AddDrinkPage = () => {
  return (
    <div>
      <PageTitle title={'Add drink'} />
      <PopularRecipe/>
    </div>
  );
};

export default AddDrinkPage;
