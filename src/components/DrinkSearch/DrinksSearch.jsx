import { DebounceInput } from 'react-debounce-input';
// import { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { useDrinkSearchQuery } from 'redux/searchOperations';
import { useForm } from 'react-hook-form';
import { notification } from 'components/Shared/notification';

const DrinkSearch = () => {
  //   const [query, setQuery] = useState('');
  //   const [category, setCategory] = useState('');
  //   const [ingredient, setIngredient] = useState('');

  const dispatch = useDrinkSearchQuery();

  const { reset } = useForm({
    mode: 'handleSearchChange',
    defaultValues: { query: '', category: '', ingredient: '' },
  });

  const handleSearchChange = ({ query, category, ingredient }) => {
    dispatch({ query, category, ingredient })
      .then(() => {
        reset();
      })
      .catch(e => notification(e.data.message));
  };

  //   useEffect(() => {
  //     dispatch(useGetDrinkSearch({ query, category, ingredient }));
  //   }, [dispatch, query, category, ingredient]);

  return (
    <div>
      <DebounceInput
        minLength={2}
        debounceTimeout={500}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default DrinkSearch;
