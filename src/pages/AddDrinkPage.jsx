import { PageTitle } from 'components/PageTitle/PageTitle';
import { AddDrinkForm } from 'components/AddRecipePage/AddDrinkForm/AddDrinkForm';
import { PopularRecipe } from 'components/AddRecipePage/PopularRecipe/PopularRecipe';
import Followus from 'components/Footer/FollowUs';

const AddDrinkPage = () => {
  return (
    <div>
      <PageTitle title={'Add drink'} />
      <div style={{ display: 'flex', gap: '70px' }}>
        <AddDrinkForm />
        <div>
          <h2>Follow Us</h2>
          <Followus />
          <PopularRecipe />
        </div>
      </div>
    </div>
  );
};

export default AddDrinkPage;
