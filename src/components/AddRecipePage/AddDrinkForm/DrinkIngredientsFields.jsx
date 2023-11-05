import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { CustomSelect } from './CustomSelect';

import { getDrinksIngredients } from 'services/filtersAPI';

import css from './DrinkIngredientsFields.module.css';

export const DrinkIngredientsFields = ({
  arrIngredients,
  setArrIngredients,
  countValue,
  setCountValue,
}) => {
  const [ingredientsData, setIngredientsData] = useState([]);
  const [fetchData, setFetchData] = useState(null);

  const userToken = useSelector(state => state.user.token);

  useEffect(() => {
    async function fetchIngredientsData() {
      try {
        const data = await getDrinksIngredients(userToken);
        setFetchData(data);
        const ingredientsArray = data
          .filter(el => el.title)
          .map(el => el.title);
        setIngredientsData(ingredientsArray);
      } catch (error) {
        console.error(error);
      }
    }

    if (userToken) {
      fetchIngredientsData();
    }
  }, [userToken]);

  function removeIngredient(id) {
    if (countValue !== 3) {
      setCountValue(countValue - 1);

      setArrIngredients(prevState =>
        prevState.filter(ingredient => ingredient.id !== id)
      );
    }
  }

  function onChange(id, value) {
    setArrIngredients(prevState =>
      prevState.map(volumeIngredient => {
        if (volumeIngredient.id === id) {
          return { ...volumeIngredient, measure: value };
        }
        return volumeIngredient;
      })
    );
  }

  function findObjectByTitle(title) {
    const foundObject = fetchData.find(item => item.title === title);
    if (foundObject) {
      return foundObject._id;
    }
  }

  return (
    <div className={css.ingredients}>
      <ul>
        {arrIngredients.map(({ id, title, measure }) => (
          <li key={id} className={css.ingredientItem}>
            <CustomSelect
              select={title}
              setSelect={newIngredient => {
                setArrIngredients(prevState => {
                  const updatedIngredients = prevState.map(ingredientObj => {
                    if (ingredientObj.id === id) {
                      const newIngredientId = findObjectByTitle(newIngredient);
                      return {
                        ...ingredientObj,
                        title: newIngredient,
                        ingredientId: newIngredientId || '',
                      };
                    }
                    return ingredientObj;
                  });
                  return updatedIngredients;
                });
              }}
              options={ingredientsData}
              customSelect={css.customSelect}
              customSelectBtn={css.customSelectBtn}
              customSelectContent={css.customSelectContent}
              customSelectItem={css.customSelectItem}
              customSelectText={css.customSelectText}
              defaultText={'Ingredient'}
            />
            <div
              className={css.volumeIngredient}
              onClick={() => document.getElementById(`input_${id}`).focus()}
            >
              <input
                type="number"
                defaultValue={measure}
                onChange={e => onChange(id, e.target.value)}
                className={css.numberCl}
                id={`input_${id}`}
              />
              <p className={css.volumeIngredientText}>cl</p>
            </div>
            <button
              type="button"
              onClick={() => removeIngredient(id)}
              className={css.removeBtn}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
