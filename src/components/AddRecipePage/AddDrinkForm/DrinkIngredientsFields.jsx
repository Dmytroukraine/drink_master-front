import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import css from './DrinkIngredientsFields.module.css';

export const DrinkIngredientsFields = () => {
  const [count, setCount] = useState(3);

  const initialIngredients = Array.from({ length: 3 }, () => ({
    id: uuidv4(),
    ingredient: '',
    volumeIngredient: 1,
  }));
  const [arrIngredients, setArrIngredients] = useState(initialIngredients);

  class Count {
    increment = () => {
      if (count === 6) return;
      setCount(count + 1);

      setArrIngredients(prevState => [
        ...prevState,
        {
          id: uuidv4(),
          ingredient: '',
          volumeIngredient: 1,
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

    if (isNaN(validValue) || value > 9) return;

    setArrIngredients(prevState =>
      prevState.map(volumeIngredient => {
        if (volumeIngredient.id === id) {
          return { ...volumeIngredient, volumeIngredient: validValue };
        }
        return volumeIngredient;
      })
    );
  }

  console.log(arrIngredients);

  return (
    <div className={css.ingredients}>
      <div className={css.panelCounter}>
        <h2>Ingredients</h2>
        <div className={css.counter}>
          <button
            onClick={counter.decrement}
            className={`${css.counterBtn} ${
              count === 3 ? css.minCounterBtn : ''
            }`}
          >
            -
          </button>
          <p>{count}</p>
          <button
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
        {arrIngredients.map(({ id, ingredient, volumeIngredient }) => (
          <li key={id} className={css.ingredientItem}>
            <div className={css.ingredientSelect}>{ingredient}</div>
            <div
              className={css.volumeIngredient}
              onClick={() => document.getElementById(`input_${id}`).focus()}
            >
              <input
                type="number"
                defaultValue={volumeIngredient}
                onChange={e => onChange(id, e.target.value)}
                className={css.numberCl}
                id={`input_${id}`}
              />
              <p className={css.volumeIngredientText}>cl</p>
            </div>

            <button
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
