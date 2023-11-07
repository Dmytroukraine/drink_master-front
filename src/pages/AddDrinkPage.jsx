import { PageTitle } from 'components/PageTitle/PageTitle';
import { AddDrinkForm } from 'components/AddRecipePage/AddDrinkForm/AddDrinkForm';
import { PopularRecipe } from 'components/AddRecipePage/PopularRecipe/PopularRecipe';
import Followus from 'components/Footer/FollowUs';

import css from './AddDrinkPage.module.css';

const AddDrinkPage = () => {
  return (
    <div className={css.container}>
      <PageTitle title={'Add drink'} />
      <div className={css.box}>
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
