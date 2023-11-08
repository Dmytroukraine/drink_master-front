import React, { useState, useEffect } from 'react';
import { notification } from 'components/Shared/notification';
import axios from 'axios';

import { v4 as uuidv4 } from 'uuid';

import { DrinkIngredientsFields } from './DrinkIngredientsFields';
import { RecipeDescriptField } from './RecipeDescriptField';
import { AddDrinkBtn } from './AddDrinkBtn';
import { CustomSelect } from './CustomSelect';

import { getDrinksCategory } from 'services/filtersAPI';
import { getDrinksGlass } from 'services/filtersAPI';

import css from './AddDrinkForm.module.css';
import cssIngredients from './DrinkIngredientsFields.module.css';

import { useSelector } from 'react-redux';

export const AddDrinkForm = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [itemTitle, setItemTitle] = useState('');
  const [aboutRecipe, setAboutRecipe] = useState('');
  const [category, setCategory] = useState('Cocktail');
  const [glass, setGlass] = useState('Highball glass');
  const [alcoholic, setAlcoholic] = useState('Alcoholic');

  const [count, setCount] = useState(3);

  const [arrIngredients, setArrIngredients] = useState([
    { id: uuidv4(), title: '', measure: '1', ingredientId: '' },
    { id: uuidv4(), title: '', measure: '1', ingredientId: '' },
    { id: uuidv4(), title: '', measure: '1', ingredientId: '' },
  ]);
  const [preparation, setPreparation] = useState('');

  const [categoryData, setCategoryData] = useState(null);
  const [glassData, setGlassData] = useState(null);
