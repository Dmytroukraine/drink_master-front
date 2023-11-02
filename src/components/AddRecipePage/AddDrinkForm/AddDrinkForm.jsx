import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { v4 as uuidv4 } from 'uuid';

import { DrinkIngredientsFields } from './DrinkIngredientsFields';
import { RecipeDescriptField } from './RecipeDescriptField';
import { AddDrinkBtn } from './AddDrinkBtn';
import { CustomSelect } from './CustomSelect';

import { getDrinksCategory } from 'services/filtersAPI';
import { getDrinksGlass } from 'services/filtersAPI';

import css from './AddDrinkForm.module.css';

import { useSelector } from 'react-redux';

export const AddDrinkForm = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [itemTitle, setItemTitle] = useState('');
  const [aboutRecipe, setAboutRecipe] = useState('');
  const [category, setCategory] = useState('Category');
  const [glass, setGlass] = useState('Glass');
  const [alcoholic, setAlcoholic] = useState('Alcoholic');

  const [uploadImg, setuploadImg] = useState(false);

  const initialIngredients = Array.from({ length: 3 }, () => ({
    id: uuidv4(),
    title: '',
    measure: '1',
  }));

  const [arrIngredients, setArrIngredients] = useState(initialIngredients);
  const [preparation, setPreparation] = useState('');

  const [categoryData, setCategoryData] = useState(null);
  const [glassData, setGlassData] = useState(null);

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

    if (userToken) {
      fetchGlassData();
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
    }
  }, [userToken]);

  const simplifiedIngredients = arrIngredients.map(({ title, measure }) => ({
    title,
    measure,
  }));

  const simplifiedDrink = {
    drinkThumb: selectedImg,
    drink: itemTitle,
    shortDescription: aboutRecipe,
    category: category,
    glass: glass,
    alcoholic: alcoholic,
    instructions: preparation,
    ingredients: simplifiedIngredients,
  };

  class AddImg {
    handleFileUpload = () => {
      const fileInput = document.getElementById('fileInput');
      fileInput.click();
    };

    handleFileSelected = event => {
      const selectedImg = event.target.files[0];
      const imageUrl = URL.createObjectURL(selectedImg);
      setSelectedImg(imageUrl);

      setuploadImg(true);
    };
  }

  class Form {
    handleSubmit = async e => {
      e.preventDefault();

      // if (
      //   drink.img === null ||
      //   drink.title === '' ||
      //   drink.recipe === '' ||
      //   drink.category === '' ||
      //   drink.glass === '' ||
      //   drink.preparation === ''
      // ) {
      //   alert('Fill in all fields');
      //   return;
      // }

      console.log(simplifiedDrink);

      try {
        const response = await axios.post(
          'https://drink-master-service.onrender.com/api/drinks/own/add',
          simplifiedDrink,
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
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

          {uploadImg ? (
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
          <CustomSelect
            select={category}
            setSelect={setCategory}
            options={categoryData}
          />

          <CustomSelect
            select={glass}
            setSelect={setGlass}
            options={glassData}
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

      <DrinkIngredientsFields
        arrIngredients={arrIngredients}
        setArrIngredients={setArrIngredients}
      />
      <RecipeDescriptField onChange={form.handleChange} />
      <AddDrinkBtn />
    </form>
  );
};
