import axios from 'axios';

const BASE_URL = 'https://drink-master-service.onrender.com/';
axios.defaults.baseURL = BASE_URL;

export async function getDrinksCategory(token) {
  try {
    const { data } = await axios.get('/api/filters/categories', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getDrinksGlass(token) {
  try {
    const { data } = await axios.get('/api/filters/glasses', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getDrinksIngredients(token) {
  try {
    const response = await axios.get('/api/filters/ingredients', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