// eslint-disable-next-line
  const [selectedFile, setSelectedFile] = useState(null);

  const userToken = useSelector(state => state.user.token);

  useEffect(() => {
    async function fetchGlassData() {
      try {
        const data = await getDrinksCategory(userToken);
        setCategoryData(data);
      } catch (error) {
        console.error(error);
      }
    }

    async function fetchCategoryData() {
      try {
        const data = await getDrinksGlass(userToken);
        setGlassData(data);
      } catch (error) {
        console.error(error);
      }
    }

    if (userToken) {
      fetchCategoryData();
      fetchGlassData();
    }
  }, [userToken]);

  async function postAddDrinks(formData) {
    try {
      const res = await axios.post(
        'https://drink-master-service.onrender.com/api/drinks/own/add',
        formData,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      notification('Drink was successfully added', 'success');

      return res;
    } catch (error) {
      if (error.response && error.response.status === 409) {
        notification('Drink already exists');
      } else {
        notification('Error');
        console.error(error);
      }
    }
  }

  const simplifiedIngredients = arrIngredients.map(
    ({ title, measure, ingredientId }) => ({
      title,
      measure,
      ingredientId,
    })
  );

  class AddImg {
    handleFileUpload = () => {
      const fileInput = document.getElementById('fileInput');
      fileInput.click();
    };

    handleFileSelected = event => {
      const file = event.target.files[0];

      const url = URL.createObjectURL(file);
      setSelectedImg(url);
      setSelectedFile(file);
    };
  }

  class Form {
    handleSubmit = e => {
      e.preventDefault();

      const checkTitle = simplifiedIngredients.map(el => el.title);

      const ownDrink = {
        drink: itemTitle,
        shortDescription: aboutRecipe,
        category: category,
        glass: glass,
        alcoholic: alcoholic,
        instructions: preparation,
        ingredients: simplifiedIngredients,
      };

      if (
        ownDrink.drink === '' ||
        ownDrink.shortDescription === '' ||
        ownDrink.category === '' ||
        ownDrink.glass === '' ||
        ownDrink.instructions === '' ||
        checkTitle.some(title => title === '')
      ) {
        notification('Fill in all fields');
        return;
      }

      postAddDrinks(ownDrink);
    };

    handleChange = e => {
      const { name, value } = e.currentTarget;
      switch (name) {
        case 'itemTitle':
          setItemTitle(value);
          break;
        case 'aboutRecipe':
          setAboutRecipe(value);
          break;
        case 'textarea':
          setPreparation(value);
          break;

        default:
          break;
      }
    };

    handleChangeRadioBtn = e => {
      const { id } = e.currentTarget;

      switch (id) {
        case 'alcoholic':
          setAlcoholic('Alcoholic');
          break;

        case 'nonAlcoholic':
          setAlcoholic('Non alcoholic');
          break;

        default:
          break;
      }
    };
  }

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
          ingredientId: '',
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
  const img = new AddImg();
  const form = new Form();

  return (
    <form onSubmit={form.handleSubmit}>
      <div className={css.form}>
        <div className={css.addDrinkImg}>
          <input
            id="fileInput"
            type="file"
            onChange={img.handleFileSelected}
            style={{ display: 'none' }}
          />

          {selectedImg !== null ? (
            // eslint-disable-next-line
            <img
              src={selectedImg}
              className={css.uploadImg}
              onClick={img.handleFileUpload}
            />
          ) : (
            <div>
              <button
                type="button"
                onClick={img.handleFileUpload}
                className={css.addBtn}
              >
                +
              </button>
              <p>Add image</p>
            </div>
          )}
        </div>

        <div className={css.informationDrink}>
          <input
            type="text"
            name="itemTitle"
            placeholder="Enter item title"
            onChange={form.handleChange}
            className={css.addDrinkInput}
          />
          <input
            type="text"
            name="aboutRecipe"
            placeholder="Enter about recipe"
            onChange={form.handleChange}
            className={css.addDrinkInput}
          />
          <p className={css.informationDrinkText}>Category</p>
          <CustomSelect
            select={category}
            setSelect={setCategory}
            options={categoryData}
            customSelect={css.customSelect}
            customSelectBtn={css.customSelectBtn}
            customSelectContent={css.customSelectContent}
            customSelectItem={css.customSelectItem}
            customSelectText={css.customSelectText}
            defaultText={''}
          />

          <p className={css.informationDrinkText}>Glass</p>
          <CustomSelect
            select={glass}
            setSelect={setGlass}
            options={glassData}
            customSelect={css.customSelect}
            customSelectBtn={css.customSelectBtn}
            customSelectContent={css.customSelectContent}
            customSelectItem={css.customSelectItem}
            customSelectText={css.customSelectText}
            defaultText={''}
          />

          <div className={css.informationAlcoholic}>
            <p>
              <input
                type="radio"
                id="alcoholic"
                name="alcoholType"
                onChange={form.handleChangeRadioBtn}
                checked={alcoholic === 'Alcoholic'}
              />

              <label htmlFor="alcoholic">Alcoholic</label>
            </p>

            <p>
              <input
                type="radio"
                id="nonAlcoholic"
                name="alcoholType"
                onChange={form.handleChangeRadioBtn}
                checked={alcoholic === 'Non alcoholic'}
              />
              <label htmlFor="nonAlcoholic">Non-alcoholic</label>
            </p>
          </div>
        </div>
      </div>

      <div className={cssIngredients.panelCounter}>
        <h2>Ingredients</h2>
        <div className={cssIngredients.counter}>
          <button
            type="button"
            onClick={counter.decrement}
            className={`${cssIngredients.counterBtn} ${
              count === 3 ? cssIngredients.minCounterBtn : ''
            }`}
          >
            -
          </button>
          <p>{count}</p>
          <button
            type="button"
            onClick={counter.increment}
            className={`${cssIngredients.counterBtn} ${
              count === 6 ? cssIngredients.minCounterBtn : ''
            }`}
          >
            +
          </button>
        </div>
      </div>

      <DrinkIngredientsFields
        arrIngredients={arrIngredients}
        setArrIngredients={setArrIngredients}
        countValue={count}
        setCountValue={setCount}
      />
      <RecipeDescriptField onChange={form.handleChange} />
      <AddDrinkBtn />
    </form>
  );
};
