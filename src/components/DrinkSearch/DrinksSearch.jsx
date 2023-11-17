import { useCallback, useState, useEffect } from 'react';
import Select from 'react-select';
import { useDrinkSearchQuery } from '../../redux/searchOperations';
import { useGetCategoriesListQuery } from '../../redux/filtersSlice/filtersSlice';
import { useGetIngredientsListQuery } from '../../redux/filtersSlice/filtersSlice';
import css from './DrinksSearch.module.css';
import { FiSearch } from 'react-icons/fi';
import { useSearchParams } from 'react-router-dom';
import { DebounceInputStyled } from './Input.styled';
import { DrinksListItem } from './DrinksListItem';
import { Paginator } from '../Paginator/Paginator';
import useResize from '../../hooks/useResize';

const DrinkSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const ingredientParam = searchParams.get('ingredient');
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [ingredient, setIngredients] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const size = useResize();
  let itemsPerPage = 8;

  if (size[0] > 1439) {
    itemsPerPage = 9;
  }

  const { data = {}, isLoading } = useDrinkSearchQuery({
    query,
    category,
    ingredient,
    page: currentPage,
    limit: itemsPerPage,
  });

  const quantityDrinks = data.total;

  const quantityPages = Math.ceil(quantityDrinks / itemsPerPage);

  const { data: categoryList } = useGetCategoriesListQuery();
  const { data: ingredientsList } = useGetIngredientsListQuery();

  let categoriesOptions = [];
  let ingredientsOptions = [];

  const [drinksArr, setDrinksArr] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [visibleCocktails, setVisibleCocktails] = useState([]);

  const handleInputChange = inputValue => {
    setInputValue(inputValue);
  };

  const onHandleSubmit = e => {
    e.preventDefault();
  };
  const onHandleChange = e => {
    setQuery(e.target.value);
    setDrinksArr(data);
    setCurrentPage(1);
  };

  useEffect(() => {
    if (visibleCocktails) {
      setDrinksArr(data);
    }
    setVisibleCocktails(setDrinksArr(data));
  }, [data, setDrinksArr, setVisibleCocktails, visibleCocktails]);

  const handleSetSearchtParams = useCallback(
    (key, value) => {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set(key, value);

      setSearchParams(newSearchParams);

      if (key === 'category') {
        setCategory(value.toString());
        setDrinksArr(data);

        return;
      }

      if (key === 'ingredient') {
        setIngredients(value.toString());
        setDrinksArr(data);

        return;
      }
      // setInputValue(value.toString());
      setCategory('');
      setIngredients('');
    },

    [searchParams, setSearchParams, data]
  );

  if (categoryList && ingredientsList) {
    categoryList.forEach(item =>
      categoriesOptions.push({ value: item, label: item })
    );
    ingredientsList.forEach(item =>
      ingredientsOptions.push({ value: item.title, label: item.title })
    );
  }

  const style = {
    control: baseStyles => ({
      ...baseStyles,
      borderRadius: '200px',
      backgroundColor: '#161F37',
      boxShadow: 'none',
      border: 0,
      cursor: 'pointer',
      fontSize: '17px',
      width: '335px',
      padding: '14px 24px',
      '@media (min-width: 768px)': {
        width: '199px',
      },
      '@media (min-width: 1440px)': {
        width: '259px',
      },
    }),
    menu: baseStyles => ({
      ...baseStyles,
      borderRadius: '20px',
      backgroundColor: '#161F37',
      width: '199px',
      marginTop: '4px',
      '&::-webkit-scrollbar': {
        width: '0px',
      },
    }),
    menuList: baseStyles => ({
      ...baseStyles,
      '&::-webkit-scrollbar': {
        width: '0px',
      },
    }),
    dropdownIndicator: (baseStyles, { isFocused }) => ({
      ...baseStyles,
      color: 'var(--white-color)',
      '&:hover': {
        color: 'var(--white-color)',
      },
      transition: 'transform 0.25s ease-out',
      transform: isFocused && 'rotate(180deg)',
    }),
    indicatorSeparator: baseStyles => ({
      ...baseStyles,
      display: 'none',
    }),
    placeholder: baseStyles => ({
      ...baseStyles,
      color: 'white',
    }),
    input: baseStyles => ({
      ...baseStyles,
      color: 'white',
    }),
    option: baseStyles => ({
      ...baseStyles,
      backgroundColor: 'none',
      color: 'var(--white-fifty-color)',

      '&:hover': {
        color: 'var(--white-color)',
      },
    }),
    singleValue: baseStyles => ({
      ...baseStyles,
      color: 'white',
    }),
  };

  const setPage = page => {
    setCurrentPage(page);
    // setPagData(pagData);
    // setSearchParams({ page: page });
  };

  return { isLoading } ? (
    <section className={css.section}>
      <div className={css.container}>
        <div className={css.formWrapper}>
          <form className={css.inputForm} onSubmit={onHandleSubmit}>
            <DebounceInputStyled
              type="text"
              minLength={2}
              debounceTimeout={1000}
              value={query}
              placeholder="Type to search"
              onChange={onHandleChange}
            />
            <span className={css.searchIconWrapper}>
              <FiSearch
                style={{
                  width: '20px',
                  height: '20px',
                  position: 'absolute',
                  top: '0',
                  right: '18px',
                }}
              />
            </span>
          </form>

          <Select
            classNamePrefix="drinks-page-selector"
            placeholder="Select..."
            defaultValue={{
              value: 'All categories',
              label: 'All categories',
            }}
            name="category"
            value={{ value: '', label: categoryParam || 'All categories' }}
            options={[{ value: 'All categories' }, ...categoriesOptions]}
            onChange={data => handleSetSearchtParams('category', data.value)}
            inputValue={inputValue}
            onInputChange={evt => handleInputChange(evt)}
            styles={style}
          />
          <Select
            classNamePrefix="drinks-page-selector"
            placeholder="Select..."
            defaultValue={{
              value: 'All ingredients',
              label: 'All ingredients',
            }}
            name="ingredient"
            value={{ value: '', label: ingredientParam || 'All ingredients' }}
            options={[{ value: 'All ingredients' }, ...ingredientsOptions]}
            onChange={data => handleSetSearchtParams('ingredient', data.value)}
            inputValue={inputValue}
            onInputChange={evt => handleInputChange(evt)}
            styles={style}
          />
        </div>
        <div className={css.ulWrapper}>
          <ul className={css.drinkList}>
            {drinksArr?.drinks?.map(({ _id, drink, drinkThumb }) => {
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
        </div>
        {data.total > 0 && (
          <Paginator
            quantityPages={quantityPages}
            setPage={setPage}
            currentPage={currentPage}
          />
        )}
      </div>
    </section>
  ) : null;
};

export default DrinkSearch;
