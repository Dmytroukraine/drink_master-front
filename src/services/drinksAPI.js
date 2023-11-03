import axios from 'axios';

const BASE_URL = 'https://drink-master-service.onrender.com';
axios.defaults.baseURL = BASE_URL;

export async function getDrinksMainPage() {
  const { data } = await axios.get(`/api/drinks/mainpage`);
  return data;
}

export async function getDrinksPopular() {
  // const { data } = await axios.get(`/api/drinks/popular`);
  const { data } = await axios.get(`/popular`);
  console.log('data', data);
  return data;
}

export async function getDrinksById(id) {
  const { data } = await axios.get(`/api/drinks/${id}`);
  return data;
}
