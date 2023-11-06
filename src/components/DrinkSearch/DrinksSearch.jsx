import { useCallback, useState } from 'react';
import Select from 'react-select';
import { useDrinkSearchQuery } from '../../redux/searchOperations';
import { useGetCategoriesListQuery } from '../../redux/filtersSlice/filtersSlice';
import { useGetIngredientsListQuery } from '../../redux/filtersSlice/filtersSlice';
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
  // const [searchCategory, setSearchCategory] = useState('');
  // const [searchIngredient, setSearchIngredient] = useState('');
  const dispatch = useDispatch();
  const { data = {}, isLoading } = useDrinkSearchQuery(query);
  // const { data: keywordData, isLoading } = useDrinkSearchQuery(searchKeyword);
  // const { data: categoryData } = useDrinkSearchQuery(searchCategory);
  // const { data: ingredientData } = useDrinkSearchQuery(searchIngredient);
  const { data: categoryList } = useGetCategoriesListQuery();
  const { data: ingredientsList } = useGetIngredientsListQuery();
  console.log(categoryList);
  let categoriesOptions = [];
  let ingredientsOptions = [];
  console.log(data);
  const drinksValue = Object.values(data);
  const drinksKey = Object.keys(data);
  console.log('drinkValue', drinksValue);

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
      setSearchParams(newSearchParams);
    },
    [searchParams, setSearchParams]
  );

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
            onInputChange={handleInputChange}
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
            onInputChange={handleInputChange}

            // styles={selectStyles}
          />
        </div>
        <div>
          {drinksKey?.map(key => {
            const index = drinksKey.indexOf(key);
            console.log(index);
            console.log('drinksValue', drinksValue[1]);
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
