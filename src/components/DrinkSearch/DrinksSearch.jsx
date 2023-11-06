import { useCallback, useState } from 'react';
import Select from 'react-select';
import { useDrinkSearchQuery } from '../../redux/searchOperations';
import { useGetCategoriesListQuery } from '../../redux/filtersSlice/filtersSlice';
import { useGetIngredientsListQuery } from '../../redux/filtersSlice/filtersSlice';
import { useGetCategoryQuery } from '../../redux/drinkSlice/drinksSlice';
import { useGetIngredientQuery } from '../../redux/drinkSlice/drinksSlice';
import css from './DrinksSearch.module.css';
import { FiSearch } from 'react-icons/fi';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { DebounceInput } from 'react-debounce-input';
import { DrinksListItem } from './DrinksListItem';

const DrinkSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category');
  const ingredient = searchParams.get('ingredient');
  const [query, setQuery] = useState('');
  // const [searchKeyword, setSearchKeyword] = useState('');
  // const [searchIngredient, setSearchIngredient] = useState('');
  const dispatch = useDispatch();
  const { data = {}, isLoading } = useDrinkSearchQuery(query);
  // const { data: keywordData, isLoading } = useDrinkSearchQuery(searchKeyword);
  // const { data: categoryData } = useDrinkSearchQuery(categories );
  // const { data: ingredientData } = useDrinkSearchQuery(searchIngredient);
  const { data: categoryList } = useGetCategoriesListQuery();
  const { data: ingredientsList } = useGetIngredientsListQuery();

  const [categories, setCategory] = useState('');
  const { data: categoryData } = useGetCategoryQuery(categories);

  const [ingred, setIngred] = useState('');
  const { data: ingredientData } = useGetIngredientQuery(ingred);

  let categoriesOptions = [];
  let ingredientsOptions = [];

  const drinksValue = Object.values(data);
  const drinksKey = Object.keys(data);

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = inputValue => {
    setInputValue(inputValue);
  };

  const onHandleSubmit = e => {
    e.preventDefault();
  };
  const onHandleChange = e => {
    dispatch(setQuery(e.target.value));
  };

  const handleSetSearchtParams = useCallback(
    (key, value) => {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set(key, value);

      console.log('VALUE: ', value.toString());
      setSearchParams(newSearchParams);

      if (key === 'category') {
        setCategory(value.toString());
        dispatch(setCategory(value.toString()));
        console.log('setCategory + ');
        return;
      }

      setInputValue(value.toString());
      dispatch(setIngred(value.toString()));
      console.log('setIngred  + ');
    },
    [searchParams, setSearchParams]
  );

  console.log('categoryData: ', categoryData);
  console.log('ingredientData: : ', ingredientData);

  if (categoryList && ingredientsList) {
    categoryList.forEach(item =>
      categoriesOptions.push({ value: item, label: item })
    );
    ingredientsList.forEach(item =>
      ingredientsOptions.push({ value: item.title, label: item.title })
    );
  }

  return { isLoading } ? (
    <section className={css.section}>
      <div className={css.container}>
        <div className={css.formWrapper}>
          <form onSubmit={onHandleSubmit}>
            <DebounceInput
              type="text"
              minLength={2}
              debounceTimeout={1000}
              value={query}
              placeholder="Type to search"
              onChange={onHandleChange}
            />
          </form>
          <FiSearch className={css.icon} />

          <Select
            classNamePrefix="drinks-page-selector"
            placeholder="Select..."
            defaultValue={{
              value: 'All categories',
              label: 'All categories',
            }}
            name="category"
            value={{ value: '', label: category || 'All categories' }}
            options={[{ value: 'All categories' }, ...categoriesOptions]}
            onChange={data => handleSetSearchtParams('category', data.value)}
            inputValue={inputValue}
            onInputChange={(evt) => handleInputChange(evt)}
            // onClick={(evt) => console.log('onClick: ', evt)}

            // styles={selectStyles}
          />
          <Select
            classNamePrefix="drinks-page-selector"
            placeholder="Select..."
            defaultValue={{
              value: 'All ingredients',
              label: 'All ingredients',
            }}
            name="ingredient"
            value={{ value: '', label: ingredient || 'All ingredients' }}
            options={[{ value: 'All ingredients' }, ...ingredientsOptions]}
            onChange={data => handleSetSearchtParams('ingredient', data.value)}
            inputValue={inputValue}
            onInputChange={(evt) => handleInputChange(evt)}

            // styles={selectStyles}
          />
        </div>
        <div>
          {drinksKey?.map(key => {
            const index = drinksKey.indexOf(key);
            // console.log(index);
            // console.log('drinksValue', drinksValue[1]);
            return (
              <ul className={css.drinkList}>
                {drinksValue[1]?.map(({ _id, drink, drinkThumb }) => {
                  return (
                    <DrinksListItem
                      key={_id}
                      pictureURL={drinkThumb}
                      title={drink}
                      id={_id}
                    />
                  );
                })}
              </ul>
            );
          })}
        </div>
      </div>
    </section>
  ) : null;
};

export default DrinkSearch;
