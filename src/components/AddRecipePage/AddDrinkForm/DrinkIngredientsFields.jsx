import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';
import css from './DrinkIngredientsFields.module.css';

import { getDrinksIngredients } from 'services/filtersAPI';

import { CustomSelect } from './CustomSelect';

export const DrinkIngredientsFields = ({
  arrIngredients,
  setArrIngredients,
}) => {
  const [count, setCount] = useState(3);
  const [ingredientsData, setIngredientsData] = useState([]);

  const userToken = useSelector(state => state.user.token);

  useEffect(() => {
    async function fetchIngredientsData() {
      try {
        const data = await getDrinksIngredients(userToken);

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

  class Count {
    increment = () => {
      if (count === 6) return;
      setCount(count + 1);

      setArrIngredients(prevState => [
        ...prevState,
        {
          id: uuidv4(),
          title: '',
          measure: '1',
        },
      ]);
    };

    decrement = () => {
      if (count === 3) return;
      setCount(count - 1);

      setArrIngredients(prevState => prevState.slice(0, -1));
    };
  }

  const counter = new Count();

  function removeIngredient(id) {
    if (count !== 3) {
      setCount(count - 1);

      setArrIngredients(prevState =>
        prevState.filter(ingredient => ingredient.id !== id)
      );
    }
  }

  function onChange(id, value) {
    const validValue = parseFloat(value);

    setArrIngredients(prevState =>
      prevState.map(volumeIngredient => {
        if (volumeIngredient.id === id) {
          return { ...volumeIngredient, measure: validValue + '' };
        }
        return volumeIngredient;
      })
    );
  }

  return (
    <div className={css.ingredients}>
      <div className={css.panelCounter}>
        <h2>Ingredients</h2>
        <div className={css.counter}>
          <button
            type="button"
            onClick={counter.decrement}
            className={`${css.counterBtn} ${
              count === 3 ? css.minCounterBtn : ''
            }`}
          >
            -
          </button>
          <p>{count}</p>
          <button
            type="button"
            onClick={counter.increment}
            className={`${css.counterBtn} ${
              count === 6 ? css.minCounterBtn : ''
            }`}
          >
            +
          </button>
        </div>
      </div>
      <ul>
        {arrIngredients.map(({ id, title, measure }) => (
          <li key={id} className={css.ingredientItem}>
            <CustomSelect
              select={title}
              setSelect={newIngredient => {
                setArrIngredients(prevState =>
                  prevState.map(ingredientObj => {
                    if (ingredientObj.id === id) {
                      return { ...ingredientObj, title: newIngredient };
                    }
                    return ingredientObj;
                  })
                );
              }}
              options={ingredientsData}
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
