import axios from 'axios';

const BASE_URL = 'https://drink-master-service.onrender.com';
axios.defaults.baseURL = BASE_URL;

export async function getDrinksMainPage(token) {
  const response = await fetch(
    'https://drink-master-service.onrender.com/api/drinks/mainpage',
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

export async function getDrinksPopular() {
  const { data } = await axios.get(`/popular`);
  return data;
}

export async function getDrinksById(id) {
  const { data } = await axios.get(`/api/drinks/${id}`);
  return data;
}
