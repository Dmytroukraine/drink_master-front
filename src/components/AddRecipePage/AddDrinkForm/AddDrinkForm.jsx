import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { DrinkIngredientsFields } from './DrinkIngredientsFields';
import { RecipeDescriptField } from './RecipeDescriptField';
import { AddDrinkBtn } from './AddDrinkBtn';
import { CustomSelect } from './CustomSelect';

import css from './AddDrinkForm.module.css';

export const AddDrinkForm = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [itemTitle, setItemTitle] = useState('');
  const [aboutRecipe, setAboutRecipe] = useState('');
  const [category, setCategory] = useState('Category');
  const [glass, setGlass] = useState('Glass');
  const [alcoholic, setAlcoholic] = useState(true);

  const [uploadImg, setuploadImg] = useState(false);

  const initialIngredients = Array.from({ length: 3 }, () => ({
    id: uuidv4(),
    ingredient: '',
    volumeIngredient: 1,
  }));

  const [arrIngredients, setArrIngredients] = useState(initialIngredients);
  const [preparation, setPreparation] = useState('');

  const drink = {
    img: selectedImg,
    title: itemTitle,
    recipe: aboutRecipe,
    category: category,
    glass: glass,
    alcoholic: alcoholic,
    ingredients: arrIngredients,
    preparation: preparation,
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
    handleSubmit = e => {
      e.preventDefault();

      if (
        drink.img === null ||
        drink.title === '' ||
        drink.recipe === '' ||
        drink.category === '' ||
        drink.glass === '' ||
        drink.preparation === ''
      ) {
        alert('Fill in all fields');
        return;
      }

      console.log(drink);
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
          setAlcoholic(true);
          break;

        case 'nonAlcoholic':
          setAlcoholic(false);
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
          <CustomSelect select={category} setSelect={setCategory} />

          <CustomSelect select={glass} setSelect={setGlass} />

          <div className={css.informationAlcoholic}>
            <p>
              <input
                type="radio"
                id="alcoholic"
                name="alcoholType"
                onChange={form.handleChangeRadioBtn}
                checked={alcoholic === true}
              />

              <label htmlFor="alcoholic">Alcoholic</label>
            </p>

            <p>
              <input
                type="radio"
                id="nonAlcoholic"
                name="alcoholType"
                onChange={form.handleChangeRadioBtn}
                checked={alcoholic === false}
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
