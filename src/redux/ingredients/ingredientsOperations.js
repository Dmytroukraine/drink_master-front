import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://drink-master-service.onrender.com';
axios.defaults.baseURL = BASE_URL;

export const getIngredients = createAsyncThunk(
  'ingredients/getIngredients',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/filters/ingredients`);
      const ingredientsList = data;
      return ingredientsList;
    } catch (error) {
      console.error('Something went wrong, please try again later');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
