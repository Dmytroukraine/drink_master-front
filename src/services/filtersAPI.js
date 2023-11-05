import axios from 'axios';

const BASE_URL = 'https://drink-master-service.onrender.com/';
axios.defaults.baseURL = BASE_URL;

export async function getDrinksCategory(token) {
  const response = await fetch(
    'https://drink-master-service.onrender.com/api/filters/categories',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();
  return data;
}

export async function getDrinksGlass(token) {
  const response = await fetch(
    'https://drink-master-service.onrender.com/api/filters/glasses',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();
  return data;
}

export async function getDrinksIngredients(token) {
  const response = await fetch(
    'https://drink-master-service.onrender.com/api/filters/ingredients',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();
  return data;
}
